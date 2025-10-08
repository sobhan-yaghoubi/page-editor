import { create } from "zustand"
import { ThemeConfig } from "@/types/themeConfig"
import { THEME_SETTINGS_SCHEMA } from "../configs/theme"
import { generateDefaultThemeConfig } from "@/styles/theme-helper"
import { set } from "lodash"

type ThemeState = {
  themeConfig: ThemeConfig
  updateThemeValue: (path: string, value: any) => void
}

const initialConfig = generateDefaultThemeConfig(THEME_SETTINGS_SCHEMA)

const useThemeStore = create<ThemeState>((zustandSet) => ({
  themeConfig: initialConfig,

  updateThemeValue: (path, value) => {
    zustandSet((state) => {
      const newConfig = JSON.parse(JSON.stringify(state.themeConfig))

      set(newConfig, path, value)
      return { themeConfig: newConfig }
    })
  },
}))

export { useThemeStore }
