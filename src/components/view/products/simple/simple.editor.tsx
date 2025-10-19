import React from "react"
import { ComponentData, ComponentProps } from "@/types"
import { Product, ProductCard } from "@/types/product"
import { ProductFeatureSettings } from "@/schemas/components/products/simple/simple.schema"
import uuid from "@/lib/uuid"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
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
  const { title = "Featured Products" } = settings

  if (!productMock || !children) return null

  const template = (children ?? []) as ComponentData[]

  const products = Array.from({ length: 13 }, (_) => ({
    ...productMock,
    id: uuid(),
  }))
  return (
    <section>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {title}
      </h2>
      <Carousel
        columnsDesktop={2}
        columnsMobile={1}
        gap="1rem"
        autoplay={true}
        autoplayDelay={3000}
        options={{
          loop: true,
        }}
      >
        <CarouselContent>
          {renderRepeater?.(products, template, CarouselItem)}
        </CarouselContent>
        <CarouselPagination />
      </Carousel>
    </section>
  )
}
