import { ComponentProps } from "@/types"
import { Product } from "@/types/product"

const categoryTitleView = ({
  settings,
  data,
}: ComponentProps<
  ComponentProps["settings"],
  ComponentProps["children"],
  Product
>) => {
  let product: Product | null = data ?? null

  if (!product) return null

  const Tag = settings.tag || "h1"
  const style = {
    fontSize: settings.fontSize === "large" ? "2.25rem" : "1.875rem",
    fontWeight: settings.fontWeight || "bold",
  }

  return <Tag style={style}>{data}</Tag>
}

export default categoryTitleView
