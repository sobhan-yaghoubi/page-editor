import { Layouts, Sections } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { PanelTopIcon } from "lucide-react"

const settings = [
  {
    key: "logo-url",
    label: "LOGO",
    type: "image",
    defaultValue:
      "https://jensetjoor.com/_next/image?url=https%3A%2F%2Fapi.jensetjoor.com%2Fmedia%2Flandingcategories%2Fdefault%2F60d59640da97dda50966b41a3689bd94.jpg&w=128&q=75",
  },
  {
    key: "navigation",
    label: "Navigation Menu",
    type: "repeater",
    defaultValue: [],
    itemSchema: [
      {
        key: "menu-item-text",
        type: "text",
        label: "Name",
      },
      {
        key: "menu-item-link",
        label: "Link",
        type: "asyncSelect",
        sourceKey: "allAppRoutes",
        defaultValue: "#",
      },
    ],
  },
  {
    key: "backgroundColor",
    label: "Background Color",
    type: "color",
    defaultValue: "transparent",
    section: "general",
  },
  {
    key: "paddingHorizontal",
    label: "Side Padding",
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    unit: "px",
    defaultValue: 24,
    section: "general",
  },
  {
    key: "gap",
    label: "Gap between zones",
    type: "range",
    min: 0,
    max: 50,
    step: 1,
    unit: "px",
    defaultValue: 16,
    section: "general",
  },
] as const satisfies readonly SettingsDefinition[]

export type HeaderSettings = SettingsFromSchema<typeof settings>

export const HEADER_SCHEMA: ComponentSchema = {
  type: Sections.HEADER,
  label: "Header",
  icon: PanelTopIcon,
  category: "section",
  isDraggable: false,
  isDeletable: false,
  isHidable: false,
  allowedParents: [Layouts.HEADER],
  allowedChildren: [],
  defaultSettings: settings,
}
