"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { SlidersHorizontalIcon } from "lucide-react"
import { ProductFiltersSettings } from "@/schemas/components/products/productList/productFilters.schema"

type Props = ComponentProps<ProductFiltersSettings>

/**
 * A static, visual placeholder for the editor canvas. It shows the user
 * where the application's real Product Filter component will be injected.
 */
const ProductFiltersEditor = ({ isSelected }: Props) => {
  const containerStyle: React.CSSProperties = {
    padding: "2rem",
    border: `2px dashed ${isSelected ? "#3B82F6" : "#9ca3af"}`,
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#6b7280",
    backgroundColor: "#f9fafb",
    transition: "border-color 0.2s",
  }

  return (
    <div style={containerStyle}>
      <SlidersHorizontalIcon size={32} style={{ marginBottom: "0.5rem" }} />
      <p style={{ fontWeight: 600, fontSize: "1.125rem" }}>Product Filters</p>
      <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
        (Filters will be displayed here on the live store)
      </p>
    </div>
  )
}

export default ProductFiltersEditor
