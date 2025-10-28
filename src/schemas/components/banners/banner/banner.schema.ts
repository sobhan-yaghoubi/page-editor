import { Sections } from "@/schemas/shared/enums"
import { ALL_PAGES } from "@/schemas/shared/groups"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { MonitorIcon } from "lucide-react"

const settings = [
  {
    key: "slides",
    label: "Slides",
    type: "repeater",
    section: "Content",
    defaultValue: [
      {
        image: "https://placehold.co/1200x400?text=Placeholder+Image+1",
        alt: "Placeholder Image 1",
        href: "#",
      },
    ],

    itemSchema: [
      { key: "image", label: "Image", type: "image" },
      {
        key: "alt",
        label: "Alt Text",
        type: "text",
        defaultValue: "Banner image",
      },

      {
        key: "href",
        label: "Link",
        type: "asyncSelect",
        sourceKey: "allAppRoutes",
        defaultValue: "#",
      },
    ],
  },

  {
    key: "autoplay",
    label: "Autoplay",
    type: "boolean",
    defaultValue: true,
    section: "Behavior",
  },
  {
    key: "autoplayDelay",
    label: "Autoplay Delay (ms)",
    type: "number",
    defaultValue: 4000,
    section: "Behavior",
    condition: { key: "autoplay", value: true },
  },
  {
    key: "showArrows",
    label: "Show Navigation Arrows",
    type: "boolean",
    defaultValue: true,
    section: "Behavior",
  },
  {
    key: "showDots",
    label: "Show Navigation Dots",
    type: "boolean",
    defaultValue: true,
    section: "Behavior",
  },
  {
    key: "isLoop",
    label: "Loop Slides",
    type: "boolean",
    defaultValue: true,
    section: "Behavior",
  },
  {
    key: "bannerHeightDesktop",
    type: "select",
    label: "Banner height",
    options: [
      { label: "Small", value: "10rem" },
      { label: "Medium", value: "20rem" },
      { label: "Large", value: "45rem" },
      { label: "Auto", value: "auto" },
    ],
    defaultValue: "20rem",
  },
  {
    key: "bannerHeightMobile",
    type: "select",
    label: "Banner height mobile",
    options: [
      { label: "Small", value: "5rem" },
      { label: "Medium", value: "10rem" },
      { label: "Large", value: "15rem" },
      { label: "Auto", value: "auto" },
    ],
    defaultValue: "15rem",
  },
  {
    key: "bannerObjectFit",
    type: "select",
    label: "Object fit",
    options: [
      { label: "Contain", value: "contain" },
      { label: "Cover", value: "cover" },
      { label: "Fill", value: "fill" },
      { label: "Inherit", value: "inherit" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type BannerSettings = SettingsFromSchema<typeof settings>

export const BANNER_SCHEMA: ComponentSchema = {
  type: Sections.BANNER,
  label: "Banner",
  icon: MonitorIcon,
  category: "section",
  isDraggable: true,
  allowedParents: [...ALL_PAGES],
  allowedChildren: [],
  defaultSettings: settings,
}
