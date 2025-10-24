import { Grid, GridItem } from "@/components/common/grid"
import uuid from "@/lib/uuid"
import { ProductGridListSettings } from "@/schemas/components/products/productList/productGridList.schema"
import { ComponentData, ComponentProps } from "@/types"
import { ProductCard } from "@/types/product"

const productMock: ProductCard = {
  id: uuid(),
  name: "لورم ایپسام خداس",
  images: [
    "https://placehold.co/311x311?text=product+image+1",
    "https://placehold.co/311x311?text=product+image+2",
  ],
  inStock: true,
  sku: "DK.1.12757",
  price: 1800000,
}

const productGridListEditor = ({
  settings,
  children,
  data,
  renderRepeater,
}: ComponentProps<ProductGridListSettings>) => {
  const { cardWidthDesktop, cardWidthMobile, gap, productsPerPage } = settings
  const products = Array.from({ length: 13 }, (_) => ({
    ...{
      description: "",
      id: uuid(),
      images: [""],
      inStock: true,
      name: "dadad",
      price: 1,
      sku: "ese",
    },
    id: uuid(),
  }))

  if (!Array.isArray(products) || products.length === 0 || !children)
    return null

  const template = (children ?? []) as ComponentData[]

  const productsByCount = products.slice(0, productsPerPage)

  return (
    <Grid
      id={`grid-${uuid()}`}
      settings={{ cardWidthDesktop, cardWidthMobile, gap }}
    >
      {renderRepeater?.(productsByCount, template, GridItem)}
    </Grid>
  )
}

export default productGridListEditor
