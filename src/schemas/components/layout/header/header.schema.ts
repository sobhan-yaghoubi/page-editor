import { BasicBlocks, Layouts, Sections } from "@/schemas/shared/enums"
import { ComponentSchema } from "@/types"
import { GalleryVerticalIcon } from "lucide-react"

export const HEADER_SCHEMA: ComponentSchema = {
  type: Sections.HEADER,
  label: "Header Section",
  icon: GalleryVerticalIcon,
  allowedChildren: [BasicBlocks.HEADING, BasicBlocks.TEXT],
  allowedParents: [Layouts.HEADER],
  category: "section",
  defaultSettings: [],
  isDraggable: true,
  isDeletable: false,
  isHidable: false,
}
