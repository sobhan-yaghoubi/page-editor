/** Defines the keys for different page and global layout types. */
export enum Layouts {
  HOME = "home",
  PRODUCT = "product",
  CONTACT = "contact",
  HEADER = "header",
  FOOTER = "footer",
  USER_PAGES = "pages",
}

/**Defines the types for high-level "Sections" components */
export enum Sections {
  HEADER = "HEADER",
  FOOTER = "FOOTER",
  HERO_SECTION = "HERO_SECTION",
  PRODUCT_FEATURES = "PRODUCT_FEATURES",
  RICH_TEXT = "RICH_TEXT",
  SUBSCRIPTION_FORM = "SUBSCRIPTION_FORM",
}

/**Defines the types for low-level "Block" components */
export enum BasicBlocks {
  HEADING = "HEADING",
  TEXT = "TEXT",
  BUTTON = "BUTTON",
  IMAGE = "IMAGE",
  FEATURE_ITEM = "FEATURE_ITEM",
}

/** Defines the types for special, data-bound Product components. */
export enum ProductBlocks {
  PRODUCT_GALLERY = "PRODUCT_GALLERY",
  PRODUCT_DETAILS_SECTION = "PRODUCT_DETAILS_SECTION",
  PRODUCT_TITLE = "PRODUCT_TITLE",
  PRODUCT_PRICE = "PRODUCT_PRICE",
  PRODUCT_DESCRIPTION = "PRODUCT_DESCRIPTION",
  ADD_TO_CART_BUTTON = "ADD_TO_CART_BUTTON",
}
