import { CSSProperties } from "react"

export interface ThemeColors {
  background: string
  headings: string
  text: string
  links: string
  hoverLinks: string
  borders: string
  shadow: string
  primaryButton: {
    background: string
    text: string
    borders: string
    hoverBackground: string
    hoverText: string
    hoverBorders: string
  }
  secondaryButton: {
    background: string
    text: string
    borders: string
    hoverBackground: string
    hoverText: string
    hoverBorders: string
  }
  inputs: {
    background: string
    transparent: string
    text: string
    borders: string
    hoverBackground: string
  }
  variants: {
    background: string
    text: string
    borders: string
    hoverBackground: string
    hoverText: string
    hoverBorders: string
  }
  selectedVariants: {
    background: string
    text: string
    borders: string
    hoverBackground: string
    hoverText: string
    hoverBorders: string
  }
}

export interface ThemeTypography {
  fonts: {
    body: {
      path:
        | Array<{ weight: number; url: string; format: string }>
        | { url: string; format: string }
      name: string
    }
    subheading: {
      path:
        | Array<{ weight: number; url: string; format: string }>
        | { url: string; format: string }
      name: string
    }
    heading: {
      path:
        | Array<{ weight: number; url: string; format: string }>
        | { url: string; format: string }
      name: string
    }
    accent: {
      path:
        | Array<{ weight: number; url: string; format: string }>
        | { url: string; format: string }
      name: string
    }
  }
  paragraph: {
    size: number
    lineHeight: "tight" | "normal" | "loose"
  }
  headings: {
    h1: HeadingStyle
    h2: HeadingStyle
    h3: HeadingStyle
    h4: HeadingStyle
    h5: HeadingStyle
    h6: HeadingStyle
  }
  buttons: {
    primary: ButtonStyle
    secondary: ButtonStyle
  }
}

export interface HeadingStyle {
  font: "heading" | "accent"
  size: number
  lineHeight: "tight" | "normal" | "loose"
  letterSpacing: "tight" | "normal" | "loose"
  case: "default" | "uppercase"
}

export interface ButtonStyle {
  borderThickness: number
  cornerRadius: number
  font: "body" | "accent"
  textWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}

export interface ThemeBranding {
  logo: string
  favicon: string
}

export interface ThemeConfig {
  id: string
  name: string
  storeId: string
  activeColorPalette?: string
  colors: ThemeColors
  typography: ThemeTypography
  branding: ThemeBranding
  customCSS?: string
  createdAt: Date
  updatedAt: Date
}

export interface ComponentCustomCSS {
  id: string
  componentId: string
  storeId: string
  css: string
  selectors: SelectorInfo[]
  createdAt: Date
  updatedAt: Date
}

export interface ThemeSettingsSchema {
  sections: ThemeSection[]
}

export interface ThemeSection {
  key: string
  label: string
  icon?: string
  settings: ThemeSetting[]
}

export interface ThemeSetting {
  key: string
  label: string
  type: "color" | "palette" | "select" | "number" | "range" | "file" | "group"
  defaultValue?: any
  min?: number
  max?: number
  step?: number
  unit?: string
  options?: Array<{ label: string; value: string | number }>
  children?: ThemeSetting[]
  description?: string
}

export interface SelectorInfo {
  selector: string
  description: string
  type: "element" | "class" | "id" | "pseudo" | "attribute"
  category?: "structure" | "typography" | "interactive" | "state"
}
