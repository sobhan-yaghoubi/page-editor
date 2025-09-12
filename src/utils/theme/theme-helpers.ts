import {
  ThemeConfig,
  ThemeSetting,
  ThemeSettingsSchema,
} from "@/types/themeConfig"

/**
 * Recursively process a list of theme settings to produce a plain object
 * where each setting key is initialized with its default value
 *
 * - If a setting is of type `"group"`, its children are processed recursively.
 * - Otherwise, the setting’s `defaultValue` is used
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
 * Generate a complete default `ThemeConfig` object from a settings schema
 *
 * - Iterates over each schema section.
 * - Uses `processSettings` to populate default values for all settings
 * - Adds a default `id` and `name` to the config
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
