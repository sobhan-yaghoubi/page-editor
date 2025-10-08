import {
  ThemeConfig,
  ThemeSetting,
  ThemeSettingsSchema,
} from "@/types/themeConfig"
import { CSSProperties } from "react"

/**
 * Recursively flattens a list of theme settings into a plain object of default values.
 *
 * - For settings with `type: "group"`, their `children` are processed recursively.
 * - For all other settings, the setting’s `defaultValue` is used.
 *
 * @param { ThemeSetting[] } settings - The settings to process (may include nested groups).
 * @returns { Record<string, any> } A plain object keyed by `setting.key` with default values filled in.
 *
 * @example
 * Given:
 * settings = [
 *   { key: "color", type: "color", defaultValue: "#000000" },
 *   {
 *     key: "typography",
 *     type: "group",
 *     children: [
 *       { key: "fontSize", type: "number", defaultValue: 16 },
 *       { key: "fontFamily", type: "text", defaultValue: "IranSans" },
 *     ],
 *   },
 * ]
 * processSettings(settings)
 * -> { color: "#000000", typography: { fontSize: 16, fontFamily: "IranSans" } }
 */
function processSettings(settings: ThemeSetting[]): Record<string, any> {
  const result: Record<string, any> = {}
  for (const setting of settings) {
    if (setting.type === "group" && setting.children) {
      result[setting.key] = processSettings(setting.children)
    } else {
      result[setting.key] = setting.defaultValue
    }
  }
  return result
}

/**
 * Builds a fully populated default {@link ThemeConfig} from a {@link ThemeSettingsSchema}.
 *
 * - Iterates over each schema section and uses {@link processSettings} to populate
 *   default values for all settings.
 * - Appends a default `id` (`"default-theme"`) and `name` (`"Default"`).
 *
 * @param { ThemeSettingsSchema } schema - The theme settings schema defining sections and settings.
 * @returns { ThemeConfig } A complete theme config object with defaults for every setting.
 *
 * @example
 * Minimal shape:
 * const schema = {
 *   sections: [
 *     { key: "appearance", settings: [{ key: "primary", type: "color", defaultValue: "#0ea5e9" }] }
 *   ]
 * }
 *
 * generateDefaultThemeConfig(schema)
 * -> {
 *   appearance: { primary: "#0ea5e9" },
 *   id: "default-theme",
 *   name: "Default"
 * }
 */
export function generateDefaultThemeConfig(
  schema: ThemeSettingsSchema
): ThemeConfig {
  const config: any = {}
  for (const section of schema.sections) {
    config[section.key] = processSettings(section.settings)
  }

  config.id = "default-theme"
  config.name = "Default"

  return config as ThemeConfig
}

/**
 * Converts a React {@link CSSProperties} object into a multi-line CSS declaration string.
 *
 * - Transforms camelCased property names to kebab-case (e.g., `backgroundColor` → `background-color`).
 * - Serializes each property as `"  <kebab-prop>: <value>;"` on its own line.
 * - Properties with `undefined` or `null` values are included as-is; consider filtering beforehand if needed.
 *
 * @param { CSSProperties } styles - The style object to serialize.
 * @returns { string } A CSS string suitable for embedding inside a style block or tag.
 *
 * @example
 * styleObjectToCssString({ backgroundColor: "#fff", fontSize: "14px" })
 * ->
 * "background-color: #fff;\n  font-size: 14px;"
 */
export function styleObjectToCssString(styles: CSSProperties): string {
  return Object.entries(styles)
    .map(([key, value]) => {
      const cssKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      return `  ${cssKey}: ${value};`
    })
    .join("\n")
}
