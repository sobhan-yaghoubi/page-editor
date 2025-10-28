import type { ComponentType } from "react"
import {
  BasicBlocks,
  Sections,
  ProductBlocks,
  ModuleUI,
  TemplateUI,
  CategoryBlocks,
} from "@/schemas/shared/enums"

import { HeroSection as HeroSectionView } from "@/components/view/banners/hero/hero.view"
import { HeroSection as HeroSectionEditor } from "@/components/view/banners/hero/hero.editor"

import { Button as ButtonView } from "@/components/view/basic/button/button.view"
import { Button as ButtonEditor } from "@/components/view/basic/button/button.editor"

import { Heading as HeadingView } from "@/components/view/basic/heading/heading.view"
import { Heading as HeadingEditor } from "@/components/view/basic/heading/heading.editor"

import { Image as ImageView } from "@/components/view/basic/image/image.view"
import { Image as ImageEditor } from "@/components/view/basic/image/image.editor"

import { Text as TextView } from "@/components/view/basic/text/text.view"
import { Text as TextEditor } from "@/components/view/basic/text/text.editor"

import { SubscriptionForm as SubscriptionFormView } from "@/components/view/forms/subscription/subscription.view"
import { SubscriptionForm as SubscriptionFormEditor } from "@/components/view/forms/subscription/subscription.editor"

import { FeaturedProductsView as ProductFeaturesView } from "@/components/view/products/simple/simple.view"
import { FeaturedProductsEditor as ProductsFEaturesEditor } from "@/components/view/products/simple/simple.editor"

import { RichText as RichTextView } from "@/components/view/storyTelling/richText/richText.view"
import { RichText as RichTextEditor } from "@/components/view/storyTelling/richText/richText.editor"

import HeaderView from "@/components/view/layout/header/header.view"
import HeaderEditor from "@/components/view/layout/header/header.editor"

import FooterView from "@/components/view/layout/footer/footer.view"
import FooterEditor from "@/components/view/layout/footer/footer.editor"

import ProductGalleryView from "@/components/view/products/productGallery/productGallery.view"
import ProductGalleryEditor from "@/components/view/products/productGallery/productGallery.editor"

import ProductDetailsSectionView from "@/components/view/products/productDetailsSection/productDetailsSection.view"
import ProductDetailsSectionEditor from "@/components/view/products/productDetailsSection/productDetailsSection.editor"

import ProductTitleView from "@/components/view/products/productTitle/productTitle.view"
import ProductTitleEditor from "@/components/view/products/productTitle/productTitle.editor"

import ProductPriceView from "@/components/view/products/productPrice/productPrice.view"
import ProductPriceEditor from "@/components/view/products/productPrice/productPrice.editor"

import ProductDescriptionView from "@/components/view/products/productDescription/productDescription.view"
import ProductDescriptionEditor from "@/components/view/products/productDescription/productDescription.editor"

import ProductAddToCartButtonView from "@/components/view/products/productAddToCartButton/productAddToCartButton.view"
import ProductAddToCartButtonEditor from "@/components/view/products/productAddToCartButton/productAddToCartButton.editor"

import SpacerView from "@/components/view/basic/spacer/spacer.view"
import SpacerEditor from "@/components/view/basic/spacer/spacer.editor"

import GroupView from "@/components/view/basic/group/group.view"
import GroupEditor from "@/components/view/basic/group/group.editor"

