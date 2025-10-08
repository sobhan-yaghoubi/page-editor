import { ModuleUI, Sections } from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalIcon } from "lucide-react"

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
    key: "columns",
    label: "Columns",
    type: "range",
    defaultValue: 3,
    section: "general",
    step: 1,
    min: 1,
    max: 12,
  },
  {
    key: "mobileColumns",
    label: "Mobile Columns",
    type: "select",
    defaultValue: 1,
    section: "mobile",
    options: [
      { label: "1 Column", value: 1 },
      { label: "2 Columns", value: 2 },
    ],
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
  allowedChildren: [{ type: ModuleUI.PRODUCT_BOX, max: 1 }],
  defaultSettings: settings,
}
