import {
  ThemeConfig,
  ThemeTypography,
  ComponentCustomCSS,
} from "@/types/themeConfig"
import { styleObjectToCssString } from "@/styles/theme-helper"
import { createStyleDefinitions } from "."

/**
 * Utilities for generating theme-driven CSS artifacts (root variables, base CSS,
 * per-component overrides, and font-face declarations) from a {@link ThemeConfig}.
 *
 * @example
 * const css = ThemeCSSGenerator.generateCSS(themeConfig)
 * Inject `css` into a <style> tag or your CSS pipeline.
 */
export class ThemeCSSGenerator {
  /**
   * Build a `:root` block with CSS custom properties derived from the theme’s
   * color palette and typography settings. These variables are consumed by the
   * generated styles and your application components.
   *
   * @param { ThemeConfig } theme - The full theme configuration.
   * @returns { string } A CSS string containing a `:root { ... }` block.
   *
   * @example
   * const vars = ThemeCSSGenerator.generateCssVariables(theme)
   * ->
   * ":root { --color-background: #fff; --paragraph-size: 16px; ... }"
   */
  static generateCssVariables(theme: ThemeConfig) {
    const { colors, typography } = theme

    return `
      :root {
        /* --- Colors --- */
        --color-background: ${colors.background};
        --color-headings: ${colors.headings};
        --color-text: ${colors.text};
        --color-links: ${colors.links};
        --color-links-hover: ${colors.hoverLinks};
        --color-borders: ${colors.borders};
        --color-shadow: ${colors.shadow};
        
        /* --- Primary Button --- */
        --btn-primary-bg: ${colors.primaryButton.background};
        --btn-primary-text: ${colors.primaryButton.text};
        --btn-primary-border-color: ${colors.primaryButton.borders};
        --btn-primary-bg-hover: ${colors.primaryButton.hoverBackground};
        --btn-primary-text-hover: ${colors.primaryButton.hoverText};
        --btn-primary-border-color-hover: ${colors.primaryButton.hoverBorders};
        
        /* --- Secondary Button --- */
        --btn-secondary-bg: ${colors.secondaryButton.background};
        --btn-secondary-text: ${colors.secondaryButton.text};
        --btn-secondary-border-color: ${colors.secondaryButton.borders};
        --btn-secondary-bg-hover: ${colors.secondaryButton.hoverBackground};
        --btn-secondary-text-hover: ${colors.secondaryButton.hoverText};
        --btn-secondary-border-color-hover: ${
          colors.secondaryButton.hoverBorders
        };
        
        /* --- Input --- */
        --input-bg: ${colors.inputs.background};
        --input-text: ${colors.inputs.text};
        --input-border-color: ${colors.inputs.borders};
        --input-bg-hover: ${colors.inputs.hoverBackground};
        
        /* --- Typography Fonts --- */
        --font-body: "${typography.fonts.body.name}", sans-serif;
        --font-heading: "${typography.fonts.heading.name}", sans-serif;
        --font-accent: "${typography.fonts.accent.name}", sans-serif;
        
        /* --- Paragraph --- */
        --paragraph-size: ${typography.paragraph.size}px;
        --paragraph-line-height: ${this.getLineHeight(
          typography.paragraph.lineHeight
        )};
      
        /* --- Headings --- */
        ${Object.entries(typography.headings)
          .map(
            ([level, style]) => `
        --${level}-font: var(--font-${style.font});
        --${level}-size: ${style.size}px;
        --${level}-line-height: ${this.getLineHeight(style.lineHeight)};
        --${level}-letter-spacing: ${this.getLetterSpacing(
              style.letterSpacing
            )};
        --${level}-case: ${style.case === "uppercase" ? "uppercase" : "none"};
        `
          )
          .join("")}
        
        /* --- Button Styles --- */
        --btn-primary-border-width: ${
          typography.buttons.primary.borderThickness
        }px;
        --btn-primary-radius: ${typography.buttons.primary.cornerRadius}px;
        --btn-primary-font: var(--font-${typography.buttons.primary.font});
        --btn-primary-weight: ${typography.buttons.primary.textWeight};
        
        --btn-secondary-border-width: ${
          typography.buttons.secondary.borderThickness
        }px;
        --btn-secondary-radius: ${typography.buttons.secondary.cornerRadius}px;
        --btn-secondary-font: var(--font-${typography.buttons.secondary.font});
        --btn-secondary-weight: ${typography.buttons.secondary.textWeight};
      }
    `
  }

  /**
   * Produce the baseline CSS rules by wiring the previously generated variables
   * into usable styles (e.g., body, headings, links, buttons). Any custom CSS
   * defined on the theme is appended at the end.
   *
   * @param { ThemeConfig } theme - The theme configuration driving the style recipes.
   * @returns { string } A CSS string with concrete rules (selectors and declarations).
   *
   */
  static generateCSS(theme: ThemeConfig): string {
    let finalCss = ""

    const styleRecipes = createStyleDefinitions(theme)

    for (const selector in styleRecipes) {
      const styleFunction = styleRecipes[selector]
      const styleObject = styleFunction(theme)
      const cssProperties = styleObjectToCssString(styleObject)
      finalCss += `${selector} {\n${cssProperties}\n}\n\n`
    }

    if (theme.customCSS) {
      finalCss += `/* --- Custom User CSS --- */\n${theme.customCSS}\n`
    }

    return finalCss
  }

