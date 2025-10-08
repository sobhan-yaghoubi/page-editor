import { BasicBlocks, Layouts, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TypeIcon } from "lucide-react"

const settings = [
  {
    key: "padding",
    label: "Padding",
    type: "select",
    section: "general",
    defaultValue: "medium",
    options: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductDetailsSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_DETAILS_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_DETAILS_SECTION,
  icon: TypeIcon,
  label: "Product Details",
  category: "section",
  isDraggable: true,
  isDeletable: false,
  allowedParents: [Layouts.PRODUCT],
  slots: {
    title: {
      component: ProductBlocks.PRODUCT_TITLE,
      isLocked: true,
    },
    price: {
      component: ProductBlocks.PRODUCT_PRICE,
      isLocked: true,
    },
    description: {
      component: ProductBlocks.PRODUCT_DESCRIPTION,
      isLocked: true,
      settings: [
        {
          key: "showFullDescription",
          type: "boolean",
          label: "Show Full Description by Default",
          defaultValue: false,
        },
      ],
    },
    addToCart: {
      component: ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
      isLocked: true,
      settings: [
        {
          key: "inStockText",
          label: "In Stock Text",
          type: "text",
          defaultValue: "Add To Cart From the Slot",
        },
        {
          key: "outStockText",
          label: "Out Stock Text",
          type: "text",
          defaultValue: "Sold Out From the Slot",
        },
      ],
      action: {
        type: "ADD_TO_CART",
        payload: {
          productSku: "{{product.sku}}",
          variantSku: "{{product.selectedVariant.sku}}",
          quantity: "{{product.quantity}}",
        },
      },
    },
  },
  allowedChildren: [BasicBlocks.TEXT, BasicBlocks.BUTTON],
  defaultSettings: settings,
}
