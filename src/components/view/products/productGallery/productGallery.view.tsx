"use client"

import React, { useState, useEffect } from "react"
import { ComponentProps } from "@/types"
import { useProduct } from "@/contexts/ProductContext"
import { useRenderers } from "@/contexts/RenderContext"
import { BasicBlocks } from "@/schema/enums"

const ProductGalleryView = ({ settings }: ComponentProps) => {
  const renderers = useRenderers()
  const { product } = useProduct()
  const { layout = "stacked" } = settings
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product?.images])

  if (!product || !product.images || product.images.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: "1/1",
          backgroundColor: "#f3f4f6",
          borderRadius: "0.5rem",
        }}
      ></div>
    )
  }

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
    flexWrap: "wrap",
  }

  const mainImageWrapperStyle: React.CSSProperties = {
    flex: "1 1 0%",
    order: layout === "left" ? 2 : 1,
  }

  const CustomImageComponent = renderers?.[BasicBlocks.IMAGE]

  const renderDefaultImage = (src: string, alt: string) => (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
        aspectRatio: "1 / 1",
        borderRadius: "0.5rem",
        maxHeight: "600px",
      }}
    />
  )

  const renderDefaultThumbnail = (imageUrl: string, index: number) => {
    const isActive = imageUrl === activeImage
    return (
      <div
        key={index}
        onClick={() => setActiveImage(imageUrl)}
        style={{
          cursor: "pointer",
          padding: "0.25rem",
          borderRadius: "0.375rem",
          transition: "all 0.2s",
          border: isActive ? "2px solid #3B82F6" : "2px solid transparent",
        }}
      >
        <img
          src={imageUrl}
          alt={`${product.name} thumbnail ${index + 1}`}
          style={{
            width: "64px",
            height: "64px",
            objectFit: "cover",
            borderRadius: "0.25rem",
          }}
        />
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <div style={mainImageWrapperStyle}>
        {activeImage &&
          (CustomImageComponent ? (
            <CustomImageComponent
              src={activeImage}
              alt={product.name}
              width={800}
              height={800}
            />
          ) : (
            renderDefaultImage(activeImage, product.name)
          ))}
      </div>

      <div style={thumbnailContainerStyle}>
        {product.images.map((imageUrl, index) =>
          CustomImageComponent ? (
            <div
              key={index}
              onClick={() => setActiveImage(imageUrl)}
              style={{
                cursor: "pointer",
                padding: "0.25rem",
                borderRadius: "0.375rem",
                transition: "all 0.2s",
                border:
                  imageUrl === activeImage
                    ? "2px solid #3B82F6"
                    : "2px solid transparent",
              }}
            >
              <CustomImageComponent
                src={imageUrl}
                alt={`${product.name} thumbnail ${index + 1}`}
                width={64}
                height={64}
              />
            </div>
          ) : (
            renderDefaultThumbnail(imageUrl, index)
          )
        )}
      </div>
    </div>
  )
}

export default ProductGalleryView
