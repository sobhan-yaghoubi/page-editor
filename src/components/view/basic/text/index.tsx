import React from "react"
import { ComponentProps } from "@/types"

const fontSizeMap = {
  small: "0.875rem",
  medium: "1rem",
  large: "1.125rem",
} as const

type FontSize = keyof typeof fontSizeMap

export const Text = ({ settings }: ComponentProps) => {
  const style = {
    color: settings.color,
    fontSize: fontSizeMap[(settings.fontSize as FontSize) ?? "medium"],
    lineHeight: settings.lineHeight,
  }

  return <p style={style}>{settings.content || "Default text content..."}</p>
}
