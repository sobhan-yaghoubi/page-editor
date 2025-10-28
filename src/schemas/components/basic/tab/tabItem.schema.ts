import { BasicBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MaximizeIcon } from "lucide-react"

const settings = [
  {
    key: "itemTitle",
    type: "text",
    label: "Item table",
    defaultValue: "Item",
  },
] as const satisfies readonly SettingsDefinition[]

export type TabItemSettings = SettingsFromSchema<typeof settings>

export const TAB_ITEM_SCHEMA: ComponentSchema = {
  type: BasicBlocks.TAB_ITEM,
  icon: MaximizeIcon,
  label: "Tab item",
  category: "block",
  isDraggable: true,
  allowedParents: [BasicBlocks.TAB],
  allowedChildren: "*",
  defaultSettings: settings,
  isSelfNestingAllowed: false,
}
