import { BasicBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MaximizeIcon } from "lucide-react"

const settings = [
  {
    key: "spacer-unit",
    label: "Unit",
    type: "select",
    options: [
      { label: "Pixel", value: "px" },
      { label: "Percent", value: "%" },
    ],
    defaultValue: "px",
  },
  {
    key: "spacer-size-percent",
    label: "Size",
    type: "range",
    max: 100,
    min: 1,
    step: 1,
    defaultValue: 100,
    unit: "%",
    condition: { key: "spacer-unit", value: "%" },
  },
  {
    key: "spacer-size-px",
    label: "Size",
    type: "range",
    max: 400,
    min: 1,
    step: 1,
    defaultValue: 300,
    unit: "px",
    condition: { key: "spacer-unit", value: "px" },
  },

  {
    key: "custom-mobile-size-flag",
    label: "Custom Mobile Size",
    type: "boolean",
    defaultValue: false,
  },

  {
    key: "spacer-mobile-unit",
    section: "Mobile Size",
    label: "Unit",
    type: "select",
    options: [
      { label: "Pixel", value: "px" },
      { label: "Percent", value: "%" },
    ],
    defaultValue: "px",
    condition: { key: "custom-mobile-size-flag", value: true },
  },
  {
    key: "spacer-mobile-size-percent",
    section: "Mobile Size",
    label: "Size",
    type: "range",
    max: 100,
    min: 1,
    step: 1,
    unit: "%",
    defaultValue: 100,
    condition: {
      AND: [
        { key: "custom-mobile-size-flag", value: true },
        { key: "spacer-mobile-unit", value: "%" },
      ],
    },
  },
  {
    key: "spacer-mobile-size-px",
    section: "Mobile Size",
    label: "Size",
    type: "range",
    max: 400,
    min: 1,
    step: 1,
    unit: "px",
    defaultValue: 300,
    condition: {
      AND: [
        { key: "custom-mobile-size-flag", value: true },
        { key: "spacer-mobile-unit", value: "px" },
      ],
    },
  },
] as const satisfies readonly SettingsDefinition[]

export type SpacerSettings = SettingsFromSchema<typeof settings>

export const SPACER_SCHEMA: ComponentSchema = {
  type: BasicBlocks.SPACER,
  icon: MaximizeIcon,
  label: "Spacer",
  category: "block",
  isDraggable: true,
  allowedParents: "*",
  allowedChildren: [],
  defaultSettings: settings,
}