import productCardView from "@/components/view/module/productCard/productCard.view"
import productCardEditor from "@/components/view/module/productCard/productCard.editor"
import { BannerView } from "@/components/view/banners/banner/banner.view"
import { BannerEditor } from "@/components/view/banners/banner/banner.editor"
import BrandsFeatureView from "@/components/view/template/brandsFeature/brandFeatures.view"
import BrandsFeatureEditor from "@/components/view/template/brandsFeature/brandFeatures.editor"
import BestCommentsView from "@/components/view/template/bestComments/bestComments.view"
import BestCommentsEditor from "@/components/view/template/bestComments/bestComments.editor"
import BlogFeatureView from "@/components/view/template/blogFeature/blogFeature.view"
import BlogFeatureEditor from "@/components/view/template/blogFeature/blogFeature.editor"
import { AppComponentSlotView } from "@/components/common/app-component-slot/appComponentSlot.view"
import { AppComponentSlotEditor } from "@/components/common/app-component-slot/appComponentSlot.editor"
import announcementView from "@/components/view/module/announcement/announcement.view"
import announcementEditor from "@/components/view/module/announcement/announcement.editor"
import AnnouncementBarView from "@/components/view/module/announcementBar/announcementBar.view"
import AnnouncementBarEditor from "@/components/view/module/announcementBar/announcementBar.editor"
import productGridListView from "@/components/view/products/productList/productGridList/productGridList.view"
import productGridListEditor from "@/components/view/products/productList/productGridList/productGridList.editor"
import ProductFiltersEditor from "@/components/view/products/productList/productFilter/productsFilter.editor"
import { ProductFiltersView } from "@/components/view/products/productList/productFilter/productFilter.view"
import seoBoxView from "@/components/view/products/productList/seoBox/seoBox.view"
import productListSeoBoxView from "@/components/view/products/productList/seoBox/seoBox.view"
import productListSeoBoxEditor from "@/components/view/products/productList/seoBox/seoBox.editor"
import subCategoriesEditor from "@/components/view/products/productList/subCategories/subCategories.editor"
import productSubCategoriesView from "@/components/view/products/productList/subCategories/subCategories.view"
import productSubCategoriesEditor from "@/components/view/products/productList/subCategories/subCategories.editor"
import categoryTitleView from "@/components/view/products/productList/categoryTitle/categoryTitle.view"
import categoryTitleEditor from "@/components/view/products/productList/categoryTitle/categoryTitle.editor"
import TabView from "@/components/view/basic/tab/tab.view"
import TabEditor from "@/components/view/basic/tab/tab.editor"
import TabItemView from "@/components/view/basic/tab/tabItem.view"
import TabItemEditor from "@/components/view/basic/tab/tabItem.editor"
import productInfoTableEditor from "@/components/view/products/productInfoTable/productInfoTable.editor"
import ProductInfoTableView from "@/components/view/products/productInfoTable/productInfoTable.view"
import productInfoDescriptionEditor from "@/components/view/products/productInfoDescription/productInfoDescription.editor"
import productInfoDescriptionView from "@/components/view/products/productInfoDescription/productInfoDescription.view"
import productCommentEditor from "@/components/view/products/productComment/productComment.editor"
import ProductCommentView from "@/components/view/products/productComment/productComment.view"

type UIComponent = ComponentType<any>
type Pair = { view: UIComponent; editor: UIComponent }
type ComponentKey =
  | Sections
  | BasicBlocks
  | ProductBlocks
  | ModuleUI
  | TemplateUI
  | CategoryBlocks

