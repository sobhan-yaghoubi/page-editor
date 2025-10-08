"use client"
import { ComponentProps } from "@/types"
import clsx from "clsx"

const ProductAddToCartButtonEditor = ({ settings }: ComponentProps) => {
  const buttonText = settings.inStockText || "Add to Cart"

  const buttonClassName = clsx("btn", {
    "btn-primary": settings.style === "primary" || !settings.style,
    "btn-secondary": settings.style === "secondary",
    "btn-outline": settings.style === "outline",
    "btn-sm": settings.size === "sm",
    "btn-md": settings.size === "md" || !settings.size,
    "btn-lg": settings.size === "lg",
  })

  return (
    <button className={buttonClassName}>
      {buttonText}
    </button>
  )
}

export default ProductAddToCartButtonEditor
