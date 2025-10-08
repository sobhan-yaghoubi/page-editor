import React from "react"
import { ComponentProps } from "@/types"
import { ProductFeatureSettings } from "@/schema/component/sections/featuredProducts.schema"
import { Product } from "@/types/product"

type FeaturedProductsLayoutProps = ComponentProps<
  ProductFeatureSettings,
  React.ReactNode,
  Product[]
>

export const FeaturedProductsView = ({
  settings,
  data: products,
}: FeaturedProductsLayoutProps) => {
  const { title = "Featured Products", columns = 4 } = settings

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  }

  return (
    <section style={{ padding: "1rem" }}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {title}
      </h2>
      <div style={gridStyle}>
        {products?.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </section>
  )
}
