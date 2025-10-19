"use client"

import React, { useCallback, useMemo } from "react"
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import {
  useNavigationCarousel,
  PrevButton,
  NextButton,
  NextButtonProps,
  PrevButtonProps,
} from "./Navigation"
import {
  usePaginationDotButtons,
  PaginationDotButton,
} from "./PaginationDotButton"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>
type CarouselPlugin = NonNullable<
  Parameters<typeof useEmblaCarousel>[1]
>[number]

type CarouselProps = {
  options?: CarouselOptions
  plugins?: CarouselPlugin[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  autoplay?: boolean
  autoplayDelay?: number
  gap?: string
  columnsDesktop?: number
  columnsMobile?: number
  desktopHeight?: string
  slideSize?: string
  canUserSelect?: boolean
  mobileHeight?: string
} & React.HTMLAttributes<HTMLDivElement>

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  mode: "columns" | "free"
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export const useCarousel = () => {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel component")
  }
  return context
}

const Carousel = ({
  options,
  orientation = "horizontal",
  plugins = [],
  children,
  autoplay = false,
  autoplayDelay = 4000,
  columnsDesktop,
  columnsMobile,
  slideSize,
  gap = "1rem",
  desktopHeight = "500px",
  mobileHeight = "150px",
  canUserSelect,
  ...props
}: CarouselProps) => {
  const autoplayPlugin = useMemo(
    () =>
      autoplay
        ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]
        : [],
    [autoplay, autoplayDelay]
  )

  const allPlugins = [...autoplayPlugin, ...plugins]

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...options,
      axis: orientation === "horizontal" ? "x" : "y",
      direction: "rtl",
      loop: options?.loop ?? true,
      slidesToScroll: 1,
    },
    allPlugins
  )

  const {
    canScrollPrev,
    canScrollNext,
    onPrevButtonClick,
    onNextButtonClick,
    handleKeyDown,
  } = useNavigationCarousel({ api })
  const mode = columnsDesktop ? "columns" : "free"

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        options,
        scrollPrev: onPrevButtonClick,
        scrollNext: onNextButtonClick,
        canScrollPrev,
        mobileHeight,
        desktopHeight,
        canScrollNext,
        orientation,
        mode,
        columnsDesktop,
        columnsMobile,
        slideSize,
        gap,
        canUserSelect,
        ...props,
      }}
    >
      <div
        dir="rtl"
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        {...props}
        className={`carousel carousel--mode-${mode} ${props.className ?? ""}`}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>
}

const CarouselContent = ({
  className,
  ref,
  ...props
}: CarouselContentProps) => {
  const {
    carouselRef,
    columnsDesktop,
    columnsMobile,
    slideSize,
    mobileHeight,
    desktopHeight,
    gap,
    canUserSelect,
  } = useCarousel()

  const containerStyle = {
    "--slide-spacing": gap,
    "--slide-size": slideSize,
    "--columns-desktop": columnsDesktop,
    "--columns-mobile": columnsMobile,
    "--carousel-mobile-height": mobileHeight,
    "--carousel-desktop-height": desktopHeight,
    "--select-user": canUserSelect ?? "none",
  } as React.CSSProperties

  return (
    <div ref={carouselRef} className="carousel-viewport">
      <div
        ref={ref}
        style={containerStyle}
        className={`carousel-container ${className ?? ""}`}
        {...props}
      />
    </div>
  )
}

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>
}

const CarouselItem = ({ className, ref, ...props }: CarouselItemProps) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`carousel-item ${className ?? ""}`}
      {...props}
    />
  )
}

const CarouselPrevious = (props: PrevButtonProps) => {
  const { api, canScrollPrev, scrollPrev } = useCarousel()

  const handleClick = useCallback(() => {
    api?.plugins()?.autoplay?.reset()
    scrollPrev()
  }, [api, scrollPrev])

  return (
    <PrevButton disabled={!canScrollPrev} onClick={handleClick} {...props} />
  )
}

const CarouselNext = (props: NextButtonProps) => {
  const { api, canScrollNext, scrollNext } = useCarousel()

  const handleClick = useCallback(() => {
    api?.plugins()?.autoplay?.reset()
    scrollNext()
  }, [api, scrollNext])

  return (
    <NextButton disabled={!canScrollNext} onClick={handleClick} {...props} />
  )
}

const CarouselPagination = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { api } = useCarousel()
  const { onDotButtonClick, scrollSnaps, selectedSlide } =
    usePaginationDotButtons({ api })

  const handleDotClick = useCallback(
    (index: number) => {
      api?.plugins()?.autoplay?.reset()
      onDotButtonClick(index)
    },
    [api, onDotButtonClick]
  )

  if (scrollSnaps.length <= 1) return null

  return (
    <div className={`carousel-pagination ${className ?? ""}`} {...props}>
      {scrollSnaps.map((_, index) => (
        <PaginationDotButton
          key={index}
          onClick={() => handleDotClick(index)}
          className={
            selectedSlide === index
              ? "carousel-pagination-dot carousel-pagination-dot-active"
              : "carousel-pagination-dot"
          }
        />
      ))}
    </div>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
  type CarouselApi,
}
