import { PageSchema } from "@/types"
import { BasicBlocks, Layouts, Sections } from "./enums"

export const GLOBAL_SCHEMAS: Record<string, PageSchema> = {
  [Layouts.HEADER]: {
    type: "fixed",
    name: "Header",
    canHaveFooter: false,
    canHaveHeader: false,
    allowedSections: [BasicBlocks.TEXT, { type: Sections.HEADER, max: 1 }],
  },
  [Layouts.FOOTER]: {
    type: "fixed",
    name: "Footer",
    canHaveFooter: false,
    canHaveHeader: false,
    allowedSections: [
      Sections.RICH_TEXT,
      BasicBlocks.BUTTON,
      BasicBlocks.HEADING,
      BasicBlocks.TEXT,
      Sections.FOOTER,
    ],
  },
}
