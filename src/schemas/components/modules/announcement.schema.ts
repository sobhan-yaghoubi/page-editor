import { ModuleUI, Sections } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MaximizeIcon } from "lucide-react"

const settings = [
  {
    key: "announcement-text",
    label: "Text",
    type: "text",
    defaultValue: "Hello World",
  },
  {
    key: "announcement-href",
    label: "Link",
    type: "asyncSelect",
    sourceKey: "allAppRoutes",
    defaultValue: "#",
  },
  {
    section: "Typography",
    label: "Size",
    key: "announcement-text-size",
    type: "group",
    options: [
      { label: "Small", value: "20px" },
      { label: "Medium", value: "35px" },
      { label: "Large", value: "50px" },
    ],
    defaultValue: "20px",
  },
  {
    section: "Typography",
    label: "Letter spacing",
    key: "announcement-letter-spacing",
    type: "group",
    options: [
      { label: "Tight", value: "3px" },
      { label: "Normal", value: "5px" },
      { label: "Loose", value: "10px" },
    ],
    defaultValue: "10px",
  },
  {
    section: "Typography",
    label: "Case",
    key: "announcement-case",
    type: "group",
    options: [
      { label: "Default", value: "default" },
      { label: "Uppercase", value: "uppercase" },
    ],
    defaultValue: "uppercase",
  },
] as const satisfies readonly SettingsDefinition[]

export type AnnouncementSettings = SettingsFromSchema<typeof settings>

export const ANNOUNCEMENT_SCHEMA: ComponentSchema = {
  type: ModuleUI.ANNOUNCEMENT,
  icon: MaximizeIcon,
  label: "Announcement",
  category: "block",
  isDraggable: true,
  isDeletable: true,
  allowedChildren: [],
  allowedParents: [Sections.ANNOUNCEMENT_BAR],
  defaultSettings: settings,
}
