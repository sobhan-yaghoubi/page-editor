import { BasicBlocks, Sections, ProductBlocks } from "@/schema/enums"

import { HeroSection } from "@/components/view/banners/hero/hero.editor"
import { Button } from "@/components/view/basic/button/button.editor"
import { Heading } from "@/components/view/basic/heading/heading.editor"
import { Image } from "@/components/view/basic/image/image.editor"
import { Text } from "@/components/view/basic/text/text.editor"
import { SubscriptionForm } from "@/components/view/forms/subscription/subscription.editor"
import {
  FeatureItem,
  ProductFeatures,
} from "@/components/view/products/simple/simple.editor"
import { RichText } from "@/components/view/storyTelling/richText/richText.editor"
import { Header } from "@/components/view/layout/header/header.editor"
import { Footer } from "@/components/view/layout/footer/footer.editor"
import ProductGallery from "@/components/view/products/productGallery/productGallery.editor"
import ProductDetailsSection from "@/components/view/products/productDetailsSection/productDetailsSection.editor"
import ProductTitle from "@/components/view/products/productTitle/productTitle.editor"
import ProductPrice from "@/components/view/products/productPrice/productPrice.editor"
import ProductDescription from "@/components/view/products/productDescription/productDescription.editor"
import ProductAddToCartButton from "@/components/view/products/productAddToCartButton/productAddToCartButton.editor"

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

  [ProductBlocks.PRODUCT_TITLE]: ProductTitle,
  [ProductBlocks.PRODUCT_PRICE]: ProductPrice,
  [ProductBlocks.PRODUCT_GALLERY]: ProductGallery,
  [ProductBlocks.PRODUCT_DETAILS_SECTION]: ProductDetailsSection,
  [ProductBlocks.PRODUCT_DESCRIPTION]: ProductDescription,
  [ProductBlocks.ADD_TO_CART_BUTTON]: ProductAddToCartButton,
}
