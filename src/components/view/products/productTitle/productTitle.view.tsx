"use client"
import { ComponentProps } from "@/types"
import { useProduct } from "@/contexts/ProductContext"
import { Product } from "@/types/product"

const ProductTitleView = ({
  settings,
  data,
}: ComponentProps<ComponentProps["settings"], ComponentProps["children"], Product>) => {
  const isDataDriven = Boolean(data)
  let product: Product | null = null
  if (!isDataDriven) {
    const { product: productContext } = useProduct()
    product = productContext
  } else {
    product = data ?? null
  }
  
  if (!product) return null

  const Tag = settings.tag || "h1"
  const style = {
    fontSize: settings.fontSize === "large" ? "2.25rem" : "1.875rem",
    fontWeight: settings.fontWeight || "bold",
  }

  return <Tag style={style}>{product.name}</Tag>
}

export default ProductTitleView
