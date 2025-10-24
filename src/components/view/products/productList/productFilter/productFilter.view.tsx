import { SlidersHorizontalIcon } from "lucide-react"

export const ProductFiltersView = () => {
  const containerStyle: React.CSSProperties = {
    padding: "2rem",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#6b7280",
    backgroundColor: "#f9fafb",
    transition: "border-color 0.2s",
  }

  return (
    <div style={containerStyle}>
      <SlidersHorizontalIcon size={32} style={{ marginBottom: "0.5rem" }} />
      <p style={{ fontWeight: 600, fontSize: "1.125rem" }}>Product Filters</p>
      <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
        (Filters will be displayed here on the live store)
      </p>
    </div>
  )
}
