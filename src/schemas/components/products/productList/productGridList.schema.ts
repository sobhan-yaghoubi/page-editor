import {
  Sections,
  ModuleUI,
  ProductBlocks,
  Layouts,
  CategoryBlocks,
} from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
  DefaultChild,
} from "@/types"
import { GridIcon } from "lucide-react"

const settings = [
  {
    key: "productsPerPage",
    label: "Products Per Page",
    type: "range",
    min: 4,
    max: 24,
    step: 4,
    defaultValue: 12,
    section: "General",
  },
  {
    key: "cardWidthMobile",
    label: "Card Width (Mobile)",
    type: "range",
    min: 120,
    max: 240,
    step: 1,
    unit: "px",
    defaultValue: 160,
    section: "Layout",
  },
  {
    key: "cardWidthDesktop",
    label: "Card Width (Desktop ≥768px)",
    type: "range",
    min: 200,
    max: 400,
    step: 1,
    unit: "px",
    defaultValue: 280,
    section: "Layout",
  },
  {
    key: "gap",
    label: "Gap between cards",
    type: "range",
    min: 0,
    max: 48,
    step: 1,
    unit: "px",
    defaultValue: 16,
    section: "Layout",
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductGridListSettings = SettingsFromSchema<typeof settings>

export const CATEGORY_PAGE_PRODUCT_GRID_LIST_SCHEMA: ComponentSchema = {
  type: CategoryBlocks.PRODUCT_GRID_LIST,
  label: "Product Grid/List",
  icon: GridIcon,
  category: "section",
  isDraggable: true,
  isRepeater: true,
  allowedParents: [Layouts.PRODUCT_LIST, ...ALL_PAGES],
  allowedChildren: [],
  defaultChildren: [
    {
      type: ModuleUI.PRODUCT_CARD,
      settings: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
      },

      children: [
        { type: ProductBlocks.PRODUCT_GALLERY },
        { type: ProductBlocks.PRODUCT_TITLE },
        { type: ProductBlocks.PRODUCT_PRICE },
        { type: ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON },
      ],
    },
  ],

  defaultSettings: settings,
}
