import React from "react"
import { ThemeCSSGenerator } from "@/utils/theme/theme-generator"
import { useThemeStore } from "@/stores/theme.store"

export const ThemeGenerator = ({ children }: { children: React.ReactNode }) => {
  const themeConfig = useThemeStore((state) => state.themeConfig)

  if (!themeConfig) {
    return null
  }

  const fontImportUrl = ThemeCSSGenerator.generateFontImports(
    themeConfig.typography
  )

  const cssVariables = ThemeCSSGenerator.generateCssVariables(themeConfig)
  const cssClasses = ThemeCSSGenerator.generateCSS(themeConfig)

  const scopedCSS = `
    ${fontImportUrl}

    ${cssVariables}
    
    .editor-theme-scope {
      ${cssClasses}
    }
  `

  return (
    <div className="editor-theme-scope">
      <style id="dynamic-theme-styles" type="text/css">
        {scopedCSS}
      </style>
      {children}
    </div>
  )
}
