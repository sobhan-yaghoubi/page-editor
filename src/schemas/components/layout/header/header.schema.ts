import {
  AppComponents,
  BasicBlocks,
  Layouts,
  Sections,
} from "@/schemas/shared/enums"
import {
  ComponentSchema,
  DefaultChild,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { GalleryVerticalIcon } from "lucide-react"

const defaultHeaderLayout: DefaultChild[] = [
  {
    type: BasicBlocks.APP_COMPONENT_SLOT,
    settings: {
      componentId: AppComponents.HEADER_MAIN_NAVIGATION,
      allowedAppComponents: [AppComponents.HEADER_MAIN_NAVIGATION],
    },
  },
  {
    type: BasicBlocks.APP_COMPONENT_SLOT,
    settings: {
      componentId: AppComponents.HEADER_CART_ICON,
      allowedAppComponents: [
        AppComponents.HEADER_CART_ICON,
        AppComponents.HEADER_USER_PROFILE,
        AppComponents.HEADER_SEARCH_BAR,
      ],
    },
  },
]

const settings = [
  {
    key: "layout",
    label: "Layout",
    type: "select",
    defaultValue: "spaceBetween",
    section: "general",
    options: [
      { label: "Space Between", value: "spaceBetween" },
      { label: "Center", value: "center" },
      { label: "Left Aligned", value: "left" },
    ],
  },
  {
    key: "backgroundColor",
    label: "Background Color",
    type: "color",
    defaultValue: "transparent",
    section: "general",
  },
] as const satisfies readonly SettingsDefinition[]

export type HeaderSettings = SettingsFromSchema<typeof settings>

export const HEADER_SCHEMA: ComponentSchema = {
  type: Sections.HEADER,
  label: "Header Section",
  icon: GalleryVerticalIcon,
  allowedChildren: [
    BasicBlocks.HEADING,
    BasicBlocks.TEXT,
    BasicBlocks.APP_COMPONENT_SLOT,
  ],
  allowedParents: [Layouts.HEADER],
  category: "section",
  defaultChildren: defaultHeaderLayout,
  defaultSettings: settings,
  isDraggable: true,
  isDeletable: false,
  isHidable: false,
}
