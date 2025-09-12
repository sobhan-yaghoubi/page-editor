import { BasicBlocks, Sections } from "@/schema/enums"
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

export const EXAMPLE_CONTACT_PAGE_COMPONENTS: PageData["components"] = [
  {
    id: "hero-2",
    type: Sections.HERO_SECTION,
    settings: {
      backgroundColor: "#f8f9fa",
      textAlignment: "center",
      padding: "large",
      layout: "stacked",
    },
    children: [
      {
        id: "hero-heading-2",
        type: BasicBlocks.HEADING,
        settings: {
          text: "Welcome to Our Store",
          level: "h1",
          color: "#333333",
        },
      },
      {
        id: "hero-text-2",
        type: BasicBlocks.TEXT,
        settings: {
          content: "Discover amazing products at unbeatable prices.",
          fontSize: "large",
          color: "#666666",
        },
      },
      {
        id: "hero-button-2",
        type: BasicBlocks.BUTTON,
        settings: {
          text: "Shop Now",
          url: "/products",
          style: "primary",
          size: "lg",
        },
      },
    ],
  },
  {
    id: "features-2",
    type: Sections.PRODUCT_FEATURES,
    settings: {
      title: "Why Choose Us?",
      showTitle: true,
      layout: "grid",
      columns: 3,
    },
    children: [],
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
