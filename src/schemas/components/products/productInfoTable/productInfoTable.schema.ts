import { Layouts, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TextIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

type ProductInfoTableSettings = SettingsFromSchema<typeof settings>

const PRODUCT_INFO_TABLE_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_INFO_TABLE,
  label: "Product info table",
  category: "section",
  icon: TextIcon,
  isDraggable: true,
  allowedParents: [Layouts.PRODUCT],
  allowedChildren: [],
  isDeletable: true,
  defaultSettings: settings,
}

export { settings, ProductInfoTableSettings, PRODUCT_INFO_TABLE_SCHEMA }
