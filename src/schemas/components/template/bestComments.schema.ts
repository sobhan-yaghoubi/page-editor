import { TemplateUI } from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalEndIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

export type BestCommentsSettings = SettingsFromSchema<typeof settings>

export const BEST_COMMENTS_SCHEMA: ComponentSchema = {
  type: TemplateUI.BEST_COMMENTS,
  label: "Best Comments",
  icon: GalleryVerticalEndIcon,
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  allowedChildren: [],
  defaultSettings: settings,
}