  /**
   * Generate component-scoped CSS for a specific component instance.
   * If no custom CSS exists for the component, returns an empty string.
   *
   * @param { ComponentCustomCSS } componentCSS - The component’s custom CSS payload.
   * @param { string } componentSelector - The CSS selector that targets the component instance.
   * @returns { string } A CSS rule block (or an empty string if no CSS provided).
   *
   * @example
   * ThemeCSSGenerator.generateComponentCSS(
   *   { componentId: "card-1", css: "padding: 1rem;" },
   *   ".card[data-id='card-1']"
   * )
   * ->
   * "/* Custom CSS for component card-1 \n.card[data-id='card-1'] { padding: 1rem; }"
   */
  static generateComponentCSS(
    componentCSS: ComponentCustomCSS,
    componentSelector: string
  ): string {
    if (!componentCSS.css) return ""
    return `
      /* Custom CSS for component ${componentCSS.componentId} */
      ${componentSelector} {
        ${componentCSS.css}
      }
    `.trim()
  }

  /**
   * Generate a full CSS scope for the given theme and a scope name.
   * This includes font-face declarations, CSS variables, and the base CSS,
   * wrapped for use under a given scope (e.g., a class applied to an editor root).
   *
   * @param { ThemeConfig } themeConfig - The theme to serialize to CSS.
   * @param { string } scopeName - The class name to scope styles under (without the leading dot).
   * @returns { string } A single CSS string containing font faces, variables, and scoped rules.
   *
   * @example
   * const css = ThemeCSSGenerator.generateCssScope(theme, "editor-scope")
   * ->
   * "@font-face {...}\n:root {...}\n.editor-scope { ... }"
   */
  static generateCssScope(themeConfig: ThemeConfig, scopeName: string) {
    const fontImportUrl = this.generateFontImports(themeConfig.typography)

    const cssVariables = this.generateCssVariables(themeConfig)
    const cssClasses = this.generateCSS(themeConfig)

    const scopedCSS = `
        ${fontImportUrl}
    
        ${cssVariables}
        
        .${scopeName} {
          ${cssClasses}
        }
      `

    return scopedCSS
  }

  /**
   * Build `@font-face` declarations for all unique fonts referenced by the theme’s
   * typography (body, heading, accent, subheading).
   *
   * @param { ThemeTypography } typography - Typography configuration with font metadata and file paths.
   * @returns { string } A CSS string containing one or more `@font-face` rules (or an empty string if none).
   *
   * @example
   * const faces = ThemeCSSGenerator.generateFontImports(theme.typography)
   * ->
   * "@font-face { font-family: Inter; font-style: normal; font-weight: 400; ... }"
   */
  static generateFontImports(typography: ThemeTypography): string {
    const uniqueFonts = new Set([
      typography.fonts.body,
      typography.fonts.heading,
      typography.fonts.accent,
      typography.fonts.subheading,
    ])

    if (uniqueFonts.size === 0) {
      return ""
    }

    const fontFamilies = Array.from(uniqueFonts)
      .map((font) =>
        Object.entries(font.path)
          .map(
            (fontPath) => `
            @font-face {  
              font-family: ${font.name};
              font-style: normal;
              font-weight: ${fontPath[1].weight};
              font-display: swap;
              src : url("${fontPath[1].url}") format("${fontPath[1].format}") 
            }`
          )
          .join(" ")
      )
      .join(" ")

    return fontFamilies
  }

  /**
   * Translate a semantic line-height token into a numeric CSS line-height.
   *
   * @param { "tight" | "normal" | "loose" } value - Semantic token for line-height.
   * @returns { string } The numeric CSS line-height (e.g., `"1.25"`).
   *
   * @example
   * "1.5"
   * ThemeCSSGenerator["getLineHeight"]("normal")
   */
  private static getLineHeight(value: "tight" | "normal" | "loose"): string {
    switch (value) {
      case "tight":
        return "1.25"
      case "loose":
        return "1.75"
      case "normal":
      default:
        return "1.5"
    }
  }

  /**
   * Translate a semantic letter-spacing token into a CSS `letter-spacing` value.
   *
   * @param { "tight" | "normal" | "loose" } value - Semantic token for letter-spacing.
   * @returns { string } The CSS letter-spacing value (e.g., `"-0.025em"`).
   *
   * @example
   *"0"
   * ThemeCSSGenerator["getLetterSpacing"]("normal")
   */
  private static getLetterSpacing(value: "tight" | "normal" | "loose"): string {
    switch (value) {
      case "tight":
        return "-0.025em"
      case "loose":
        return "0.05em"
      case "normal":
      default:
        return "0"
    }
  }
}
