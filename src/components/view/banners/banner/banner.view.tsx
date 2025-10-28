"use client"

import { ComponentProps } from "@/types"
import { BannerSettings } from "@/schemas/components/banners/banner/banner.schema"
import { Link } from "@/components/common/link"
import { Image } from "@/components/common/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel"
import uuid from "@/lib/uuid"
import { CSSProperties } from "react"

type BannerViewProps = ComponentProps<BannerSettings>

export const BannerView = ({ settings }: BannerViewProps) => {
  const { slides, bannerHeightMobile, bannerHeightDesktop, bannerObjectFit } =
    settings

  if (!slides || !slides.length) {
    return null
  }

  if (slides.length === 1) {
    const singleSlide = slides[0]
    return (
      <section className="banner-single-slide">
        <Link href={singleSlide.href}>
          <Image
            id={singleSlide.href}
            settings={{
              src: singleSlide.image,
              alt: singleSlide.alt,
            }}
          />
        </Link>
      </section>
    )
  }

  const bannerStyles: CSSProperties = {
    ["--banner-wrapper-mobile-height" as any]: bannerHeightMobile,
    ["--banner-wrapper-desktop-height" as any]: bannerHeightDesktop,
    ["--banner-object-fit" as any]: bannerObjectFit,
  }

  return (
    <Carousel
      slideSize="100%"
      gap="1.5rem"
      options={{
        align: "center",
        loop: false,
      }}
    >
      <CarouselContent>
        <div style={bannerStyles} className="banner-wrapper">
          {slides.map((slide, idx) => (
            <CarouselItem
              style={{ height: "100%" }}
              key={`${uuid()}-banner-${idx}`}
            >
              <Link href={slide.href}>
                <Image
                  id={slide.href}
                  settings={{
                    src: slide.image,
                    alt: slide.alt,
                    height: "100%",
                    objectFit: bannerObjectFit,
                  }}
                />
              </Link>
            </CarouselItem>
          ))}
        </div>
      </CarouselContent>
      <CarouselPrevious className="carousel-previous-button" />
      <CarouselNext className="carousel-next-button" />
    </Carousel>
  )
}
