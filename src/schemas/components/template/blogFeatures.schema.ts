import { TemplateUI } from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalEndIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

export type BlogFeaturesSettings = SettingsFromSchema<typeof settings>

export const BLOG_FEATURES_SCHEMA: ComponentSchema = {
  type: TemplateUI.BLOG_FEATURES,
  label: "Blog Feature",
  icon: GalleryVerticalEndIcon,
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  allowedChildren: [],
  defaultSettings: settings,
}
