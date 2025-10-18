import { EmblaCarouselType } from "embla-carousel"
import React, { useCallback, useEffect, useState } from "react"

type UsePaginationDotButtonsProps = {
  api: EmblaCarouselType | undefined
}

export const usePaginationDotButtons = ({
  api,
}: UsePaginationDotButtonsProps) => {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (slideNumber: number) => {
      if (!api) return

      api.scrollTo(slideNumber)
    },
    [api]
  )

  const onInit = useCallback(
    (api: NonNullable<UsePaginationDotButtonsProps["api"]>) => {
      setScrollSnaps(api.scrollSnapList())
    },
    []
  )

  const onSelect = useCallback(
    (api: NonNullable<UsePaginationDotButtonsProps["api"]>) => {
      setSelectedSlide(api.selectedScrollSnap())
    },
    []
  )

  useEffect(() => {
    if (!api) return

    onInit(api)
    onSelect(api)
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect)
  }, [api, onInit, onSelect])

  return { selectedSlide, scrollSnaps, onDotButtonClick }
}

export const PaginationDotButton = ({
  children,
  ...props
}: {
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className="pagination-dot-button">
      {children}
    </button>
  )
}

export default PaginationDotButton
