"use client"

import { ComponentProps } from "@/types"
import { useProduct } from "@/contexts/ProductContext"
import { AddToCartPayload } from "@/types/product"
import clsx from "clsx"

const ProductAddToCartButtonView = ({ settings }: ComponentProps) => {
  const { product, actions } = useProduct()

  if (!product) {
    return null
  }

  const handleClick = async () => {
    if (actions?.onAddToCart) {
      const payload: AddToCartPayload = {
        productSku: product.sku,
        quantity: 1,
      }

      try {
        await actions.onAddToCart(payload)
      } catch (error) {
        console.error("Failed to add to cart:", error)
      }
    }
  }

  const buttonText = product.inStock
    ? settings.inStockText
    : settings.outOfStockText
  const isDisabled = !product.inStock || !actions?.onAddToCart

  const buttonClassName = clsx("btn", {
    "btn-primary": settings.style === "primary" || !settings.style,
    "btn-secondary": settings.style === "secondary",
    "btn-outline": settings.style === "outline",
    "btn-sm": settings.size === "sm",
    "btn-md": settings.size === "md" || !settings.size,
    "btn-lg": settings.size === "lg",
  })

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  )
}

export default ProductAddToCartButtonView
