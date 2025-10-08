"use client"

import { CSSProperties, useState, useEffect } from "react"
import { GroupSettings } from "@/schema/component/basic/group.schema"
import { ComponentProps, Override } from "@/types"

const GroupEditor = ({
  settings,
  children,
  onSettingsChange,
}: Override<ComponentProps, "settings", GroupSettings> & {
  onSettingsChange?: (settings: Partial<GroupSettings>) => void
}) => {
  const [isMobilePreview, setIsMobilePreview] = useState(false)

  const {
    "group-direction": direction = "horizontal",
    "group-direction-vertical-on-mobile": verticalOnMobile = false,
    "group-alignment": alignment = "center",
    "group-position": position = "center",
    "group-layout-gap": gap = 14,
    "group-size-width": width = "fill",
    "group-size-width-custom": widthCustom,
    "group-size-mobile-width": mobileWidth = "fill",
    "group-size-mobile-width-custom": mobileWidthCustom,
    "group-size-height": height = "fit",
    "group-size-height-custom": heightCustom,
    "group-appearance-border": border,
    "group-appearance-border-thickness": borderThickness = 1,
    "group-appearance-border-opacity": borderOpacity = 100,
    "group-appearance-": cornerRadius = 0,
    "group-padding-top": paddingTop,
    "group-padding-bottom": paddingBottom,
    "group-padding-left": paddingLeft,
    "group-padding-right": paddingRight,
  } = settings

  // Detect if we're in mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobilePreview(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const getAlignItems = (isInMobileMode: boolean) => {
    const currentDirection =
      isInMobileMode && verticalOnMobile && direction === "horizontal"
        ? "vertical"
        : direction

    if (currentDirection === "horizontal") {
      if (position === "top") return "flex-start"
      if (position === "bottom") return "flex-end"
      if (position === "center") return "center"
      return "stretch"
    } else {
      if (alignment === "left") return "flex-start"
      if (alignment === "right") return "flex-end"
      if (alignment === "center") return "center"
      return "stretch"
    }
  }

  const getJustifyContent = (isInMobileMode: boolean) => {
    const currentDirection =
      isInMobileMode && verticalOnMobile && direction === "horizontal"
        ? "vertical"
        : direction

    if (currentDirection === "horizontal") {
      if (alignment === "left") return "flex-start"
      if (alignment === "right") return "flex-end"
      if (alignment === "center") return "center"
      if (alignment === "space-between") return "space-between"
      return "center"
    } else {
      if (position === "top") return "flex-start"
      if (position === "bottom") return "flex-end"
      if (position === "center") return "center"
      if (position === "space-between") return "space-between"
      return "center"
    }
  }

  const getWidth = (isInMobileMode: boolean) => {
    const currentWidth = isInMobileMode ? mobileWidth : width
    const currentCustom = isInMobileMode ? mobileWidthCustom : widthCustom

    if (currentWidth === "fit") return "fit-content"
    if (currentWidth === "fill") return "100%"
    if (currentWidth === "custom" && currentCustom !== undefined) {
      return `${currentCustom}%`
    }
    return "100%"
  }

  const getHeight = () => {
    if (height === "fit") return "fit-content"
    if (height === "fill") return "100%"
    if (height === "custom" && heightCustom !== undefined) {
      return `${heightCustom}%`
    }
    return "fit-content"
  }

  const getFlexDirection = (isInMobileMode: boolean) => {
    if (isInMobileMode && verticalOnMobile && direction === "horizontal") {
      return "column"
    }
    return direction === "vertical" ? "column" : "row"
  }

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: getFlexDirection(isMobilePreview),
    alignItems: getAlignItems(isMobilePreview),
    justifyContent: getJustifyContent(isMobilePreview),
    gap: `${gap}px`,
    width: getWidth(isMobilePreview),
    height: getHeight(),
    paddingTop: paddingTop !== undefined ? `${paddingTop}px` : undefined,
    paddingBottom:
      paddingBottom !== undefined ? `${paddingBottom}px` : undefined,
    paddingLeft: paddingLeft !== undefined ? `${paddingLeft}px` : undefined,
    paddingRight: paddingRight !== undefined ? `${paddingRight}px` : undefined,
    borderRadius: `${cornerRadius}px`,
    border:
      border === "solid"
        ? `${borderThickness}px solid rgba(0, 0, 0, ${borderOpacity / 100})`
        : "none",
    boxSizing: "border-box",
    position: "relative",
    minHeight: height === "fit" ? "fit-content" : undefined,
    minWidth: width === "fit" ? "fit-content" : undefined,
  }

  return (
    <div style={containerStyle} data-component="group" data-editor-mode="true">
      {children}
    </div>
  )
}

export default GroupEditor
