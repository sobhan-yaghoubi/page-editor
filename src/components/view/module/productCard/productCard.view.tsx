import { ComponentProps, ComponentData } from "@/types"
import { ProductCardSettings } from "@/schemas/components"
import { ProductCard } from "@/types/product"
import { ComponentViewRenderer } from "@/view"
import { Image } from "@/components/common/image"
import uuid from "@/lib/uuid"
import { HeartIcon } from "lucide-react"

type ProductCardProps = ComponentProps<
  ProductCardSettings,
  ComponentProps["children"],
  ProductCard
>

export const ProductCardView = ({
  settings,
  children,
  data: product,
}: ProductCardProps) => {
  if (!children) {
    return <div>(Product Card Template is empty)</div>
  }

  return (
    <div className="product_card">
      {/* Image + overlays */}
      <div className="media">
        <img
          src={product?.images[0]}
          alt={product?.name}
          className="media_img"
        />

        {/* Desktop color strip or count (container kept for future content) */}
        <div className="desktop_strip"></div>

        {/* Favorite icon (desktop only) */}
        <button
          // onClick={() => setIsFavorite(!isFavorite)}
          className="fav_button"
          aria-label="add-to-favorites"
        >
          <HeartIcon className="icon_sz" />
        </button>
      </div>

      {/* Text + Price */}
      <div className="details" dir="rtl">
        <div className="title_block">
          <div className="title">{product?.name}</div>
          {product?.sku && <div className="sku">{product?.sku}</div>}
        </div>

        <div className="price_row" dir="rtl">
          <span className="price">{product?.price}</span>
          <span className="currency">تومان</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCardView
