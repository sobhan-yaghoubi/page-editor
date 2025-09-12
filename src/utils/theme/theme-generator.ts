import {
  ThemeConfig,
  ThemeTypography,
  ComponentCustomCSS,
} from "@/types/themeConfig"

/**
 * Utilities for generating theme-driven CSS artifacts (variables, base CSS,
 * component overrides, and Google Font imports) from a `ThemeConfig`
 */
export class ThemeCSSGenerator {
  /**
   * Build a CSS `:root` block with custom properties derived from the theme colors
   * and typography settings. These variables are intended to be consumed by the
   * generated styles and your app’s components
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
        --font-body: "${typography.fonts.body}", sans-serif;
        --font-heading: "${typography.fonts.heading}", sans-serif;
        --font-accent: "${typography.fonts.accent}", sans-serif;
        
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
   * Produce the baseline CSS that wires the previously generated variables into
   * usable styles for the editor scope (body, headings, links, buttons), and
   * appends any custom CSS defined on the theme
   */
  static generateCSS(theme: ThemeConfig): string {
    const { typography } = theme

    return `
      /* --- Base HTML & Body Styles --- */
      .editor-theme-scope {
        background-color: var(--theme-color-background);
        color: var(--theme-color-text);
        font-family: var(--theme-font-body);
        font-size: var(--theme-paragraph-size);
        line-height: var(--theme-paragraph-line-height);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
        
      /* --- Headings --- */
      ${Object.keys(typography.headings)
        .map(
          (level) => `${level} {
        font-family: var(--theme-${level}-font);
        font-size: var(--theme-${level}-size);
        line-height: var(--theme-${level}-line-height);
        letter-spacing: var(--theme-${level}-letter-spacing);
        text-transform: var(--theme-${level}-case);
        color: var(--theme-color-headings);
      }`
        )
        .join("\n")}
      
      /* --- Links --- */
      a {
        color: var(--theme-color-links);
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }
      a:hover {
        color: var(--theme-color-links-hover);
      }
      
      /* --- Buttons style --- */
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem; /* Example padding */
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      }
      
      /* --- Primary Button Style --- */
      .btn-primary {
        background-color: var(--btn-primary-bg);
        color: var(--btn-primary-text);
        border: var(--btn-primary-border-width) solid var(--btn-primary-border-color);
        border-radius: var(--btn-primary-radius);
        font-family: var(--btn-primary-font);
        font-weight: var(--btn-primary-weight);
      }
      .btn-primary:hover {
        background-color: var(--btn-primary-bg-hover);
        color: var(--btn-primary-text-hover);
        border-color: var(--btn-primary-border-color-hover);
      }
      
      /* --- Second Button Style --- */
      .btn-secondary {
        background-color: var(--btn-secondary-bg);
        color: var(--btn-secondary-text);
        border: var(--btn-secondary-border-width) solid var(--btn-secondary-border-color);
        border-radius: var(--btn-secondary-radius);
        font-family: var(--btn-secondary-font);
        font-weight: var(--btn-secondary-weight);
      }
      
      .btn-secondary:hover {
        background-color: var(--btn-secondary-bg-hover);
        color: var(--btn-secondary-text-hover);
        border-color: var(--btn-secondary-border-color-hover);
      }
      
      /* --- Custom Css Styles --- */
      ${theme.customCSS || ""}

`.trim()
  }

  /**
   * Generate component-scoped custom CSS for a specific component instance.
   * If no custom CSS is provided for the component, returns an empty string
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
   * Build a Google Fonts `@import` statement for all unique fonts referenced
   * by the theme’s typography (body, heading, accent, subheading)
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
      .map(
        (font) =>
          `${font.replace(
            /\s+/g,
            "+"
          )}:wght@100;200;300;400;500;600;700;800;900`
      )
      .join("&family=")

    return `@import url('https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap');`
  }

  /**
   * Translate a semantic line-height token into a numeric CSS line-height
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
   * Translate a semantic letter-spacing token into a CSS letter-spacing value
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