const MASTER_REGISTRY = {
  [Sections.HERO_SECTION]: { view: HeroSectionView, editor: HeroSectionEditor },
  [Sections.PRODUCT_FEATURES]: {
    view: ProductFeaturesView,
    editor: ProductsFEaturesEditor,
  },
  [Sections.RICH_TEXT]: { view: RichTextView, editor: RichTextEditor },
  [Sections.SUBSCRIPTION_FORM]: {
    view: SubscriptionFormView,
    editor: SubscriptionFormEditor,
  },
  [Sections.HEADER]: { view: HeaderView, editor: HeaderEditor },
  [Sections.FOOTER]: { view: FooterView, editor: FooterEditor },
  [Sections.BANNER]: { view: BannerView, editor: BannerEditor },

  [CategoryBlocks.PRODUCT_GRID_LIST]: {
    view: productGridListView,
    editor: productGridListEditor,
  },
  [CategoryBlocks.PRODUCT_FILTERS]: {
    view: ProductFiltersView,
    editor: ProductFiltersEditor,
  },
  [CategoryBlocks.SEO_BOX]: {
    view: productListSeoBoxView,
    editor: productListSeoBoxEditor,
  },
  [CategoryBlocks.SUB_CATEGORIES]: {
    view: productSubCategoriesView,
    editor: productSubCategoriesEditor,
  },
  [CategoryBlocks.TITLE]: {
    view: categoryTitleView,
    editor: categoryTitleEditor,
  },

  [BasicBlocks.HEADING]: { view: HeadingView, editor: HeadingEditor },
  [BasicBlocks.TEXT]: { view: TextView, editor: TextEditor },
  [BasicBlocks.BUTTON]: { view: ButtonView, editor: ButtonEditor },
  [BasicBlocks.IMAGE]: { view: ImageView, editor: ImageEditor },
  [BasicBlocks.SPACER]: { view: SpacerView, editor: SpacerEditor },
  [BasicBlocks.GROUP]: { view: GroupView, editor: GroupEditor },
  [BasicBlocks.TAB]: { view: TabView, editor: TabEditor },
  [BasicBlocks.TAB_ITEM]: { view: TabItemView, editor: TabItemEditor },

  [ModuleUI.PRODUCT_CARD]: { view: productCardView, editor: productCardEditor },
  [ModuleUI.ANNOUNCEMENT]: {
    view: announcementView,
    editor: announcementEditor,
  },

  [Sections.ANNOUNCEMENT_BAR]: {
    view: AnnouncementBarView,
    editor: AnnouncementBarEditor,
  },
  [TemplateUI.BRAND_FEATURES]: {
    view: BrandsFeatureView,
    editor: BrandsFeatureEditor,
  },
  [TemplateUI.BEST_COMMENTS]: {
    view: BestCommentsView,
    editor: BestCommentsEditor,
  },
  [TemplateUI.BLOG_FEATURES]: {
    view: BlogFeatureView,
    editor: BlogFeatureEditor,
  },

  [BasicBlocks.APP_COMPONENT_SLOT]: {
    view: AppComponentSlotView,
    editor: AppComponentSlotEditor,
  },

  [ProductBlocks.PRODUCT_TITLE]: {
    view: ProductTitleView,
    editor: ProductTitleEditor,
  },
  [ProductBlocks.PRODUCT_PRICE]: {
    view: ProductPriceView,
    editor: ProductPriceEditor,
  },
  [ProductBlocks.PRODUCT_GALLERY]: {
    view: ProductGalleryView,
    editor: ProductGalleryEditor,
  },
  [ProductBlocks.PRODUCT_DETAILS_SECTION]: {
    view: ProductDetailsSectionView,
    editor: ProductDetailsSectionEditor,
  },
  [ProductBlocks.PRODUCT_DESCRIPTION]: {
    view: ProductDescriptionView,
    editor: ProductDescriptionEditor,
  },
  [ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON]: {
    view: ProductAddToCartButtonView,
    editor: ProductAddToCartButtonEditor,
  },
  [ProductBlocks.PRODUCT_INFO_TABLE]: {
    editor: productInfoTableEditor,
    view: ProductInfoTableView,
  },
  [ProductBlocks.PRODUCT_INFO_DESCRIPTION]: {
    editor: productInfoDescriptionEditor,
    view: productInfoDescriptionView,
  },
  [ProductBlocks.PRODUCT_COMMENTS]: {
    editor: productCommentEditor,
    view: ProductCommentView,
  },
} satisfies Record<ComponentKey, Pair>

export function createComponentMap<M extends "view" | "editor">(mode: M) {
  return Object.fromEntries(
    Object.entries(MASTER_REGISTRY).map(([k, pair]) => [k, pair[mode]])
  ) as Record<ComponentKey, UIComponent>
}

export const COMPONENT_MAP_VIEW = createComponentMap("view")
export const COMPONENT_MAP_EDITOR = createComponentMap("editor")

export const CLIENT_ONLY_COMPONENTS = new Set<ComponentKey>([
  BasicBlocks.BUTTON,
  Sections.SUBSCRIPTION_FORM,
  ProductBlocks.PRODUCT_TITLE,
  ProductBlocks.PRODUCT_PRICE,
  ProductBlocks.PRODUCT_DESCRIPTION,
  ProductBlocks.PRODUCT_GALLERY,
  ProductBlocks.PRODUCT_ADD_TO_CART_BUTTON,
  BasicBlocks.APP_COMPONENT_SLOT,
  Sections.HEADER,
  Sections.FOOTER,
  ProductBlocks.PRODUCT_DESCRIPTION,
  ProductBlocks.PRODUCT_INFO_DESCRIPTION,
])
