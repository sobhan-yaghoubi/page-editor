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

type BannerViewProps = ComponentProps<BannerSettings>

export const BannerView = ({ settings }: BannerViewProps) => {
  const { slides, autoplay, autoplayDelay, showDots, isLoop } = settings

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
        {slides.map((slide, idx) => (
          <CarouselItem key={`${uuid()}-banner-${idx}`}>
            <div>
              <Link href={slide.href}>
                <Image
                  id={slide.href}
                  settings={{
                    src: slide.image,
                    alt: slide.alt,
                  }}
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-previous-button" />
      <CarouselNext className="carousel-next-button" />
    </Carousel>
  )
}
