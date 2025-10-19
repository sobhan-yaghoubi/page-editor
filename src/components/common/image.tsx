"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { useRenderers } from "@/contexts/RenderContext"
import { BasicBlocks } from "@/schemas/shared/enums"

export interface ImageRenderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string

  settings: Record<string, any>
}

export const Image = ({ settings }: ComponentProps) => {
  const renderers = useRenderers()
  const { src, alt, width, height, ...restSettings } = settings

  if (!src) {
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          border: "2px dashed #ccc",
        }}
      >
        <span>Image Placeholder</span>
      </div>
    )
  }

  const CustomImageComponent = renderers?.[BasicBlocks.IMAGE]

  if (CustomImageComponent) {
    const imageProps: ImageRenderProps = {
      src,
      alt: alt || "",
      width,
      height,
      settings: restSettings,
    }
    return <CustomImageComponent {...imageProps} />
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      style={{
        width: settings.width || "100%",
        height: "auto",
        maxWidth: "100%",
        display: "block",
        objectFit: "inherit",
        borderRadius: settings.borderRadius,
      }}
    />
  )
}
