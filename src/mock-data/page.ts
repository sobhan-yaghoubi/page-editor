import { BasicBlocks, ProductBlocks, Sections } from "@/schemas/shared/enums"
import { PageData } from "@/types"

export const EXAMPLE_HOME_PAGE_COMPONENTS: PageData["components"] = [
  {
    id: "hero-1",
    type: Sections.HERO_SECTION,
    settings: {
      backgroundColor: "#f8f9fa",
      textAlignment: "center",
      padding: "large",
      layout: "stacked",
    },
    children: [
      {
        id: "hero-heading-1",
        type: BasicBlocks.HEADING,
        settings: { text: "Next-Gen E-Commerce Builder" },
      },
      {
        id: "hero-text-1",
        type: BasicBlocks.TEXT,
        settings: {
          content:
            "Visually build pages that are fast, flexible, and fully featured.",
        },
      },
      {
        id: "hero-button-1",
        type: BasicBlocks.BUTTON,
        settings: { text: "Get Started" },
      },
    ],
  },

  {
    id: "features-1",
    type: Sections.PRODUCT_FEATURES,
    settings: {
      title: "Why Choose Us?",
      layout: "grid",
      columns: 3,
    },
    children: [],
  },

  {
    id: "rich-text-1",
    type: Sections.RICH_TEXT,
    settings: {
      width: "90%",
      height: "100%",
      padding: "20px",
      direction: "vertical",
    },
    children: [
      {
        id: "rt-heading-1",
        type: BasicBlocks.HEADING,
        settings: { text: "Our Core Principles" },
      },
      {
        id: "rt-text-1",
        type: BasicBlocks.TEXT,
        settings: {
          content:
            "We believe in building tools that are not only powerful but also a joy to use. Our focus is on:",
        },
      },
    ],
  },

  {
    id: "sub-form-1",
    type: Sections.SUBSCRIPTION_FORM,
    settings: {
      title: "Join Our Newsletter",
      backgroundColor: "#f8f9fa",
    },
    children: [
      {
        id: "sub-heading-1",
        type: BasicBlocks.HEADING,
        settings: { text: "Stay Up-to-Date", level: "h3" },
      },
      {
        id: "sub-text-1",
        type: BasicBlocks.TEXT,
        settings: {
          content: "Get the latest news and updates delivered to your inbox.",
        },
      },
    ],
  },
]

export const EXAMPLE_HEADER_COMPONENTS: PageData["components"] = [
  {
    id: "hero-text-header-1",
    type: BasicBlocks.TEXT,
    settings: {
      content: "Discover amazing header",
      fontSize: "large",
      color: "#666666",
    },
  },
  {
    id: "header-wrapper",
    settings: {},
    type: Sections.HEADER,
    children: [
      {
        id: "header-hero-text-1",
        type: BasicBlocks.TEXT,
        settings: {
          content:
            "Visually build pages that are fast, flexible, and fully featured.",
        },
      },
    ],
  },
]
export const EXAMPLE_FOOTER_COMPONENTS: PageData["components"] = [
  {
    id: "hero-text-footer-1",
    type: BasicBlocks.TEXT,
    settings: {
      content: "Discover amazing footer",
      fontSize: "large",
      color: "#666666",
    },
  },
]

export const EXAMPLE_PRODUCT_PAGE_COMPONENTS: PageData["components"] = [
  {
    id: "prod-gallery-xyz",
    type: ProductBlocks.PRODUCT_GALLERY,
    settings: {
      thumbnailPosition: "bottom",
      zoomEffect: "hover",
    },

    children: [],
  },

  {
    id: "prod-details-xyz",
    type: ProductBlocks.PRODUCT_DETAILS_SECTION,
    settings: {
      padding: "medium",
    },

    children: [
      {
        id: "prod-title-abc",
        type: ProductBlocks.PRODUCT_TITLE,

        slotName: "title",
        settings: {
          tag: "h1",
        },
      },
      {
        id: "prod-price-abc",
        type: ProductBlocks.PRODUCT_PRICE,
        slotName: "price",
        settings: {},
      },
      {
        id: "prod-desc-abc",
        type: ProductBlocks.PRODUCT_DESCRIPTION,
        slotName: "description",
        settings: {
          showFullDescription: false,
        },
      },
      {
        id: "prod-add-to-cart-abc",
        type: ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
        slotName: "addToCart",
        settings: {
          inStockText: "Add to Bag",
          style: "primary",
          outOfStockText: "Currently Unavailable",
        },
      },
    ],
  },

  {
    id: "sub-form-prod-page",
    type: Sections.SUBSCRIPTION_FORM,
    settings: {
      title: "Get notified for similar products!",
      backgroundColor: "#ffffff",
    },
    children: [
      {
        id: "sub-heading-prod",
        type: BasicBlocks.HEADING,
        settings: { text: "Stay Updated" },
      },
    ],
  },
]
