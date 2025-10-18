"use client"

import React from "react"
import { ComponentProps } from "@/types"
import { HeaderSettings } from "@/schemas/components"

export const HeaderEditor = ({
  settings,
  children,
}: ComponentProps<HeaderSettings>) => {
  const { layout = "spaceBetween", backgroundColor = "transparent" } = settings

  const justifyContentMap = {
    spaceBetween: "space-between",
    center: "center",
    left: "flex-start",
  }

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: justifyContentMap[layout] || "space-between",
    padding: "1rem 2rem",
    backgroundColor: backgroundColor,
    gap: "1rem",
    border: "1px dashed #ccc",
  }

  return <header style={headerStyle}>{children}</header>
}
