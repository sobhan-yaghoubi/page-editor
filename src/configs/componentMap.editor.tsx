import { BasicBlocks, Sections, ProductBlocks } from "@/schema/enums"

import { HeroSection } from "@/components/editor/banners/hero"
import { Button } from "@/components/editor/basic/button"
import { Heading } from "@/components/editor/basic/heading"
import { Image } from "@/components/editor/basic/image"
import { Text } from "@/components/editor/basic/text"
import { SubscriptionForm } from "@/components/editor/forms/subscription"
import {
  FeatureItem,
  ProductFeatures,
} from "@/components/editor/products/simple"
import { RichText } from "@/components/editor/storyTelling/richText"
import { Header } from "@/components/editor/layout/header"
import { Footer } from "@/components/editor/layout/footer"
import ProductGallery from "@/components/editor/products/productGallery"
import ProductDetailsSection from "@/components/editor/products/productDetailsSection"
import ProductTitle from "@/components/editor/products/productTitle"
import ProductPrice from "@/components/editor/products/productPrice"
import ProductDescription from "@/components/editor/products/productDescription"
import ProductAddToCartButton from "@/components/editor/products/productAddToCartButton"

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
