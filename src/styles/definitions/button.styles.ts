import { StyleRecipeBook } from "@/types/themeConfig"

/**
 * Button style recipes.
 *
 * Each key is a CSS selector and each value is a recipe function that returns
 * a {@link CSSProperties}-like object. These recipes assume the presence of
 * button-related CSS custom properties (e.g., `--btn-primary-*`, `--btn-secondary-*`)
 * defined elsewhere (typically by a theme variable generator).
 *
 * Selectors included:
 * - `.btn` — Base button layout and transitions
 * - `.btn-primary` + `:hover` — Primary colorway and hover state
 * - `.btn-secondary` + `:hover` — Secondary colorway and hover state
 *
 * Expected variables (non-exhaustive):
 * - `--btn-primary-bg`, `--btn-primary-text`, `--btn-primary-border-color`,
 *   `--btn-primary-bg-hover`, `--btn-primary-text-hover`,
 *   `--btn-primary-border-color-hover`, `--btn-primary-border-width`,
 *   `--btn-primary-radius`, `--btn-primary-font`, `--btn-primary-weight`
 * - `--btn-secondary-*` counterparts mirroring the primary set
 *
 * @example
 * import { buttonStyles } from "./definitions/button.styles"
 * Later during CSS generation:
 * for (const selector in buttonStyles) {
 *   const styleObj = buttonStyles[selector](theme)
 *   Serialize `styleObj` into a CSS rule for `selector`
 * }
 */
export const buttonStyles: StyleRecipeBook = {
  ".btn": (_) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
    transition:
      "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
  }),

  ".btn-primary": (_) => ({
    backgroundColor: "var(--btn-primary-bg)",
    color: "var(--btn-primary-text)",
    border:
      "var(--btn-primary-border-width) solid var(--btn-primary-border-color)",
    borderRadius: "var(--btn-primary-radius)",
    fontFamily: "var(--btn-primary-font)",
    fontWeight: "var(--btn-primary-weight)",
  }),

  ".btn-primary:hover": (_) => ({
    backgroundColor: "var(--btn-primary-bg-hover)",
    color: "var(--btn-primary-text-hover)",
    borderColor: "var(--btn-primary-border-color-hover)",
  }),

  ".btn-secondary": (_) => ({
    backgroundColor: "var(--btn-secondary-bg)",
    color: "var(--btn-secondary-text)",
    border:
      "var(--btn-secondary-border-width) solid var(--btn-secondary-border-color)",
    borderRadius: "var(--btn-secondary-radius)",
    fontFamily: "var(--btn-secondary-font)",
    fontWeight: "var(--btn-secondary-weight)",
  }),

  ".btn-secondary:hover": (_) => ({
    backgroundColor: "var(--btn-secondary-bg-hover)",
    color: "var(--btn-secondary-text-hover)",
    borderColor: "var(--btn-secondary-border-color-hover)",
  }),
}
