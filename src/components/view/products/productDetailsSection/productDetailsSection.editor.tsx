"use client"
import { ComponentProps } from "@/types"

const ProductDetailsSectionEditor = ({
  settings,
  children,
}: ComponentProps) => {
  const paddingMap: Record<string, string> = {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  }

  const style: React.CSSProperties = {
    padding: settings?.padding
      ? paddingMap[settings.padding]
      : paddingMap.medium,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
  }

  return <div style={style}>{children}</div>
}

export default ProductDetailsSectionEditor
