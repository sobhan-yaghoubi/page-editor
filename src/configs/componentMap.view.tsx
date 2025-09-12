import { BasicBlocks, Sections, ProductBlocks } from "@/schema/enums"

import { HeroSection } from "@/components/view/banners/hero/hero.view"
import { Button } from "@/components/view/basic/button/button.view"
import { Heading } from "@/components/view/basic/heading/heading.view"
import { Image } from "@/components/view/basic/image/image.view"
import { Text } from "@/components/view/basic/text/text.view"
import { SubscriptionForm } from "@/components/view/forms/subscription/subscription.view"
import {
  FeatureItem,
  ProductFeatures,
} from "@/components/view/products/simple/simple.view"
import { RichText } from "@/components/view/storyTelling/richText/richText.view"
import { Header } from "@/components/view/layout/header/header.view"
import { Footer } from "@/components/view/layout/footer/footer.view"
import ProductGallery from "@/components/view/products/productGallery/productGallery.view"
import ProductDetailsSection from "@/components/view/products/productDetailsSection/productDetailsSection.view"
import ProductTitle from "@/components/view/products/productTitle/productTitle.view"
import ProductPrice from "@/components/view/products/productPrice/productPrice.view"
import ProductDescription from "@/components/view/products/productDescription/productDescription.view"
import ProductAddToCartButton from "@/components/view/products/productAddToCartButton/productAddToCartButton.view"

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
