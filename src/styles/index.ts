import { StyleRecipeBook, ThemeConfig } from "@/types/themeConfig"
import { buttonStyles } from "./definitions/button.styles"
import { baseStyles } from "./definitions/base.styles"
import { CSSProperties } from "react"

/**
 * Build the complete set of style “recipes” used to generate concrete CSS rules.
 *
 * Combines:
 * - **Static recipes** (e.g., base and button styles).
 * - **Dynamic heading recipes** generated from the theme’s typography settings.
 *
 * Each recipe is a function that receives the active {@link ThemeConfig}
 * and returns a {@link CSSProperties} object to be serialized later.
 *
 * @param { ThemeConfig } theme - The active theme configuration.
 * @returns { StyleRecipeBook } A lookup of CSS selector → (theme) => CSSProperties.
 *
 * @example
 * const recipes = createStyleDefinitions(theme)
 * Later, serialize:
 * for (const selector in recipes) {
 *   const styleObj = recipes[selector](theme)
 *   -> { color: 'var(--color-text)', ... }
 * }
 */
export function createStyleDefinitions(theme: ThemeConfig): StyleRecipeBook {
  const staticStyles = {
    ...buttonStyles,
    ...baseStyles,
  }

  /**
   * Dynamically create heading recipes (e.g., h1–h6 or custom levels)
   * based on keys present in theme.typography.headings.
   *
   * Each heading recipe uses CSS variables populated elsewhere, such as:
   * --{level}-font, --{level}-size, --{level}-line-height, --{level}-letter-spacing, --{level}-case
   */
  const headingStyles = Object.fromEntries(
    Object.keys(theme.typography.headings).map((level) => [
      level,
      (_: ThemeConfig): CSSProperties => ({
        fontFamily: `var(--${level}-font)`,
        fontSize: `var(--${level}-size)`,
        lineHeight: `var(--${level}-line-height)`,
        letterSpacing: `var(--${level}-letter-spacing)`,
        textTransform: `var(--${level}-case)` as CSSProperties["textTransform"],
        color: `var(--color-headings)`,
      }),
    ])
  )

  return { ...staticStyles, ...headingStyles }
}
