import { BasicBlocks, Sections, ProductBlocks } from "@/schema/enums"

import { HeroSection } from "@/components/view/banners/hero"
import { Button } from "@/components/view/basic/button"
import { Heading } from "@/components/view/basic/heading"
import { Image } from "@/components/view/basic/image"
import { Text } from "@/components/view/basic/text"
import { SubscriptionForm } from "@/components/view/forms/subscription"
import { FeatureItem, ProductFeatures } from "@/components/view/products/simple"
import { RichText } from "@/components/view/storyTelling/richText"
import { Header } from "@/components/view/layout/header"
import { Footer } from "@/components/view/layout/footer"
import ProductGallery from "@/components/view/products/productGallery"
import ProductDetailsSection from "@/components/view/products/productDetailsSection"
import ProductTitle from "@/components/view/products/productTitle"
import ProductPrice from "@/components/view/products/productPrice"
import ProductDescription from "@/components/view/products/productDescription"
import ProductAddToCartButton from "@/components/view/products/productAddToCartButton"

export const COMPONENT_MAP = {
  [Sections.HERO_SECTION]: HeroSection,
  [Sections.PRODUCT_FEATURES]: ProductFeatures,
  [Sections.RICH_TEXT]: RichText,
  [Sections.SUBSCRIPTION_FORM]: SubscriptionForm,
  [Sections.HEADER]: Header,
  [Sections.FOOTER]: Footer,

  [BasicBlocks.HEADING]: Heading,
  [BasicBlocks.TEXT]: Text,
  [BasicBlocks.BUTTON]: Button,
  [BasicBlocks.IMAGE]: Image,
  [BasicBlocks.FEATURE_ITEM]: FeatureItem,

  [ProductBlocks.PRODUCT_GALLERY]: ProductGallery,
  [ProductBlocks.PRODUCT_DETAILS_SECTION]: ProductDetailsSection,
  [ProductBlocks.PRODUCT_TITLE]: ProductTitle,
  [ProductBlocks.PRODUCT_PRICE]: ProductPrice,
  [ProductBlocks.PRODUCT_DESCRIPTION]: ProductDescription,
  [ProductBlocks.ADD_TO_CART_BUTTON]: ProductAddToCartButton,
}
