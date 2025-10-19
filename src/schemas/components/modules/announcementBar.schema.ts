import { Layouts, ModuleUI, Sections } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MaximizeIcon } from "lucide-react"

const settings = [
  {
    key: "duration-timer",
    label: "Time to next announcement",
    type: "range",
    step: 1,
    min: 0,
    max: 10,
    unit: "sec",
    defaultValue: 0,
  },
  {
    section: "Appearance",
    label: "Section Width",
    type: "select",
    key: "announcement-section-width",
    options: [
      { label: "Page", value: "page" },
      { label: "Full", value: "full" },
    ],
    defaultValue: "page",
  },
  {
    section: "Appearance",
    label: "Divider thickness",
    key: "divider-thickness",
    type: "range",
    step: 0.5,
    min: 0,
    max: 5,
    unit: "px",
    defaultValue: 1,
  },
  {
    section: "Padding",
    label: "Top",
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    unit: "px",
    key: "padding-top",
    defaultValue: 15,
  },
  {
    section: "Padding",
    label: "Bottom",
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    unit: "px",
    key: "padding-bottom",
    defaultValue: 15,
  },
] as const satisfies readonly SettingsDefinition[]

export type AnnouncementBarSettings = SettingsFromSchema<typeof settings>

export const ANNOUNCEMENT_BAR_SCHEMA: ComponentSchema = {
  type: Sections.ANNOUNCEMENT_BAR,
  icon: MaximizeIcon,
  label: "Announcement Bar",
  category: "section",
  isDraggable: true,
  isDeletable: true,
  allowedChildren: [ModuleUI.ANNOUNCEMENT],
  defaultChildren: [
    {
      type: ModuleUI.ANNOUNCEMENT,
    },
  ],
  allowedParents: [Layouts.HEADER],
  defaultSettings: settings,
}
