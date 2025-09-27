import { PageSchema } from "@/types"
import { Layouts, ProductBlocks, Sections } from "./enums"

export const PAGE_SCHEMAS: Record<string, PageSchema> = {
  [Layouts.HOME]: {
    type: "flexible",
    name: "Homepage",
    canHaveHeader: true,
    canHaveFooter: true,
    allowedSections: [
      Sections.HERO_SECTION,
      Sections.PRODUCT_FEATURES,
      Sections.RICH_TEXT,
      Sections.SUBSCRIPTION_FORM,
    ],
  },
  [Layouts.CONTACT]: {
    type: "flexible",
    name: "ContactPage",
    canHaveFooter: false,
    canHaveHeader: true,
    allowedSections: [
      Sections.PRODUCT_FEATURES,
      Sections.RICH_TEXT,
      Sections.SUBSCRIPTION_FORM,
    ],
  },

  [Layouts.PRODUCT]: {
    type: "fixed",
    name: "ProductPage",
    canHaveHeader: true,
    canHaveFooter: true,
    allowedSections: [
      { type: ProductBlocks.PRODUCT_GALLERY, max: 1 },
      { type: ProductBlocks.PRODUCT_DETAILS_SECTION, max: 1 },
      { type: Sections.RICH_TEXT },
      { type: Sections.SUBSCRIPTION_FORM },
      { type: Sections.PRODUCT_FEATURES },
    ],
  },
}
