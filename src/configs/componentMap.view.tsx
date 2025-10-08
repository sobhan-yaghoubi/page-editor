import { BasicBlocks, Sections, ProductBlocks, ModuleUI } from "@/schema/enums"

import { HeroSection } from "@/components/view/banners/hero/hero.view"
import { Button } from "@/components/view/basic/button/button.view"
import { Heading } from "@/components/view/basic/heading/heading.view"
import { Image } from "@/components/view/basic/image/image.view"
import { Text } from "@/components/view/basic/text/text.view"
import { SubscriptionForm } from "@/components/view/forms/subscription/subscription.view"
import { FeaturedProductsView as ProductFeatures } from "@/components/view/products/simple/simple.view"
import { RichText } from "@/components/view/storyTelling/richText/richText.view"
import { Header } from "@/components/view/layout/header/header.view"
import { Footer } from "@/components/view/layout/footer/footer.view"
import ProductGallery from "@/components/view/products/productGallery/productGallery.view"
import ProductDetailsSection from "@/components/view/products/productDetailsSection/productDetailsSection.view"
import ProductTitle from "@/components/view/products/productTitle/productTitle.view"
import ProductPrice from "@/components/view/products/productPrice/productPrice.view"
import ProductDescription from "@/components/view/products/productDescription/productDescription.view"
import ProductAddToCartButton from "@/components/view/products/productAddToCartButton/productAddToCartButton.view"
import Spacer from "@/components/view/basic/spacer/spacer.view"
import Group from "@/components/view/basic/group/group.view"
import ProductBox from "@/components/view/products/module/productBox/productBox.view"

export const CLIENT_ONLY_COMPONENTS = new Set<string>([
  BasicBlocks.BUTTON,
  Sections.SUBSCRIPTION_FORM,
  ProductBlocks.PRODUCT_TITLE,
  ProductBlocks.PRODUCT_PRICE,
  ProductBlocks.PRODUCT_DESCRIPTION,
  ProductBlocks.PRODUCT_GALLERY,
  ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
])

export const COMPONENT_MAP = {
  [Sections.HERO_SECTION]: HeroSection,
  [Sections.RICH_TEXT]: RichText,
  [Sections.SUBSCRIPTION_FORM]: SubscriptionForm,
  [Sections.HEADER]: Header,
  [Sections.FOOTER]: Footer,
  [Sections.PRODUCT_FEATURES]: ProductFeatures,

  [BasicBlocks.HEADING]: Heading,
  [BasicBlocks.TEXT]: Text,
  [BasicBlocks.BUTTON]: Button,
  [BasicBlocks.IMAGE]: Image,
  [BasicBlocks.SPACER]: Spacer,
  [BasicBlocks.GROUP]: Group,

  [ModuleUI.PRODUCT_BOX]: ProductBox,

  [ProductBlocks.PRODUCT_TITLE]: ProductTitle,
  [ProductBlocks.PRODUCT_PRICE]: ProductPrice,
  [ProductBlocks.PRODUCT_GALLERY]: ProductGallery,
  [ProductBlocks.PRODUCT_DETAILS_SECTION]: ProductDetailsSection,
  [ProductBlocks.PRODUCT_DESCRIPTION]: ProductDescription,
  [ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON]: ProductAddToCartButton,
}
