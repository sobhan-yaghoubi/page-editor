import { ComponentData, ComponentProps } from "@/types"

import { CategoryPageSubCategoriesSettings } from "@/schemas/components/products/productList/subCategories.schema"
import { Image } from "@/components/common/image"
import uuid from "@/lib/uuid"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel"
import { Link } from "@/components/common/link"

const productSubCategoriesView = ({
  data: subCategories,
}: ComponentProps<
  CategoryPageSubCategoriesSettings,
  ComponentData[],
  { image: string; name: string; alt: string; link: string }[]
>) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {subCategories?.map((subCategory) => (
            <CarouselItem key={`sub-category-item-${uuid()}`}>
              <Link href={subCategory.link}>
                <Image
                  id={`sub-category-image-${uuid()}`}
                  settings={{
                    src: subCategory.image,
                    alt: subCategory.alt,
                    height: 100,
                    width: 100,
                  }}
                />
                {subCategory.name}
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default productSubCategoriesView
