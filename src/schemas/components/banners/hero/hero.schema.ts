import { BasicBlocks, Sections } from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MonitorIcon } from "lucide-react"

const settings = [
  {
    key: "backgroundColor",
    label: "Background Color",
    type: "color",
    defaultValue: "#ffffff",
    section: "general",
  },
  {
    key: "textAlignment",
    label: "Text Alignment",
    type: "select",
    defaultValue: "center",
    section: "general",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  {
    key: "padding",
    label: "Padding",
    type: "select",
    defaultValue: "large",
    section: "general",
    options: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
  },
  {
    key: "layout",
    label: "Layout",
    type: "select",
    defaultValue: "stacked",
    section: "general",
    options: [
      { label: "Stacked", value: "stacked" },
      { label: "Side by Side", value: "split" },
    ],
  },
  {
    key: "mobileLayout",
    label: "Mobile Layout",
    type: "select",
    defaultValue: "stacked",
    section: "mobile",
    options: [
      { label: "Stacked", value: "stacked" },
      { label: "Image First", value: "image-first" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type HeroSectionSettings = SettingsFromSchema<typeof settings>

export const HERO_SECTION_SCHEMA: ComponentSchema = {
  icon: MonitorIcon,
  type: Sections.HERO_SECTION,
  label: "Hero Section",
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  allowedChildren: [
    BasicBlocks.HEADING,
    BasicBlocks.TEXT,
    BasicBlocks.BUTTON,
    BasicBlocks.IMAGE,
    BasicBlocks.SPACER,
    BasicBlocks.GROUP,
  ],
  defaultSettings: settings,
}
