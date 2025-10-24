import { Grid, GridItem } from "@/components/common/grid"
import uuid from "@/lib/uuid"
import { ProductGridListSettings } from "@/schemas/components/products/productList/productGridList.schema"
import { ComponentData, ComponentProps } from "@/types"
import { Product } from "@/types/product"
import React from "react"

const productGridListView = ({
  settings,
  data: products,
  children,
  renderRepeater,
}: ComponentProps<ProductGridListSettings, ComponentData[], Product[]>) => {
  const { cardWidthDesktop, cardWidthMobile, gap, productsPerPage } = settings

  if (!Array.isArray(products) || products.length === 0 || !children)
    return null

  const template = (children ?? []) as ComponentData[]

  const productsByCount = products.slice(0, productsPerPage)

  return (
    <Grid
      id={`grid-${uuid()}`}
      settings={{
        cardWidthDesktop,
        cardWidthMobile,
        gap,
      }}
    >
      {renderRepeater?.(productsByCount, template, GridItem)}
    </Grid>
  )
}

export default productGridListView
