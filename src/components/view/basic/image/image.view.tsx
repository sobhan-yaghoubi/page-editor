"use client"

import React from "react"
import { ComponentProps } from "@/types"

export interface ImageRenderProps {
  src: string
  alt: string
  width?: string | number
  height?: string | number
}

export interface ImageComponentProps extends ComponentProps {
  render?: (props: ImageRenderProps) => React.ReactNode
}

export const Image = ({ settings, render }: ImageComponentProps) => {
  const { src, alt, width, height, borderRadius } = settings

  if (!src) {
    return (
      <div
        style={{
          width: width || "100%",
          aspectRatio: "16 / 9",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          border: "2px dashed #ccc",
          borderRadius: borderRadius,
        }}
      >
        <span>Image Placeholder</span>
      </div>
    )
  }

  const imageProps: ImageRenderProps = {
    src,
    alt: alt || "",
    width: 500,
    height: 500,
  }

  if (typeof render === "function") {
    return <>{render(imageProps)}</>
  }

  return (
    <img
      src={imageProps.src}
      alt={imageProps.alt}
      style={{
        width: width || "100%",
        height: height || "auto",
        borderRadius: borderRadius,
        maxWidth: "100%",
      }}
    />
  )
}
