"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { HeaderSettings } from "@/schemas/components"
import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react"
import { Image } from "@/components/common/image"

const SearchMock = () => (
  <div
    className="search-header"
    style={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #e5e7eb",
      borderRadius: "999px",
      padding: "0.5rem 1rem",
      color: "#9ca3af",
      backgroundColor: "#fff",
      cursor: "pointer",
    }}
  >
    <SearchIcon size={18} />
    <span style={{ marginLeft: "0.5rem" }}>Search...</span>
  </div>
)
const UserProfileMock = () => (
  <div style={{ padding: "0.5rem", cursor: "pointer" }}>
    <UserIcon size={24} color="#374151" />
  </div>
)
const CartIconMock = () => (
  <div style={{ position: "relative", padding: "0.5rem", cursor: "pointer" }}>
    <ShoppingCartIcon size={24} color="#374151" />
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
const LogoPlaceholderMock = () => (
  <div
    style={{
      border: "2px dashed #9ca3af",
      padding: "0.5rem 1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
    }}
  >
    <span
      style={{ fontWeight: "bold", color: "#6b7280", letterSpacing: "0.1em" }}
    >
      LOGO
    </span>
  </div>
)
const NavigationMenu = ({ items }: { items: HeaderSettings["navigation"] }) => (
  <nav
    style={{
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      height: "100%",
    }}
  >
    {items.map((item) => (
      <span
        key={item["menu-item-text"]}
        style={{ color: "#374151", fontWeight: 500, cursor: "pointer" }}
      >
        {item["menu-item-text"]}
      </span>
    ))}
  </nav>
)

const HeaderEditor = ({ settings }: ComponentProps<HeaderSettings>) => {
  const {
    paddingHorizontal,
    gap,
    backgroundColor,
    "logo-url": logoUrl,
    navigation,
  } = settings

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `1rem ${paddingHorizontal || 24}px`,
    backgroundColor: backgroundColor || "transparent",
    gap: `${gap || 16}px`,
    width: "100%",
    minHeight: "80px",
    boxSizing: "border-box",
  }
  const actionsStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  }

  const hasNavItems = navigation && navigation.length > 0

  return (
    <header style={headerStyle}>
      <style>{`
      @media (max-width: 767px) {
  .search-header{
  display: none;
  }
}

@container (max-width: 767px) {
  .search-header{
  display: none;
  }
}
      `}</style>
      <div
        style={{ display: "flex", alignItems: "center", pointerEvents: "none" }}
      >
        {logoUrl ? (
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "50px",
              display: "flex",
              objectFit: "contain",
            }}
          >
            <Image
              id="header-logo"
              settings={{
                src: logoUrl,
                alt: "Site Logo",
                width: 150,
                height: 50,
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <LogoPlaceholderMock />
        )}
      </div>

      <div style={{ pointerEvents: "none" }}>
        {hasNavItems ? <NavigationMenu items={navigation} /> : null}
      </div>

      <div style={actionsStyle}>
        <SearchMock />
        <UserProfileMock />
        <CartIconMock />
      </div>
    </header>
  )
}

export default HeaderEditor
