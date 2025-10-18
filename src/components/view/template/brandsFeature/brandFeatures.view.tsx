import {
  SimpleCarousel,
  SimpleCarouselSlide,
} from "@/components/common/carousel/simple"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

interface Brand {
  id: number
  nameEn: string
  nameFa: string
  quantity: number
  image: string
  logo: string
}

const brands: Brand[] = [
  {
    id: 1,
    nameEn: "ZINVO",
    nameFa: "برند زینوو",
    quantity: 70,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2a9a7143815b842a83e09716f529afeba7c1acfe?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/3c0059015413de851ef9cbbbf4b016bc92c99fc7?width=93",
  },
  {
    id: 2,
    nameEn: "DANIEL KLEIN",
    nameFa: "برند دنیل کلین",
    quantity: 42,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e1d3694dc1677975824938858dc1596f50dc4f46?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/3c0059015413de851ef9cbbbf4b016bc92c99fc7?width=93",
  },
  {
    id: 3,
    nameEn: "ARMANI",
    nameFa: "برند آرمانی",
    quantity: 23,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/637a953165d0417771b0229c32651eea9ddafe13?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/a3acf5f1a8e9035809164cfd1a2d2e96cf4e75db?width=93",
  },
  {
    id: 4,
    nameEn: "MASERATI",
    nameFa: "برند مازراتی",
    quantity: 30,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5855cb7d20066b8d5496e597df8cca3c7a96e775?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/bb13c337649e95a102c12c23c282bc1d9e9590a9?width=93",
  },
  {
    id: 5,
    nameEn: "EXTRIM",
    nameFa: "برند اکستریم",
    quantity: 80,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/637a953165d0417771b0229c32651eea9ddafe13?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/d50f84f75ce86189cd8417d421f76367a9e3db51?width=93",
  },
  {
    id: 11,
    nameEn: "ZINVO",
    nameFa: "برند زینوو",
    quantity: 70,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2a9a7143815b842a83e09716f529afeba7c1acfe?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/3c0059015413de851ef9cbbbf4b016bc92c99fc7?width=93",
  },
  {
    id: 12,
    nameEn: "DANIEL KLEIN",
    nameFa: "برند دنیل کلین",
    quantity: 42,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e1d3694dc1677975824938858dc1596f50dc4f46?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/3c0059015413de851ef9cbbbf4b016bc92c99fc7?width=93",
  },
  {
    id: 13,
    nameEn: "ARMANI",
    nameFa: "برند آرمانی",
    quantity: 23,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/637a953165d0417771b0229c32651eea9ddafe13?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/a3acf5f1a8e9035809164cfd1a2d2e96cf4e75db?width=93",
  },
  {
    id: 14,
    nameEn: "MASERATI",
    nameFa: "برند مازراتی",
    quantity: 30,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5855cb7d20066b8d5496e597df8cca3c7a96e775?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/bb13c337649e95a102c12c23c282bc1d9e9590a9?width=93",
  },
  {
    id: 15,
    nameEn: "EXTRIM",
    nameFa: "برند اکستریم",
    quantity: 80,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/637a953165d0417771b0229c32651eea9ddafe13?width=490",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/d50f84f75ce86189cd8417d421f76367a9e3db51?width=93",
  },
]

const BrandsFeatureView = () => {
  return (
    <>
      <div className="brands-feature-container">
        <div className="brands-feature-inner-container">
          <div className="desktop-layout">
            <div className="content-wrapper">
              <div className="content-title">برنــدهای ســاعـت</div>
              <div className="content-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
              <div className="navigation-wrapper">
                <button className="view-all-btn">
                  <span className="view-all-btn-text">مشاهده همه</span>
                </button>
                <div className="arrows-wrapper">
                  {/* <div className="arrow-left">
                    <CarouselPrevious />
                  </div>
                  <div className="arrow-right">
                    <CarouselNext />
                  </div> */}
                </div>
              </div>
            </div>
            <div style={{ width: "70%" }}>
              <SimpleCarousel>
                {brands.map((brand) => (
                  <SimpleCarouselSlide key={brand.id}>
                    <BrandCard
                      brandName={brand.nameFa}
                      quantity={brand.quantity}
                      image={brand.image}
                    />
                  </SimpleCarouselSlide>
                ))}
              </SimpleCarousel>
            </div>
          </div>

          <div className="mobile-layout">
            <div className="brand-grid">
              {brands.map((brand) => (
                <BrandCardMobile
                  key={brand.id}
                  brandName={brand.nameFa}
                  logo={brand.logo}
                />
              ))}
            </div>

            <button className="view-all-mobile-btn">
              <span className="view-all-mobile-btn-text">
                مشاهده همه برندها
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandsFeatureView

interface BrandCardProps {
  brandName: string
  quantity: number
  image: string
}

export const BrandCard = ({ brandName, quantity, image }: BrandCardProps) => {
  return (
    <div className="brand-card">
      <img src={image} alt={brandName} className="brand-card-img" />
      <div className="brand-card-title">{brandName}</div>
      <div className="brand-card-description">
        <div className="brand-card-quantity">محصول {quantity}</div>
        <ChevronLeftIcon className="text-grey-300" />
      </div>
    </div>
  )
}

interface BrandCardMobileProps {
  brandName: string
  logo: string
}

export const BrandCardMobile = ({ brandName, logo }: BrandCardMobileProps) => {
  return (
    <div className="brand-card-mobile">
      <img src={logo} alt={brandName} className="brand-card-logo" />
    </div>
  )
}
