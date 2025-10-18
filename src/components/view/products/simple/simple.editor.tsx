import React from "react"
import { ComponentData, ComponentProps } from "@/types"
import { Product, ProductCard } from "@/types/product"
import { ProductFeatureSettings } from "@/schemas/components/products/simple/simple.schema"
import uuid from "@/lib/uuid"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/common/carousel"

const productMock: ProductCard = {
  id: uuid(),
  name: "لورم ایپسام خداس",
  images: [
    "https://placehold.co/311x311?text=product+image+1",
    "https://placehold.co/311x311?text=product+image+2",
  ],
  inStock: true,
  sku: "DK.1.12757",
  price: 1800000,
}

interface FeaturedProductsLayoutProps
  extends ComponentProps<ProductFeatureSettings, ComponentData[], Product[]> {}

export const FeaturedProductsEditor = ({
  settings,
  children,
  renderRepeater,
}: FeaturedProductsLayoutProps) => {
  const {
    title = "Featured Products",
    itemsPerView = 5,
    mobileItemsPerView = 2,
  } = settings

  if (!productMock || !children) return null

  const template = (children ?? []) as ComponentData[]

  const products = Array(13).fill(productMock)
  return (
    <section>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {title}
      </h2>
      <Carousel
        style={{ position: "relative", width: "inherit" }}
        columnsMobile={mobileItemsPerView}
        columnsDesktop={itemsPerView}
      >
        <CarouselContent>
          {renderRepeater?.(products, template, CarouselItem)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
