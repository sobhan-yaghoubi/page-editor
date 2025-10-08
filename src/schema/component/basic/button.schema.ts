import { BasicBlocks, Sections } from "@/schema/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { SquareMousePointerIcon } from "lucide-react"

const settings = [
  {
    key: "text",
    label: "Button Text",
    type: "text",
    defaultValue: "Click Here",
    section: "general",
  },
  {
    key: "url",
    label: "Link URL",
    type: "text",
    defaultValue: "#",
    section: "general",
  },
  {
    key: "style",
    label: "Button Style",
    type: "select",
    defaultValue: "primary",
    section: "general",
    options: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Outline", value: "outline" },
    ],
  },
  {
    key: "size",
    label: "Size",
    type: "select",
    defaultValue: "md",
    section: "general",
    options: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
    ],
  },
  {
    key: "mobileFullWidth",
    label: "Full Width on Mobile",
    type: "boolean",
    defaultValue: false,
    section: "mobile",
  },
] as const satisfies readonly SettingsDefinition[]

export type ButtonSettings = SettingsFromSchema<typeof settings>

export const BUTTON_SCHEMA: ComponentSchema = {
  type: BasicBlocks.BUTTON,
  icon: SquareMousePointerIcon,
  label: "Button",
  category: "block",
  isDraggable: true,
  allowedParents: [Sections.HERO_SECTION, Sections.RICH_TEXT],
  allowedChildren: [],
  defaultSettings: settings,
}
