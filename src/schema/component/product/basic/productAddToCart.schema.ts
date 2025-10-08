import { ModuleUI, ProductBlocks } from "@/schema/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { ShoppingCartIcon } from "lucide-react"

const settings = [
  {
    key: "inStockText",
    label: "In Stock Text",
    type: "text",
    defaultValue: "Add to Cart",
    section: "general",
  },
  {
    key: "outOfStockText",
    label: "Out of Stock Text",
    type: "text",
    defaultValue: "Sold Out",
    section: "general",
  },
  {
    key: "outStockStyle",
    label: "Out Stock Style",
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
    key: "inStockStyle",
    label: "In Stock Style",
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
    key: "width",
    label: "Width",
    type: "select",
    defaultValue: "full",
    section: "general",
    options: [
      { label: "Full", value: "full" },
      { label: "Auto", value: "auto" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductAddToCartSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_ADD_TO_CART_BUTTON_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
  label: "Add to Cart",
  icon: ShoppingCartIcon,
  category: "block",
  isDraggable: true,
  isDeletable: false,
  allowedParents: [ProductBlocks.PRODUCT_DETAILS_SECTION, ModuleUI.PRODUCT_BOX],
  allowedChildren: [],
  defaultSettings: settings,
}
