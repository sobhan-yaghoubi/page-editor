import { ModuleUI, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { DollarSignIcon } from "lucide-react"

const settings = [
  {
    key: "fontSize",
    label: "Font Size",
    type: "select",
    defaultValue: "medium",
    section: "general",
    options: [
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
  },
  {
    key: "color",
    label: "Color",
    type: "color",
    defaultValue: "#111827",
    section: "general",
  },
  {
    key: "compareAtPriceLabel",
    label: '"Compare At" Label',
    type: "text",
    defaultValue: "Was:",
    section: "general",
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductPriceSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_PRICE_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_PRICE,
  icon: DollarSignIcon,
  label: "Product Price",
  category: "block",
  isDraggable: true,
  isDeletable: false,
  allowedParents: [ProductBlocks.PRODUCT_DETAILS_SECTION, ModuleUI.PRODUCT_CARD],
  allowedChildren: [],
  defaultSettings: settings,
}
