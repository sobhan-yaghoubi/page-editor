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
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedSlide(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return

    onInit(api)
    onSelect(api)
    api.on("reInit", onInit).on("select", onSelect)

    return () => {
      api.off("reInit", onInit)
      api.off("select", onSelect)
    }
  }, [api, onInit, onSelect])

  return { selectedSlide, scrollSnaps, onDotButtonClick }
}

export type PaginationDotButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>
export const PaginationDotButton = (props: PaginationDotButtonProps) => (
  <button type="button" {...props} />
)
