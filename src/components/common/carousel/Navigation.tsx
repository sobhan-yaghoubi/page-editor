import { EmblaCarouselType } from "embla-carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"

type UseNavigationCarouselProps = {
  api: EmblaCarouselType | undefined
}

export const useNavigationCarousel = ({ api }: UseNavigationCarouselProps) => {
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(true)
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!api) return undefined

    api.scrollPrev()
  }, [api])

  const onNextButtonClick = useCallback(() => {
    if (!api) return undefined

    api.scrollNext()
  }, [api])

  const onSelect = useCallback(
    (api: NonNullable<UseNavigationCarouselProps["api"]>) => {
      setIsPrevBtnDisabled(api.canScrollPrev())
      setIsNextBtnDisabled(api.canScrollNext())
    },
    []
  )

  useEffect(() => {
    if (!api) return undefined

    onSelect(api)
    api.on("reInit", onSelect).on("select", onSelect)
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
    isPrevBtnDisabled,
    isNextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    handleKeyDown,
  }
}

export type PrevButtonProps = {
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export const PrevButton = ({ children, ...props }: PrevButtonProps) => {
  return (
    <button
      style={{
        cursor: "pointer",
        background: "var(--background)",
        borderRadius: "var(--radius)",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "98%",
      }}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </button>
  )
}

export type NextButtonProps = {
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export const NextButton = ({ children, ...props }: NextButtonProps) => {
  return (
    <button
      style={{
        cursor: "pointer",
        background: "var(--background)",
        borderRadius: "var(--radius)",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "2%",
      }}
      {...props}
    >
      {children ?? <ChevronLeftIcon />}
    </button>
  )
}
