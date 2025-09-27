"use client"
import { useState } from "react"
import { ComponentProps } from "@/types"
import { useProduct } from "@/contexts/ProductContext"

const ProductDescriptionView = ({ settings }: ComponentProps) => {
  const { product } = useProduct()
  const [isExpanded, setIsExpanded] = useState(!settings.truncate)

  if (!product?.description) {
    return null
  }

  const canTruncate = settings.truncate && product.description.length > 250
  const displayText = isExpanded
    ? product.description
    : product.description.substring(0, 250) + "..."

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: displayText.replace(/\n/g, "<br />"),
        }}
      />
      {canTruncate && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          style={{
            color: "#3b82f6",
            background: "none",
            border: "none",
            padding: 0,
            marginTop: "8px",
            cursor: "pointer",
          }}
        >
          {settings.showMoreText || "Read more"}
        </button>
      )}
    </div>
  )
}

export default ProductDescriptionView
