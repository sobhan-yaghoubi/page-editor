import { BasicBlocks, Sections } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { ImageIcon } from "lucide-react"

const settings = [
  {
    key: "src",
    label: "Image URL",
    type: "image",
    defaultValue: "",
    section: "general",
  },
  {
    key: "alt",
    label: "Alt Text",
    type: "text",
    defaultValue: "",
    section: "general",
  },
  {
    key: "width",
    label: "Width",
    type: "select",
    defaultValue: "auto",
    section: "general",
    options: [
      { label: "Auto", value: "auto" },
      { label: "25%", value: "25%" },
      { label: "50%", value: "50%" },
      { label: "75%", value: "75%" },
      { label: "100%", value: "100%" },
    ],
  },
  {
    key: "borderRadius",
    label: "Border Radius",
    type: "select",
    defaultValue: "none",
    section: "general",
    options: [
      { label: "None", value: "none" },
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
      { label: "Full", value: "full" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type ImageSettings = SettingsFromSchema<typeof settings>

export const IMAGE_SCHEMA: ComponentSchema = {
  type: BasicBlocks.IMAGE,
  icon: ImageIcon,
  label: "Image",
  category: "block",
  isDraggable: true,
  allowedParents: [Sections.HERO_SECTION, Sections.RICH_TEXT],
  allowedChildren: [],
  defaultSettings: settings,
}
