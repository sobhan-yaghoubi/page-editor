import { AppComponents, BasicBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { PuzzleIcon } from "lucide-react"

const settings = [
  {
    key: "componentId",
    label: "Component to Render",
    type: "select",
    defaultValue: "",
    options: [
      ...Object.values(AppComponents).map((value) => ({
        label: value.replace(/_/g, " ").toLowerCase(),
        value: value,
      })),
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type AddComponentSlotSettings = SettingsFromSchema<typeof settings>

export const APP_COMPONENT_SLOT_SCHEMA: ComponentSchema = {
  type: BasicBlocks.APP_COMPONENT_SLOT,
  label: "Application Component",
  icon: PuzzleIcon,
  category: "block",
  isDraggable: true,
  allowedParents: "*",
  allowedChildren: [],
  defaultSettings: settings,
}
