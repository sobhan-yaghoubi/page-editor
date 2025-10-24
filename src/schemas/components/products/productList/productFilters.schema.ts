import { CategoryBlocks, Layouts, TemplateUI } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { SlidersHorizontalIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

export type ProductFiltersSettings = SettingsFromSchema<typeof settings>

export const CATEGORY_PAGE_PRODUCT_FILTERS_SCHEMA: ComponentSchema = {
  type: CategoryBlocks.PRODUCT_FILTERS,
  label: "Product Filters",
  icon: SlidersHorizontalIcon,
  category: "section",
  isDraggable: true,
  allowedParents: [Layouts.PRODUCT_LIST],
  allowedChildren: [],
  isDeletable: true,
  defaultSettings: settings,
}
