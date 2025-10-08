import { BasicBlocks, Sections } from "@/schema/enums"
import { ALL_PAGES } from "@/schema/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalIcon } from "lucide-react"

const settings = [
  {
    key: "direction",
    label: "Direction",
    type: "group",
    section: "general",
    defaultValue: "vertical",
    options: [
      { label: "Vertical", value: "vertical" },
      { label: "Horizontal", value: "horizontal" },
    ],
  },
  {
    key: "width",
    label: "Width",
    type: "group",
    section: "general",
    defaultValue: "hi",
    options: [
      { label: "Page", value: "90%" },
      { label: "Full", value: "100%" },
    ],
  },
  {
    key: "height",
    label: "height",
    type: "select",
    section: "general",
    defaultValue: "100%",
    options: [
      { label: "Auto", value: "auto" },
      { label: "Small", value: "100%" },
      { label: "Medium", value: "200px" },
      { label: "Large", value: "400px" },
      { label: "Fullscreen", value: "100vh" },
    ],
  },
  {
    key: "padding",
    label: "Padding",
    type: "select",
    defaultValue: "20px",
    section: "general",
    options: [
      { label: "Small", value: "20px" },
      { label: "Medium", value: "40px" },
      { label: "Large", value: "100px" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type RichTextSettings = SettingsFromSchema<typeof settings>

export const RICH_TEXT_SCHEMA: ComponentSchema = {
  type: Sections.RICH_TEXT,
  icon: GalleryVerticalIcon,
  label: "Rich Text",
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  allowedChildren: [
    BasicBlocks.HEADING,
    BasicBlocks.IMAGE,
    BasicBlocks.BUTTON,
    BasicBlocks.TEXT,
  ],
  defaultSettings: settings,
}
