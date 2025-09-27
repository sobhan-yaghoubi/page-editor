"use client"
import { ComponentProps } from "@/types"
import { useProduct } from "@/contexts/ProductContext"

const ProductTitleView = ({ settings }: ComponentProps) => {
  const { product } = useProduct()
  if (!product) return null

  const Tag = settings.tag || "h1"
  const style = {
    fontSize: settings.fontSize === "large" ? "2.25rem" : "1.875rem",
    fontWeight: settings.fontWeight || "bold",
  }

  return <Tag style={style}>{product.name}</Tag>
}

export default ProductTitleView
