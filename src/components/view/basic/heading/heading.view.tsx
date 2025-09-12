import React from "react"
import { ComponentProps } from "@/types"

export const Heading = ({ settings }: ComponentProps) => {
  const Tag = settings.level || "h2"

  const style = {
    color: settings.color,
    fontWeight: settings.fontWeight,
  }

  return settings.text ? <Tag style={style}>{settings.text}</Tag> : null
}
