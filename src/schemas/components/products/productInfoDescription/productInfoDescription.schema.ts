import { Layouts, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TextIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

type ProductInfoDescriptionSettings = SettingsFromSchema<typeof settings>

const PRODUCT_INFO_DESCRIPTION_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_INFO_DESCRIPTION,
  label: "Product info description",
  category: "section",
  icon: TextIcon,
  isDraggable: true,
  allowedParents: [Layouts.PRODUCT],
  allowedChildren: [],
  isDeletable: true,
  defaultSettings: settings,
}

export {
  settings,
  ProductInfoDescriptionSettings,
  PRODUCT_INFO_DESCRIPTION_SCHEMA,
}
