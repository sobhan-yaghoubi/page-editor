import { ProductBlocks } from "@/schema/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { AlignRightIcon } from "lucide-react"

const settings = [
  {
    key: "truncate",
    label: "Truncate Description",
    type: "boolean",
    defaultValue: true,
    section: "general",
  },
  {
    key: "showMoreText",
    label: '"Show More" Text',
    type: "text",
    defaultValue: "Read more",
    section: "general",
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductDescriptionSettings = SettingsFromSchema<typeof settings>

export const PRODUCT_DESCRIPTION_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_DESCRIPTION,
  label: "Product Description",
  category: "block",
  icon: AlignRightIcon,
  isDraggable: true,
  isDeletable: false,
  allowedParents: [ProductBlocks.PRODUCT_DETAILS_SECTION],
  allowedChildren: [],
  defaultSettings: settings,
}
