export interface ColorPalette {
  id: string
  name: string
  colors: {
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
}

export interface ThemeTypography {
  fonts: {
    body: string
    subheading: string
    heading: string
    accent: string
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
  activePaletteId: string
  palettes: ColorPalette[]
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

export type ThemeSetting = {
  key: string
  label: string
  defaultValue?: any
  description?: string
} & (
  | { type: "color" }
  | {
      type: "select"
      options?: Array<{ label: string; value: string | number }>
    }
  | { type: "number"; unit?: string; min?: number; max?: number }
  | { type: "range"; unit?: string; min?: number; max?: number; step?: number }
  | { type: "file" }
  | { type: "group"; children: ThemeSetting[] }
  | { type: "paletteManager"; paletteSchema: Omit<ThemeSetting, "key">[] }
)

export interface SelectorInfo {
  selector: string
  description: string
  type: "element" | "class" | "id" | "pseudo" | "attribute"
  category?: "structure" | "typography" | "interactive" | "state"
}
