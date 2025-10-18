"use client"
// TODO: remove this file and merge them all with the components/common/carousel/index.tsx

import React, { CSSProperties } from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"

type PropType = {
  options?: EmblaOptionsType
  className?: string
  children: React.ReactNode
  maxWidth?: string
  slideHeight?: string
  slideSpacing?: string
  slideSize?: string
}

const SimpleCarousel: React.FC<PropType> = (props) => {
  const {
    className,
    options,
    children,
    maxWidth,
    slideHeight,
    slideSpacing,
    slideSize,
  } = props
  const [emblaRef, _] = useEmblaCarousel({
    ...options,
    direction: "rtl",
    dragFree: true,
  })

  const carouselStyles: CSSProperties = {
    ["--slide-max-width" as any]: maxWidth ?? "100%",
    ["--slide-height" as any]: slideHeight ?? "fit-content",
    ["--slide-spacing" as any]: slideSpacing ?? "2rem",
    ["--slide-size" as any]: slideSize ?? "auto",
  }

  return (
    <section
      style={carouselStyles}
      className={`simple-carousel embla ${className}`}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </section>
  )
}

const SimpleCarouselSlide = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <div className={`embla__slide ${className}`}>{children}</div>
}

export { SimpleCarousel, SimpleCarouselSlide }
