import { ComponentData, ComponentProps } from "@/types"
import { SEOBoxSettings } from "@/schemas/components/products/productList/seoBox.schema"
import SEOBox from "@/components/common/seoBox"

const productListSeoBoxView = ({
  settings,
  data,
}: ComponentProps<SEOBoxSettings, ComponentData[], string>) => {
  if (!data) return null

  const { defaultCollapse } = settings
  return <SEOBox htmlContent={data} defaultCollapsed={defaultCollapse} />
}

export default productListSeoBoxView
