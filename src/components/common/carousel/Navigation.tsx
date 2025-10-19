import { EmblaCarouselType } from "embla-carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"

type UseNavigationCarouselProps = {
  api: EmblaCarouselType | undefined
}

export const useNavigationCarousel = ({ api }: UseNavigationCarouselProps) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onPrevButtonClick = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const onNextButtonClick = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        onPrevButtonClick()
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        onNextButtonClick()
      }
    },
    [onPrevButtonClick, onNextButtonClick]
  )

  return {
    canScrollPrev,
    canScrollNext,
    onPrevButtonClick,
    onNextButtonClick,
    handleKeyDown,
  }
}

export type PrevButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export const PrevButton = ({ children, ...props }: PrevButtonProps) => (
  <button type="button" {...props}>
    {children ?? <ChevronRightIcon />}
  </button>
)

export type NextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export const NextButton = ({ children, ...props }: NextButtonProps) => (
  <button type="button" {...props}>
    {children ?? <ChevronLeftIcon />}
  </button>
)
