"use client"

import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react"
import PaginationDotButton, {
  usePaginationDotButtons,
} from "./PaginationDotButton"
import {
  NextButton,
  NextButtonProps,
  PrevButton,
  PrevButtonProps,
  useNavigationCarousel,
} from "./Navigation"
import React, { useRef } from "react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  options?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  gap?: number
  columnsDesktop: number
  columnsMobile: number
} & React.HTMLAttributes<HTMLDivElement>

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  columnsDesktop?: number
  columnsMobile?: number
  slideSizePercent?: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used in Carousel Component")
  }

  return context
}

const Carousel = ({
  options,
  orientation = "horizontal",
  plugins,
  children,
  columnsDesktop,
  columnsMobile,
  ...props
}: CarouselProps) => {
  const divRef = useRef<HTMLDivElement | null>(null)

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...options,
      axis: orientation === "horizontal" ? "x" : "y",
      direction: "rtl",
      dragFree: true,
      loop: true,
      slidesToScroll: "auto",
    },
    plugins
  )

  const {
    isPrevBtnDisabled,
    isNextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    handleKeyDown,
  } = useNavigationCarousel({ api })

  return (
    <>
      <CarouselContext.Provider
        value={{
          carouselRef,
          scrollNext: onNextButtonClick,
          scrollPrev: onPrevButtonClick,
          canScrollNext: isNextBtnDisabled,
          canScrollPrev: isPrevBtnDisabled,
          orientation,
          api,
          columnsDesktop,
          columnsMobile,
          ...props,
        }}
      >
        <div
          dir="rtl"
          ref={divRef}
          onKeyDownCapture={handleKeyDown}
          role="region"
          className={`carousel ${props.className ?? ""}`}
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    </>
  )
}

type CarouselContentProps = React.HTMLAttributes<HTMLDivElement>
const CarouselContent = ({ className, ...props }: CarouselContentProps) => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const {
    carouselRef,
    orientation,
    columnsDesktop,
    columnsMobile,
    gap,
    slideSizePercent,
  } = useCarousel()

  const containerStyle = {
    "--columns-desktop": columnsDesktop,
    "--columns-mobile": columnsMobile,
    "--slide-size": slideSizePercent,
    "--slide-spacing": gap ?? 0,
  } as React.CSSProperties

  return (
    <div ref={carouselRef} className="carousel-content-wrapper">
      <div
        ref={divRef}
        style={containerStyle}
        className={`carousel-content ${
          orientation === "horizontal"
            ? "carousel-content-horizontal"
            : "carousel-content-vertical"
        }`}
        {...props}
      />
    </div>
  )
}

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>
const CarouselItem = ({ className, ...props }: CarouselItemProps) => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const { orientation } = useCarousel()

  return (
    <div
      ref={divRef}
      role="group"
      aria-roledescription="slide"
      className={`carousel-item ${
        orientation === "horizontal"
          ? "carousel-item-horizontal"
          : "carousel-item-vertical"
      }`}
      {...props}
    />
  )
}

const CarouselPrevious = ({ ...props }: PrevButtonProps) => {
  const { canScrollPrev, scrollPrev } = useCarousel()
  return (
    <PrevButton disabled={!canScrollPrev} onClick={scrollPrev} {...props} />
  )
}

const CarouselNext = ({ ...props }: NextButtonProps) => {
  const { canScrollNext, scrollNext } = useCarousel()
  return (
    <NextButton disabled={!canScrollNext} onClick={scrollNext} {...props} />
  )
}

type CarouselPaginationProps = React.HTMLAttributes<HTMLDivElement>
const CarouselPagination = ({
  className,
  ...props
}: CarouselPaginationProps) => {
  const { api } = useCarousel()
  const { onDotButtonClick, scrollSnaps, selectedSlide } =
    usePaginationDotButtons({ api })

  return (
    <div className="carousel-pagination" {...props}>
      {scrollSnaps.map((_, index) => (
        <PaginationDotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={
            selectedSlide === index
              ? "carousel-pagination-dot-active"
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
}
