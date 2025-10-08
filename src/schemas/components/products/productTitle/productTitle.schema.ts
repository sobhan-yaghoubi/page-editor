import { ModuleUI, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TypeIcon } from "lucide-react"

const settings = [
  {
    key: "tag",
    type: "select",
    label: "HTML Tag",
    defaultValue: "h1",
    section: "general",
    options: [
      { label: "H1", value: "h1" },
      { label: "H2", value: "h2" },
      { label: "H3", value: "h3" },
      { label: "p", value: "p" },
    ],
  },
  {
    key: "fontSize",
    label: "Font Size",
    type: "select",
    section: "general",
    defaultValue: "large",
    options: [
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
      { label: "Extra Large", value: "xlarge" },
    ],
  },
  {
    key: "fontWeight",
    label: "Font Weight",
    type: "select",
    section: "general",
    defaultValue: "bold",
    options: [
      { label: "Normal", value: "normal" },
      { label: "Bold", value: "bold" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductTitleSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_TITLE_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_TITLE,
  label: "Product Title",
  icon: TypeIcon,
  category: "block",
  isDraggable: true,
  isDeletable: false,
  allowedParents: [ProductBlocks.PRODUCT_DETAILS_SECTION, ModuleUI.PRODUCT_BOX],
  allowedChildren: [],
  defaultSettings: settings,
}
