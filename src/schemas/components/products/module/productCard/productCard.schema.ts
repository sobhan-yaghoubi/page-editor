import {
  BasicBlocks,
  ModuleUI,
  ProductBlocks,
  Sections,
} from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { LayoutPanelTopIcon } from "lucide-react"

const settings = [
  {
    key: "backgroundColor",
    label: "Card Background",
    type: "color",
    defaultValue: "#ffffff",
  },
  {
    key: "borderRadius",
    label: "Card Corner Radius",
    type: "range",
    min: 0,
    max: 24,
    unit: "px",
    step: 1,
    defaultValue: 8,
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductCardSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_CARD_SCHEMA: ComponentSchema = {
  type: ModuleUI.PRODUCT_CARD,
  icon: LayoutPanelTopIcon,
  label: "Product Card Template",
  category: "block",
  isDraggable: false,
  isDeletable: false,
  allowedParents: [Sections.PRODUCT_FEATURES],
  allowedChildren: [
    ProductBlocks.PRODUCT_GALLERY,
    ProductBlocks.PRODUCT_TITLE,
    ProductBlocks.PRODUCT_PRICE,
    ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
    BasicBlocks.TEXT,
    BasicBlocks.SPACER,
  ],
  defaultSettings: settings,
}

export { settings as ProductCardSetting }
