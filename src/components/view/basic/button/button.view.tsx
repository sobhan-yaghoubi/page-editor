import React from "react"
import { ComponentProps } from "@/types"
import clsx from "clsx"

interface ButtonSettings {
  style?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  text?: string
  url?: string
}

export const Button = ({ settings: genericSettings }: ComponentProps) => {
  "use client"
  const settings = genericSettings as ButtonSettings

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const buttonClassName = clsx("btn", {
    "btn-primary": settings.style === "primary" || !settings.style,
    "btn-secondary": settings.style === "secondary",
    "btn-outline": settings.style === "outline",
    "btn-sm": settings.size === "sm",
    "btn-md": settings.size === "md" || !settings.size,
    "btn-lg": settings.size === "lg",
  })

  const isLink = settings.url && settings.url !== "#"

  if (isLink) {
    return (
      <a href={settings.url} className={buttonClassName} onClick={handleClick}>
        {settings.text || "Click Here"}
      </a>
    )
  }

  return (
    <button type="button" className={buttonClassName} onClick={handleClick}>
      {settings.text || "Click Here"}
    </button>
  )
}
