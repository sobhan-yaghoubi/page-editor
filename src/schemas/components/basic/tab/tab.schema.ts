import { BasicBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MaximizeIcon } from "lucide-react"

const settings = [] as const satisfies readonly SettingsDefinition[]

export type TabSettings = SettingsFromSchema<typeof settings>

export const TAB_SCHEMA: ComponentSchema = {
  type: BasicBlocks.TAB,
  icon: MaximizeIcon,
  label: "Tab",
  category: "section",
  isDraggable: true,
  allowedParents: "*",
  allowedChildren: [BasicBlocks.TAB_ITEM],
  defaultSettings: settings,
  isSelfNestingAllowed: false,
}
