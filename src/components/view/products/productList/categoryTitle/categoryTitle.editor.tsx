import { CategoryTitleSettings } from "@/schemas/components/products/productList/categoryTitle.schema"
import { ComponentProps } from "@/types"

const categoryTitleEditor = ({
  settings,
}: ComponentProps<CategoryTitleSettings>) => {
  const Tag = settings.tag || "h1"
  const style = {
    fontSize: settings.fontSize === "large" ? "2.25rem" : "1.875rem",
    fontWeight: settings.fontWeight || "bold",
  }

  return <Tag style={style}>{"{{ Category Title }}"}</Tag>
}

export default categoryTitleEditor
