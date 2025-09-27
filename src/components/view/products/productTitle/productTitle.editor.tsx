"use client"
import { ComponentProps } from "@/types"

const ProductTitleEditor = ({ settings }: ComponentProps) => {
  const Tag = settings.tag || "h1"
  const style = {
    fontSize: settings.fontSize === "large" ? "2.25rem" : "1.875rem",
    fontWeight: settings.fontWeight || "bold",
  }

  return <Tag style={style}>{"{{ Product Title }}"}</Tag>
}

export default ProductTitleEditor
