import {
  BasicBlocks,
  ModuleUI,
  ProductBlocks,
  Sections,
} from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalIcon } from "lucide-react"
import { ProductCardSettings } from "../module/productCard/productCard.schema"
import uuid from "@/lib/uuid"

const settings = [
  {
    key: "categoryHandle",
    label: "Product Collection",
    type: "asyncSelect",
    sourceKey: "productCollections",
    defaultValue: "all",
    section: "General",
  },
  {
    key: "title",
    label: "Section Title",
    type: "text",
    defaultValue: "Why Choose Us?",
    section: "general",
  },
  {
    key: "layout",
    label: "Layout",
    type: "select",
    defaultValue: "grid",
    section: "general",
    options: [
      { label: "Grid", value: "grid" },
      { label: "List", value: "list" },
    ],
  },
  {
    key: "itemsPerView",
    label: "Per View",
    type: "range",
    defaultValue: 3,
    section: "general",
    step: 1,
    min: 1,
    max: 12,
  },
  {
    key: "mobileItemsPerView",
    label: "Mobile Per View",
    type: "range",
    defaultValue: 2,
    section: "general",
    step: 1,
    min: 1,
    max: 12,
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductFeatureSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_FEATURE_SCHEMA: ComponentSchema = {
  type: Sections.PRODUCT_FEATURES,
  icon: GalleryVerticalIcon,
  label: "Product Features",
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  defaultChildren: [
    {
      type: ModuleUI.PRODUCT_CARD,
      children: [
        {
          type: ProductBlocks.PRODUCT_GALLERY,
          settings: { aspectRatio: "1/1", fit: "contain" },
        },
        {
          type: ProductBlocks.PRODUCT_TITLE,
          settings: { tag: "h3", fontSize: "medium" },
        },
        {
          type: ProductBlocks.PRODUCT_PRICE,
          settings: { fontSize: "small", color: "#333333" },
        },
        {
          type: BasicBlocks.SPACER,
          settings: { height: 16 },
        },
        {
          type: ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
          settings: {
            inStockText: "Add to Cart",
            outOfStockText: "Sold Out",
            style: "primary",
            width: "full",
          },
        },
      ],
      settings: {
        backgroundColor: "#43c64a",
        borderRadius: 14,
      } as ProductCardSettings,
    },
  ],
  isRepeater: true,
  allowedChildren: [{ type: ModuleUI.PRODUCT_CARD, max: 1 }],
  slots: {
    productCardLayout: {
      component: ModuleUI.PRODUCT_CARD,
      isLocked: true,
    },
  },
  defaultSettings: settings,
}
