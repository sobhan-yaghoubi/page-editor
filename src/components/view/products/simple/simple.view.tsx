import React from "react"
import { ComponentProps } from "@/types"
import { Product } from "@/types/product"
import { ProductFeatureSettings } from "@/schemas/components/products/simple/simple.schema"
import { ComponentData } from "@/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/common/carousel"

export interface FeaturedProductsViewProps
  extends ComponentProps<ProductFeatureSettings, ComponentData[], Product[]> {}

export const FeaturedProductsView = ({
  settings,
  data: products,
  children,
  renderRepeater,
}: FeaturedProductsViewProps) => {
  const {
    title = "Featured Products",
    itemsPerView,
    mobileItemsPerView,
  } = settings || {}

  if (!Array.isArray(products) || products.length === 0 || !children)
    return null

  const template = (children ?? []) as ComponentData[]

  return (
    <section>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {title}
      </h2>

      <Carousel
        style={{ position: "relative" }}
        columnsMobile={mobileItemsPerView}
        columnsDesktop={itemsPerView}
      >
        <CarouselContent style={{ position: "relative" }}>
          {renderRepeater?.(products, template, CarouselItem)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
