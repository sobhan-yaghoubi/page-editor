import { Layouts, ModuleUI, ProductBlocks } from "@/schemas/shared/enums"
import {
  ComponentSchema,
  SettingsDefinition,
  SettingsFromSchema,
} from "@/types"
import { ImagesIcon } from "lucide-react"

const settings = [
  {
    key: "layout",
    label: "Layout",
    type: "select",
    section: "general",
    defaultValue: "stacked",
    options: [
      { label: "Thumbnails Below", value: "stacked" },
      { label: "Thumbnails Left", value: "left" },
      { label: "No Thumbnails", value: "carousel" },
    ],
  },
  {
    key: "zoomEffect",
    label: "Image Zoom",
    type: "select",
    section: "general",
    defaultValue: "click",
    options: [
      { label: "On Click", value: "click" },
      { label: "On Hover", value: "hover" },
      { label: "Disabled", value: "none" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]

export type ProductGallerySettings = SettingsFromSchema<typeof settings>

export const PRODUCT_GALLERY_SCHEMA: ComponentSchema = {
  type: ProductBlocks.PRODUCT_GALLERY,
  label: "Product Gallery",
  icon: ImagesIcon,
  category: "section",
  isDraggable: true,
  isDeletable: false,
  allowedParents: [Layouts.PRODUCT, ModuleUI.PRODUCT_BOX],
  allowedChildren: [],
  defaultSettings: settings,
}
