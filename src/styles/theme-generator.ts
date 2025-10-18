import { ThemeConfig, ThemeTypography } from "@/types/themeConfig"
import {
  getAllStaticStyles,
  getAllStaticStylesWithCustomQueries,
} from "./static-styles"

export class ThemeCSSGenerator {
  static generateCssVariables(theme: ThemeConfig): string {
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
   * Generate dynamic heading styles based on theme config
   */
  static generateHeadingStyles(theme: ThemeConfig): string {
    return Object.keys(theme.typography.headings)
      .map(
        (level) => `
        ${level} {
          font-family: var(--${level}-font);
          font-size: var(--${level}-size);
          line-height: var(--${level}-line-height);
          letter-spacing: var(--${level}-letter-spacing);
          text-transform: var(--${level}-case);
          color: var(--color-headings);
        }
      `
      )
      .join("\n")
  }

  /**
   * Generate complete CSS including static styles and dynamic theme
   */
  static generateCSS(theme: ThemeConfig, scope?: string): string {
    const staticCSS = getAllStaticStyles()

    const headingCSS = this.generateHeadingStyles(theme)

    let finalCSS = `
      /* === Static Component Styles === */
      ${staticCSS}
        
      /* === Dynamic Theme Styles === */
      ${headingCSS}
    `

    if (theme.customCSS) {
      finalCSS += `\n/* --- Custom User CSS --- */\n${theme.customCSS}\n`
    }

    if (scope) {
      finalCSS = this.applyScope(finalCSS, scope)
    }

    return finalCSS
  }

  static generateCssWidthCustomQuery(
    theme: ThemeConfig,
    customQueryName: string,
    scope?: string
  ) {
    const staticCSS = getAllStaticStylesWithCustomQueries(customQueryName)

    const headingCSS = this.generateHeadingStyles(theme)

    let finalCSS = `
      /* === Static Component Styles === */
      ${staticCSS}
        
      /* === Dynamic Theme Styles === */
      ${headingCSS}
    `

    if (theme.customCSS) {
      finalCSS += `\n/* --- Custom User CSS --- */\n${theme.customCSS}\n`
    }

    if (scope) {
      finalCSS = this.applyScope(finalCSS, scope)
    }

    return finalCSS
  }

  /**
   * Apply scope prefix to all selectors
   */
  private static applyScope(css: string, scope: string): string {
    return css.replace(
      /([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g,
      (match, selector, ending) => {
        const trimmedSelector = selector.trim()

        if (trimmedSelector.startsWith("@") || trimmedSelector === ":root") {
          return match
        }
        return `${scope} ${trimmedSelector}${ending}`
      }
    )
  }

  /**
   * Generate full scoped CSS (fonts + variables + styles)
   */
  static generateCssScope(themeConfig: ThemeConfig, scopeName: string): string {
    const fontImports = this.generateFontImports(themeConfig.typography)
    const cssVariables = this.generateCssVariables(themeConfig)
    const scopedStyles = this.generateCSS(themeConfig, `.${scopeName}`)

    return `
      ${fontImports}
      ${cssVariables}
      ${scopedStyles}
    `
  }

  static generateFontImports(typography: ThemeTypography): string {
    const uniqueFonts = new Set([
      typography.fonts.body,
      typography.fonts.heading,
      typography.fonts.accent,
      typography.fonts.subheading,
    ])

    if (uniqueFonts.size === 0) return ""

    return Array.from(uniqueFonts)
      .map((font) =>
        Object.entries(font.path)
          .map(
            ([, fontPath]) => `
              @font-face {
                font-family: ${font.name};
                font-style: normal;
                font-weight: ${fontPath.weight};
                font-display: swap;
                src: url("${fontPath.url}") format("${fontPath.format}");
              }
            `
          )
          .join("")
      )
      .join("")
  }

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
