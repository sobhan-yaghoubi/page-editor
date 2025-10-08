import { BasicBlocks, Sections } from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalIcon } from "lucide-react"

const settings = [
  {
    key: "title",
    label: "Form Title",
    type: "text",
    defaultValue: "Subscribe to our newsletter",
    section: "general",
  },
  {
    key: "placeholder",
    label: "Email Placeholder",
    type: "text",
    defaultValue: "Enter your email",
    section: "general",
  },
  {
    key: "buttonText",
    label: "Button Text",
    type: "text",
    defaultValue: "Subscribe",
    section: "general",
  },
  {
    key: "layout",
    label: "Layout",
    type: "select",
    defaultValue: "inline",
    section: "general",
    options: [
      { label: "Inline", value: "inline" },
      { label: "Stacked", value: "stacked" },
    ],
  },
  {
    key: "backgroundColor",
    label: "Background Color",
    type: "color",
    defaultValue: "#f8f9fa",
    section: "general",
  },
  {
    key: "mobileLayout",
    label: "Mobile Layout",
    type: "select",
    defaultValue: "stacked",
    section: "mobile",
    options: [
      { label: "Inline", value: "inline" },
      { label: "Stacked", value: "stacked" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type SubscriptionFormSettings = SettingsFromSchema<typeof settings>

export const SUBSCRIPTION_FORM_SCHEMA: ComponentSchema = {
  type: Sections.SUBSCRIPTION_FORM,
  icon: GalleryVerticalIcon,
  label: "Newsletter Subscription",
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  allowedChildren: [BasicBlocks.HEADING, BasicBlocks.TEXT],
  defaultSettings: settings,
}
