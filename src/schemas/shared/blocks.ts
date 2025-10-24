import { ComponentSchema } from "@/types"
import {
  BasicBlocks,
  ModuleUI,
  ProductBlocks,
  CategoryBlocks,
  Sections,
  TemplateUI,
} from "./enums"

import {
  BUTTON_SCHEMA,
  GROUP_SCHEMA,
  PRODUCT_FEATURE_SCHEMA,
  SPACER_SCHEMA,
  HEADER_SCHEMA,
  FOOTER_SCHEMA,
  HERO_SECTION_SCHEMA,
  RICH_TEXT_SCHEMA,
  SUBSCRIPTION_FORM_SCHEMA,
  TEXT_SCHEMA,
  IMAGE_SCHEMA,
  PRODUCT_DETAILS_SCHEMA,
  PRODUCT_TITLE_SCHEMA,
  PRODUCT_PRICE_SCHEMA,
  PRODUCT_DESCRIPTION_SCHEMA,
  PRODUCT_ADD_TO_CART_BUTTON_SCHEMA,
  PRODUCT_GALLERY_SCHEMA,
  PRODUCT_CARD_SCHEMA,
  CATEGORY_PAGE_PRODUCT_GRID_LIST_SCHEMA,
} from "../components"
import { BANNER_SCHEMA } from "../components/banners/banner/banner.schema"
import { BRAND_FEATURE_SCHEMA } from "../components/template/brandsFeatures.schema"
import { BEST_COMMENTS_SCHEMA } from "../components/template/bestComments.schema"
import { BLOG_FEATURES_SCHEMA } from "../components/template/blogFeatures.schema"
import { APP_COMPONENT_SLOT_SCHEMA } from "../components/common/appComponentSlot.schema"
import { ANNOUNCEMENT_BAR_SCHEMA } from "../components/modules/announcementBar.schema"
import { ANNOUNCEMENT_SCHEMA } from "../components/modules/announcement.schema"
import { CATEGORY_PAGE_SUB_CATEGORIES_SCHEMA } from "../components/products/productList/subCategories.schema"
import { CATEGORY_PAGE_PRODUCT_FILTERS_SCHEMA } from "../components/products/productList/productFilters.schema"
import { CATEGORY_PAGE_SEO_BOX_SCHEMA } from "../components/products/productList/seoBox.schema"
import { CATEGORY_TITLE_SCHEMA } from "../components/products/productList/categoryTitle.schema"

export const COMPONENTS_SCHEMAS: Record<string, ComponentSchema> = {
  [Sections.HEADER]: HEADER_SCHEMA,
  [Sections.FOOTER]: FOOTER_SCHEMA,
  [Sections.HERO_SECTION]: HERO_SECTION_SCHEMA,
  [Sections.PRODUCT_FEATURES]: PRODUCT_FEATURE_SCHEMA,
  [Sections.RICH_TEXT]: RICH_TEXT_SCHEMA,
  [Sections.SUBSCRIPTION_FORM]: SUBSCRIPTION_FORM_SCHEMA,
  [Sections.BANNER]: BANNER_SCHEMA,

  [CategoryBlocks.PRODUCT_GRID_LIST]: CATEGORY_PAGE_PRODUCT_GRID_LIST_SCHEMA,
  [CategoryBlocks.PRODUCT_FILTERS]: CATEGORY_PAGE_PRODUCT_FILTERS_SCHEMA,
  [CategoryBlocks.SEO_BOX]: CATEGORY_PAGE_SEO_BOX_SCHEMA,
  [CategoryBlocks.SUB_CATEGORIES]: CATEGORY_PAGE_SUB_CATEGORIES_SCHEMA,
  [CategoryBlocks.TITLE]: CATEGORY_TITLE_SCHEMA,

  [ModuleUI.PRODUCT_CARD]: PRODUCT_CARD_SCHEMA,

  [TemplateUI.BRAND_FEATURES]: BRAND_FEATURE_SCHEMA,
  [TemplateUI.BEST_COMMENTS]: BEST_COMMENTS_SCHEMA,
  [TemplateUI.BLOG_FEATURES]: BLOG_FEATURES_SCHEMA,
  [Sections.ANNOUNCEMENT_BAR]: ANNOUNCEMENT_BAR_SCHEMA,

  [ModuleUI.ANNOUNCEMENT]: ANNOUNCEMENT_SCHEMA,
  [BasicBlocks.TEXT]: TEXT_SCHEMA,
  [BasicBlocks.BUTTON]: BUTTON_SCHEMA,
  [BasicBlocks.SPACER]: SPACER_SCHEMA,
  [BasicBlocks.GROUP]: GROUP_SCHEMA,
  [BasicBlocks.IMAGE]: IMAGE_SCHEMA,
  [BasicBlocks.APP_COMPONENT_SLOT]: APP_COMPONENT_SLOT_SCHEMA,

  [ProductBlocks.PRODUCT_DETAILS_SECTION]: PRODUCT_DETAILS_SCHEMA,
  [ProductBlocks.PRODUCT_TITLE]: PRODUCT_TITLE_SCHEMA,
  [ProductBlocks.PRODUCT_PRICE]: PRODUCT_PRICE_SCHEMA,
  [ProductBlocks.PRODUCT_DESCRIPTION]: PRODUCT_DESCRIPTION_SCHEMA,
  [ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON]: PRODUCT_ADD_TO_CART_BUTTON_SCHEMA,
  [ProductBlocks.PRODUCT_GALLERY]: PRODUCT_GALLERY_SCHEMA,
}
