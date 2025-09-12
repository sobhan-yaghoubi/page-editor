import React from "react"
import NextImage from "next/image"
import { ComponentProps } from "@/types"

export const Image = ({ settings }: ComponentProps) => {
  if (!settings.src) {
    return (
      <div
        style={{
          width: settings.width || "100%",
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

  return (
    <NextImage
      src={settings.src}
      alt={settings.alt || ""}
      width={500}
      height={500}
      style={{
        width: settings.width || "auto",
        maxWidth: "100%",
        height: "auto",
      }}
    />
  )
}
