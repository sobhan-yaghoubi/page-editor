import { StyleRecipeBook } from "@/types/themeConfig"

/**
 * Base (global) style recipes for the editor scope and anchor tags.
 *
 * These recipes wire up high-level typography and color variables intended
 * for the editor surface and common elements like links.
 *
 * Selectors included:
 * - `.editor-theme-scope` — Container/root for the themed editor area
 * - `a`, `a:hover` — Link colors and hover transition
 *
 * Expected variables:
 * - `--theme-color-background`, `--theme-color-text`
 * - `--theme-font-body`
 * - `--theme-paragraph-size`, `--theme-paragraph-line-height`
 * - `--theme-color-links`, `--theme-color-links-hover`
 *
 * @example
 * import { baseStyles } from "./definitions/base.styles"
 * Later during CSS generation:
 * for (const selector in baseStyles) {
 *   const styleObj = baseStyles[selector](theme)
 *   Serialize `styleObj` to CSS for `selector`
 * }
 */
export const baseStyles: StyleRecipeBook = {
  ".editor-theme-scope": (_) => ({
    backgroundColor: "var(--theme-color-background)",
    color: "var(--theme-color-text)",
    fontFamily: "var(--theme-font-body)",
    fontSize: "var(--theme-paragraph-size)",
    lineHeight: "var(--theme-paragraph-line-height)",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  }),

  a: (_) => ({
    color: "var(--theme-color-links)",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
  }),

  "a:hover": (_) => ({
    color: "var(--theme-color-links-hover)",
  }),
}
