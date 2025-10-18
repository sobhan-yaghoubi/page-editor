"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { useRenderers } from "@/contexts/RenderContext"
import { BasicBlocks } from "@/schemas/shared/enums"

// 1. Define the props for the custom render function.
// This is the "contract" the application's renderer must fulfill.
export interface ImageRenderProps {
  src: string
  alt: string
  width?: number // next/image prefers numbers for width/height
  height?: number
  className?: string // Allow passing classes for styling
  // Pass through any other settings for advanced usage
  settings: Record<string, any>
}

// 2. The component's props now include the standard settings and an optional render function.
// Note: We don't need a special `render` prop here anymore because we use the context.
export const Image = ({ settings }: ComponentProps) => {
  const renderers = useRenderers()
  const { src, alt, ...restSettings } = settings

  // --- Placeholder Logic ---
  // If there is no src, render a placeholder. This is important for the editor.
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

  // --- Renderer Lookup ---
  // Look for a custom renderer matching the component's own type.
  const CustomImageComponent = renderers?.[BasicBlocks.IMAGE]

  // If the application provided a custom renderer for "IMAGE", use it.
  if (CustomImageComponent) {
    const imageProps: ImageRenderProps = {
      src,
      alt: alt || "",
      width: 500, // Provide a sensible default
      height: 500, // Provide a sensible default
      settings: restSettings,
    }
    return <CustomImageComponent {...imageProps} />
  }

  // --- Fallback Rendering ---
  // Otherwise, fall back to a standard, universally compatible HTML <img> tag.
  return (
    <img
      src={src}
      alt={alt || ""}
      style={{
        width: settings.width || "100%",
        height: "auto",
        maxWidth: "100%",
        display: "block",
        borderRadius: settings.borderRadius,
      }}
    />
  )
}
