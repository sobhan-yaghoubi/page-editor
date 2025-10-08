import { BasicBlocks, Layouts, Sections } from "@/schemas/shared/enums"
import { ComponentSchema } from "@/types"
import { GalleryVerticalIcon } from "lucide-react"

export const FOOTER_SCHEMA: ComponentSchema = {
  type: Sections.FOOTER,
  icon: GalleryVerticalIcon,
  label: "Footer Section",
  allowedChildren: [
    BasicBlocks.BUTTON,
    BasicBlocks.HEADING,
    BasicBlocks.TEXT,
    BasicBlocks.IMAGE,
  ],
  allowedParents: [Layouts.FOOTER],
  category: "section",
  defaultSettings: [],
  isDraggable: true,
  isDeletable: false,
  isHidable: false,
}
