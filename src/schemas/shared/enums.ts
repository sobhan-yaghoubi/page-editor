/**
 * Defines the keys for different page and global layout types.
 * These layouts represent the overall structure and sections of the web page.
 */
export enum Layouts {
  /** Represents the home page layout. */
  HOME = "home",

  /** Represents the product page layout. */
  PRODUCT = "product",

  /** Represents the header section of the layout. */
  HEADER = "header",

  /** Represents the footer section of the layout. */
  FOOTER = "footer",

  /** Represents a layout for user-specific pages (e.g., account or settings). */
  USER_PAGES = "pages",

  /** Represents the cart page layout. */
  CART = "cart",

  /** Represents the product list page layout. */
  PRODUCT_LIST = "product-list",

  /** Represents the search page layout. */
  SEARCH = "search",
}

/**
 * Defines the types for high-level "Sections" components.
 * Sections represent large, distinct areas on a page that contain several blocks or components.
 */
export enum Sections {
  /** Represents the header section of the page. */
  HEADER = "HEADER",

  /** Represents the footer section of the page. */
  FOOTER = "FOOTER",

  /** Represents the hero section, often the main banner or introductory area on the page. */
  HERO_SECTION = "HERO_SECTION",

  /** Represents a section for showcasing product features. */
  PRODUCT_FEATURES = "PRODUCT_FEATURES",

  /** Represents a section for displaying rich text content. */
  RICH_TEXT = "RICH_TEXT",

  /** Represents a section that contains a subscription form. */
  SUBSCRIPTION_FORM = "SUBSCRIPTION_FORM",

  /** Represents a section that contains a banner */
  BANNER = "BANNER",

  /** Represents a section that contains announcement bar */
  ANNOUNCEMENT_BAR = "ANNOUNCEMENT_BAR",
}

/**
 * Defines the types for low-level "Block" components.
 * Blocks are smaller, modular elements that make up sections of a page.
 */
export enum BasicBlocks {
  /** Represents a heading block, typically used for titles or headings. */
  HEADING = "HEADING",

  /** Represents a text block, typically used for paragraphs or content. */
  TEXT = "TEXT",

  /** Represents a button block, used for interactive buttons. */
  BUTTON = "BUTTON",

  /** Represents an image block, used to display images on the page. */
  IMAGE = "IMAGE",

  /** Represents a spacer block, used to add empty space or padding. */
  SPACER = "SPACER",

  /** Represents a group block, used to group multiple elements together. */
  GROUP = "GROUP",

  APP_COMPONENT_SLOT = "APP_COMPONENT_SLOT",
}

export enum AppComponents {
  HEADER_CART_ICON = "HEADER_CART_ICON",
  HEADER_USER_PROFILE = "HEADER_USER_PROFILE",
  HEADER_SEARCH_BAR = "HEADER_SEARCH_BAR",
  HEADER_WISHLIST_ICON = "HEADER_WISHLIST_ICON",
  HEADER_MAIN_NAVIGATION = "HEADER_MAIN_NAVIGATION",
  CART_SUMMARY = "CART_SUMMARY",
}

/**
 * Defines the types for module UI components.
 * These are specialized components used for product-related features.
 */
export enum ModuleUI {
  /** Represents a product box UI component, which showcases a product in a boxed format. */
  PRODUCT_CARD = "PRODUCT_CARD",
  ANNOUNCEMENT = "ANNOUNCEMENT",
}

/**
 * Defines the types for template UI components.
 */
export enum TemplateUI {
  BRAND_FEATURES = "BRANDS_FEATURE",
  BEST_COMMENTS = "BEST_COMMENTS",
  BLOG_FEATURES = "BLOG_FEATURES",
}

/**
 * Defines the types for special, data-bound Product components.
 * These components are specifically used to render and display product data on the page.
 */
export enum ProductBlocks {
  /** Represents a product gallery block, used to showcase images or media of a product. */
  PRODUCT_GALLERY = "PRODUCT_GALLERY",

  /** Represents a product details section, containing detailed information about a product. */
  PRODUCT_DETAILS_SECTION = "PRODUCT_DETAILS_SECTION",

  /** Represents a block displaying the product title. */
  PRODUCT_TITLE = "PRODUCT_TITLE",

  /** Represents a block displaying the product price. */
  PRODUCT_PRICE = "PRODUCT_PRICE",

  /** Represents a block displaying the product description. */
  PRODUCT_DESCRIPTION = "PRODUCT_DESCRIPTION",

  /** Represents a button to add the product to the shopping cart. */
  PRODUCT_ADD_TO_CART_BUTTON = "PRODUCT_ADD_TO_CART_BUTTON",
}

export enum CategoryBlocks {
  PRODUCT_FILTERS = "PRODUCT_FILTERS",
  PRODUCT_GRID_LIST = "PRODUCT_GRID_LIST",
  SUB_CATEGORIES = "SUB_CATEGORIES",
  SEO_BOX = "CATEGORY_SEO_BOX",
  TITLE = "CATEGORY_TITLE",
}
