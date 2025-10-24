import { ComponentData, ComponentProps } from "@/types"

import { CategoryPageSubCategoriesSettings } from "@/schemas/components/products/productList/subCategories.schema"
import { Image } from "@/components/common/image"
import uuid from "@/lib/uuid"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel"

const subCategories: { image: string; name: string; alt: string }[] = [
  {
    name: "Sub Category 1",
    alt: "Sub Category",
    image: "https://placehold.co/300x200?text=Sub+Category+1",
  },
  {
    name: "Sub Category 2",
    alt: "Sub Category",
    image: "https://placehold.co/300x200?text=Sub+Category+2",
  },
  {
    name: "Sub Category 3",
    alt: "Sub Category",
    image: "https://placehold.co/300x200?text=Sub+Category+3",
  },
]

const productSubCategoriesEditor = ({}: ComponentProps<
  CategoryPageSubCategoriesSettings,
  ComponentData[],
  { image: string; name: string; alt: string }[]
>) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {subCategories?.map((subCategory) => (
            <CarouselItem>
              <Image
                id={`sub-category-image-${uuid()}`}
                settings={{ src: subCategory.image, alt: subCategory.alt }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default productSubCategoriesEditor
