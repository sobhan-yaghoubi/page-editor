"use client"

import { ComponentProps } from "@/types"
import { SearchIcon, ShoppingCartIcon } from "lucide-react"
import { AppComponents } from "@/schemas/shared/enums"

const Placeholder = () => (
  <div
    style={{
      width: "100%",
      padding: "2rem",
      border: "2px dashed #9ca3af",
      borderRadius: "0.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#6b7280",
    }}
  >
    <p style={{ fontWeight: 600 }}>Application Component</p>
    <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
      Select a component to render from the settings panel.
    </p>
  </div>
)

const SearchBarMock = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "999px",
      padding: "0.5rem 1rem",
      color: "#999",
    }}
  >
    <SearchIcon size={18} />
    <span style={{ marginLeft: "0.5rem" }}>Search...</span>
  </div>
)

const CartIconMock = () => (
  <div style={{ position: "relative", padding: "0.5rem" }}>
    <ShoppingCartIcon size={24} />
    <span
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        background: "red",
        color: "white",
        borderRadius: "50%",
        fontSize: "10px",
        width: "16px",
        height: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      3
    </span>
  </div>
)

const CartSummery = () => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        border: "1px solid var(--background)",
      }}
    >
      CART SUMMERY
    </div>
  )
}

export const AppComponentSlotEditor = ({ settings }: ComponentProps) => {
  const { componentId } = settings

  switch (componentId) {
    case AppComponents.HEADER_SEARCH_BAR:
      return <SearchBarMock />

    case AppComponents.HEADER_CART_ICON:
      return <CartIconMock />

    case AppComponents.CART_SUMMARY:
      return <CartSummery />

    default:
      return <Placeholder />
  }
}
