import { Layouts, CategoryBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MinimizeIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

export type CategoryPageSubCategoriesSettings = SettingsFromSchema<
  typeof settings
>

export const CATEGORY_PAGE_SUB_CATEGORIES_SCHEMA: ComponentSchema = {
  type: CategoryBlocks.SUB_CATEGORIES,
  label: "Sub categories",
  icon: MinimizeIcon,
  category: "section",
  isDraggable: true,
  isRepeater: true,
  allowedParents: [Layouts.PRODUCT_LIST],
  allowedChildren: [],
  defaultChildren: [],

  defaultSettings: settings,
}
