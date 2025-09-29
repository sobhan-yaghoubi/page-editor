import { ThemeSetting, ThemeSettingsSchema } from "../types/themeConfig"

// Available font families
export const FONT_OPTIONS = [
  { label: "Inter", value: "Inter" },
  { label: "Roboto", value: "Roboto" },
  { label: "Open Sans", value: "Open Sans" },
  { label: "Lato", value: "Lato" },
  { label: "Montserrat", value: "Montserrat" },
  { label: "Poppins", value: "Poppins" },
  { label: "Source Sans Pro", value: "Source Sans Pro" },
  { label: "Nunito", value: "Nunito" },
  { label: "Raleway", value: "Raleway" },
  { label: "Ubuntu", value: "Ubuntu" },
  { label: "Playfair Display", value: "Playfair Display" },
  { label: "Merriweather", value: "Merriweather" },
  { label: "Lora", value: "Lora" },
  { label: "Oswald", value: "Oswald" },
  { label: "Bebas Neue", value: "Bebas Neue" },
  { label: "Dancing Script", value: "Dancing Script" },
  { label: "Pacifico", value: "Pacifico" },
  { label: "Lobster", value: "Lobster" },
  { label: "Caveat", value: "Caveat" },
]

export const FONT_WEIGHT_OPTIONS = [
  { label: "Thin (100)", value: 100 },
  { label: "Extra Light (200)", value: 200 },
  { label: "Light (300)", value: 300 },
  { label: "Normal (400)", value: 400 },
  { label: "Medium (500)", value: 500 },
  { label: "Semibold (600)", value: 600 },
  { label: "Bold (700)", value: 700 },
  { label: "Extra Bold (800)", value: 800 },
  { label: "Black (900)", value: 900 },
]

export const LINE_HEIGHT_OPTIONS = [
  { label: "Tight", value: "tight" },
  { label: "Normal", value: "normal" },
  { label: "Loose", value: "loose" },
]

export const LETTER_SPACING_OPTIONS = [
  { label: "Tight", value: "tight" },
  { label: "Normal", value: "normal" },
  { label: "Loose", value: "loose" },
]

export const CASE_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Uppercase", value: "uppercase" },
]

export const FONT_TYPE_OPTIONS = [
  { label: "Body", value: "body" },
  { label: "Accent", value: "accent" },
]

export const HEADING_FONT_OPTIONS = [
  { label: "Heading", value: "heading" },
  { label: "Accent", value: "accent" },
]

const PALETTE_FIELDS: ThemeSetting[] = [
  {
    label: "Background",
    type: "color",
    defaultValue: "#ffffff",
    key: "background",
  },
  {
    label: "Headings",
    type: "color",
    defaultValue: "#1a1a1a",
    key: "headings",
  },
  { label: "Text", type: "color", defaultValue: "#4a5568", key: "text" },
  { label: "Links", type: "color", defaultValue: "#3182ce", key: "links" },
  {
    label: "Hover Links",
    type: "color",
    defaultValue: "#2c5aa0",
    key: "hoverLinks",
  },
  { label: "Borders", type: "color", defaultValue: "#e2e8f0", key: "borders" },
  { label: "Shadow", type: "color", defaultValue: "#00000020", key: "shadow" },

  {
    label: "Primary Button",
    type: "group",
    key: "primaryButton",
    children: [
      {
        label: "Background",
        type: "color",
        defaultValue: "#3182ce",
        key: "background",
      },
      { label: "Text", type: "color", defaultValue: "#ffffff", key: "text" },
      {
        label: "Borders",
        type: "color",
        defaultValue: "#3182ce",
        key: "borders",
      },
      {
        label: "Hover Background",
        type: "color",
        defaultValue: "#2c5aa0",
        key: "hoverBackground",
      },
      {
        label: "Hover Text",
        type: "color",
        defaultValue: "#ffffff",
        key: "hoverText",
      },
      {
        label: "Hover Borders",
        type: "color",
        defaultValue: "#2c5aa0",
        key: "hoverBorders",
      },
    ],
  },

  // ... (Add your other color groups here: secondaryButton, inputs, etc.)
]

