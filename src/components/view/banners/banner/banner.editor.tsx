"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { BannerSettings } from "@/schemas/components/banners/banner/banner.schema"
import { Image } from "@/components/common/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/common/carousel"
import uuid from "@/lib/uuid"

// A simple placeholder for when no image is selected.
const ImagePlaceholder = () => (
  <div
    style={{
      width: "100%",
      paddingBottom: "40%", // Aspect ratio for a banner (e.g., 1200x480)
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#999",
      border: "2px dashed #ccc",
    }}
  >
    <span>Banner Slide</span>
  </div>
)

type BannerEditorProps = ComponentProps<BannerSettings>

export const BannerEditor = ({ settings }: BannerEditorProps) => {
  const { slides, showArrows, showDots } = settings

  if (!slides || !slides.length) {
    return null
  }

  if (slides.length === 1) {
    const singleSlide = slides[0]
    return (
      <section className="banner-single-slide">
        <Image
          id={singleSlide.href}
          settings={{
            src: singleSlide.image,
            alt: singleSlide.alt,
          }}
        />
      </section>
    )
  }

  return (
    <Carousel
      columnsDesktop={1}
      columnsMobile={1}
      style={{ position: "relative" }}
    >
      <CarouselContent>
        {slides.map((slide, idx) => (
          <CarouselItem key={`${uuid()}-banner-${idx}`}>
            <div>
              <Image
                id={slide.href}
                settings={{
                  src: slide.image,
                  alt: slide.alt,
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
