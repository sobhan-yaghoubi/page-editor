import { BasicBlocks, Sections } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TypeIcon } from "lucide-react"

const settings = [
  {
    key: "text",
    label: "Heading Text",
    type: "text",
    defaultValue: "Your Heading Here",
    section: "general",
  },
  {
    key: "level",
    label: "Heading Level",
    type: "select",
    defaultValue: "h2",
    section: "general",
    options: [
      { label: "H1", value: "h1" },
      { label: "H2", value: "h2" },
      { label: "H3", value: "h3" },
      { label: "H4", value: "h4" },
    ],
  },
  {
    key: "color",
    label: "Text Color",
    type: "color",
    defaultValue: "#333333",
    section: "general",
  },
  {
    key: "fontWeight",
    label: "Font Weight",
    type: "select",
    defaultValue: "bold",
    section: "general",
    options: [
      { label: "Normal", value: "normal" },
      { label: "Medium", value: "medium" },
      { label: "Bold", value: "bold" },
    ],
  },
  {
    key: "mobileLevel",
    label: "Mobile Level",
    type: "select",
    defaultValue: "h3",
    section: "mobile",
    options: [
      { label: "H2", value: "h2" },
      { label: "H3", value: "h3" },
      { label: "H4", value: "h4" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type HeadingSetting = SettingsFromSchema<typeof settings>

export const HEADING_SCHEMA: ComponentSchema = {
  type: BasicBlocks.HEADING,
  icon: TypeIcon,
  label: "Heading",
  category: "block",
  isDraggable: true,
  allowedParents: [
    Sections.HERO_SECTION,
    Sections.RICH_TEXT,
    Sections.SUBSCRIPTION_FORM,
  ],
  allowedChildren: [],
  defaultSettings: settings,
}
