import { Layouts, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TextIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

type ProductCommentsSettings = SettingsFromSchema<typeof settings>

const PRODUCT_COMMENTS_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_COMMENTS,
  label: "Product Comments",
  category: "section",
  icon: TextIcon,
  isDraggable: true,
  allowedParents: [Layouts.PRODUCT],
  allowedChildren: [],
  isDeletable: true,
  defaultSettings: settings,
}

export { settings, ProductCommentsSettings, PRODUCT_COMMENTS_SCHEMA }
