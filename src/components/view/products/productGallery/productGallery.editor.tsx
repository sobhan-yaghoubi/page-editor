"use client"

import React from "react"
import { ComponentProps } from "@/types"

const PlaceholderImage = ({ isThumbnail = false }) => (
  <div
    style={{
      backgroundColor: "#E5E7EB",
      aspectRatio: "1 / 1",
      borderRadius: "0.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#6B7280",
      width: isThumbnail ? "64px" : "100%",
      height: isThumbnail ? "64px" : "auto",
      maxHeight: !isThumbnail ? "600px" : "auto",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  </div>
)

const ProductGalleryEditor = ({ settings }: ComponentProps) => {
  const { layout = "stacked" } = settings
  const fakeThumbnails = [1, 2, 3, 4]

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    flexDirection: layout === "left" ? "row" : "column",
  }

  const thumbnailContainerStyle: React.CSSProperties = {
    display: layout === "carousel" ? "none" : "flex",
    gap: "0.5rem",
    flexDirection: layout === "left" ? "column" : "row",
    justifyContent: "center",
    order: layout === "left" ? 1 : 2,
    marginTop: layout === "stacked" ? "1rem" : "0",
  }

  return (
    <div style={containerStyle}>
      <div style={{ flex: "1 1 0%", order: layout === "left" ? 2 : 1 }}>
        <PlaceholderImage />
      </div>

      <div style={thumbnailContainerStyle}>
        {fakeThumbnails.map((i) => (
          <div
            key={i}
            style={{
              cursor: "pointer",
              border: i === 1 ? "2px solid #3B82F6" : "2px solid transparent",
              borderRadius: "0.375rem",
            }}
          >
            <PlaceholderImage isThumbnail />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGalleryEditor
