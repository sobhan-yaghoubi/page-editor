"use client"

import SeoBox from "@/components/common/seoBox"
import { useProduct } from "@/view"

const productInfoDescriptionView = () => {
  const { product } = useProduct()
  if (!product?.description) return null

  return <SeoBox htmlContent={product.description ?? ""} />
}

export default productInfoDescriptionView
