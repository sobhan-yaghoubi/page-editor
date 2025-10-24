import { CategoryBlocks, Layouts } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { TextIcon } from "lucide-react"

const settings = [
  { key: "defaultCollapse", type: "boolean", label: "Default collapse" },
] as const satisfies readonly SettingsDefinition[]

type SEOBoxSettings = SettingsFromSchema<typeof settings>

const CATEGORY_PAGE_SEO_BOX_SCHEMA: ComponentSchema = {
  type: CategoryBlocks.SEO_BOX,
  label: "SEO Box",
  category: "section",
  icon: TextIcon,
  isDraggable: true,
  allowedParents: [Layouts.PRODUCT_LIST],
  allowedChildren: [],
  isDeletable: true,
  defaultSettings: settings,
}

export { settings, SEOBoxSettings, CATEGORY_PAGE_SEO_BOX_SCHEMA }
