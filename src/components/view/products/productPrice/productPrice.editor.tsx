"use client"

import React from "react"
import { ComponentProps } from "@/types"

const ProductPriceEditor = ({ settings }: ComponentProps) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    gap: "0.5rem",
  }

  const mainPriceStyle: React.CSSProperties = {
    fontSize: settings.fontSize === "large" ? "1.5rem" : "1.25rem",
    color: settings.color || "#111827",
    fontWeight: "bold",
  }

  const compareAtPriceStyle: React.CSSProperties = {
    color: "#6B7280",
    textDecoration: "line-through",
  }

  return (
    <div style={containerStyle}>
      <span style={mainPriceStyle}>$19.99</span>

      <span style={compareAtPriceStyle}>
        {settings.compareAtPriceLabel || "Was:"} $24.99
      </span>
    </div>
  )
}

export default ProductPriceEditor