export const THEME_SETTINGS_SCHEMA: ThemeSettingsSchema = {
  sections: [
    {
      key: "palettes",
      label: "Colors Palettes",
      icon: "Palette",
      settings: PALETTE_FIELDS,
    },
    {
      key: "branding",
      label: "Logo & Favicon",
      icon: "Image",
      settings: [
        {
          key: "logo",
          label: "Logo",
          type: "file",
          defaultValue: "",
          description: "Upload your store logo",
        },
        {
          key: "favicon",
          label: "Favicon",
          type: "file",
          defaultValue: "",
          description: "Upload your favicon (16x16 or 32x32 px)",
        },
      ],
    },
    {
      key: "typography",
      label: "Typography",
      icon: "Type",
      settings: [
        {
          key: "fonts",
          label: "Fonts",
          type: "group",
          children: [
            {
              key: "body",
              label: "Body",
              type: "select",
              defaultValue: "Inter",
              options: FONT_OPTIONS,
            },
            {
              key: "subheading",
              label: "Subheading",
              type: "select",
              defaultValue: "Inter",
              options: FONT_OPTIONS,
            },
            {
              key: "heading",
              label: "Heading",
              type: "select",
              defaultValue: "Inter",
              options: FONT_OPTIONS,
            },
            {
              key: "accent",
              label: "Accent",
              type: "select",
              defaultValue: "Inter",
              options: FONT_OPTIONS,
            },
          ],
        },
        {
          key: "paragraph",
          label: "Paragraph",
          type: "group",
          children: [
            {
              key: "size",
              label: "Size",
              type: "number",
              defaultValue: 16,
              unit: "px",
              min: 12,
              max: 24,
            },
            {
              key: "lineHeight",
              label: "Line Height",
              type: "select",
              defaultValue: "normal",
              options: LINE_HEIGHT_OPTIONS,
            },
          ],
        },
        {
          key: "headings",
          label: "Headings",
          type: "group",
          children: [
            ...Array.from({ length: 6 }, (_, i) => ({
              key: `h${i + 1}`,
              label: `Heading ${i + 1}`,
              type: "group" as const,
              children: [
                {
                  key: "font",
                  label: "Font",
                  type: "select" as const,
                  defaultValue: "heading",
                  options: HEADING_FONT_OPTIONS,
                },
                {
                  key: "size",
                  label: "Size",
                  type: "number" as const,
                  defaultValue: 32 - i * 4,
                  unit: "px",
                  min: 12,
                  max: 48,
                },
                {
                  key: "lineHeight",
                  label: "Line Height",
                  type: "select" as const,
                  defaultValue: "normal",
                  options: LINE_HEIGHT_OPTIONS,
                },
                {
                  key: "letterSpacing",
                  label: "Letter Spacing",
                  type: "select" as const,
                  defaultValue: "normal",
                  options: LETTER_SPACING_OPTIONS,
                },
                {
                  key: "case",
                  label: "Case",
                  type: "select" as const,
                  defaultValue: "default",
                  options: CASE_OPTIONS,
                },
              ],
            })),
          ],
        },
        {
          key: "buttons",
          label: "Buttons",
          type: "group",
          children: [
            {
              key: "primary",
              label: "Primary Button",
              type: "group",
              children: [
                {
                  key: "borderThickness",
                  label: "Border Thickness",
                  type: "range",
                  defaultValue: 1,
                  unit: "px",
                  min: 0,
                  max: 5,
                  step: 1,
                },
                {
                  key: "cornerRadius",
                  label: "Corner Radius",
                  type: "range",
                  defaultValue: 6,
                  unit: "px",
                  min: 0,
                  max: 50,
                  step: 1,
                },
                {
                  key: "font",
                  label: "Font",
                  type: "select",
                  defaultValue: "body",
                  options: FONT_TYPE_OPTIONS,
                },
                {
                  key: "textWeight",
                  label: "Text Weight",
                  type: "select",
                  defaultValue: 500,
                  options: FONT_WEIGHT_OPTIONS,
                },
              ],
            },
            {
              key: "secondary",
              label: "Secondary Button",
              type: "group",
              children: [
                {
                  key: "borderThickness",
                  label: "Border Thickness",
                  type: "range",
                  defaultValue: 1,
                  unit: "px",
                  min: 0,
                  max: 5,
                  step: 1,
                },
                {
                  key: "cornerRadius",
                  label: "Corner Radius",
                  type: "range",
                  defaultValue: 6,
                  unit: "px",
                  min: 0,
                  max: 50,
                  step: 1,
                },
                {
                  key: "font",
                  label: "Font",
                  type: "select",
                  defaultValue: "body",
                  options: FONT_TYPE_OPTIONS,
                },
                {
                  key: "textWeight",
                  label: "Text Weight",
                  type: "select",
                  defaultValue: 500,
                  options: FONT_WEIGHT_OPTIONS,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
