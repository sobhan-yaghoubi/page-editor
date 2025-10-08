import { BasicBlocks, ModuleUI, Sections } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TextIcon } from "lucide-react"

const settings = [
  {
    key: "content",
    label: "Text Content",
    type: "textarea",
    defaultValue: "Your text content here...",
    section: "general",
  },
  {
    key: "fontSize",
    label: "Font Size",
    type: "select",
    defaultValue: "medium",
    section: "general",
    options: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
  },
  {
    key: "color",
    label: "Text Color",
    type: "color",
    defaultValue: "#666666",
    section: "general",
  },
  {
    key: "lineHeight",
    label: "Line Height",
    type: "select",
    defaultValue: "normal",
    section: "general",
    options: [
      { label: "Tight", value: "tight" },
      { label: "Normal", value: "normal" },
      { label: "Relaxed", value: "relaxed" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type TextSettings = SettingsFromSchema<typeof settings>

export const TEXT_SCHEMA: ComponentSchema = {
  type: BasicBlocks.TEXT,
  icon: TextIcon,
  label: "Text",
  category: "block",
  isDraggable: true,
  allowedParents: [
    Sections.HERO_SECTION,
    Sections.RICH_TEXT,
    Sections.SUBSCRIPTION_FORM,
    Sections.PRODUCT_FEATURES,
    ModuleUI.PRODUCT_BOX,
  ],
  allowedChildren: [],
  defaultSettings: settings,
}
