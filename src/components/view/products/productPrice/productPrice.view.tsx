"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { useProduct } from "@/contexts/ProductContext"
import { formatCurrency } from "@/utils/components/index"
import { Product } from "@/types/product"

const ProductPriceView = ({
  settings,
  data,
}: ComponentProps<
  ComponentProps["settings"],
  ComponentProps["children"],
  Product
>) => {
  const isDataDriven = Boolean(data)
  let product: Product | null = null
  if (!isDataDriven) {
    const { product: productContext } = useProduct()
    product = productContext
  } else {
    product = data ?? null
  }

  if (!product) {
    const skeletonStyle: React.CSSProperties = {
      height: "1.5rem",
      backgroundColor: "#E5E7EB",
      borderRadius: "0.25rem",
      width: "25%",
      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    }

    return <div style={skeletonStyle}></div>
  }

  const formattedPrice = formatCurrency(product.price, product.currency)
  const hasCompareAtPrice =
    typeof product.compareAtPrice === "number" &&
    product.compareAtPrice > product.price
  const formattedCompareAtPrice = hasCompareAtPrice
    ? formatCurrency(product.compareAtPrice!, product.currency)
    : null

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    gap: "0.5rem",
  }

  const mainPriceStyle: React.CSSProperties = {
    fontSize: settings.fontSize === "large" ? "1.5rem" : "1.25rem",
    color: settings.color,
    fontWeight: "bold",
  }

  const compareAtPriceStyle: React.CSSProperties = {
    color: "#6B7280",
    textDecoration: "line-through",
  }

  return (
    <div style={containerStyle}>
      <span style={mainPriceStyle}>{formattedPrice}</span>

      {formattedCompareAtPrice && (
        <span style={compareAtPriceStyle}>
          {settings.compareAtPriceLabel && `${settings.compareAtPriceLabel} -`}{" "}
          {formattedCompareAtPrice}
        </span>
      )}
    </div>
  )
}

export default ProductPriceView
