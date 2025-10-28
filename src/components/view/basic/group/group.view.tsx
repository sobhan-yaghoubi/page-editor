import React, { CSSProperties } from "react"
import { ComponentProps, Override } from "@/types"
import { GroupSettings } from "@/schemas/components/basic/group/group.schema"

const GroupView = ({
  settings,
  children,
}: Override<ComponentProps, "settings", GroupSettings>) => {
  const {
    "group-direction": direction = "horizontal",
    "group-direction-vertical-on-mobile": verticalOnMobile = false,
    "group-direction-reverse-vertical-on-mobile":
      reverseVerticalOnMobile = false,
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

  const childCount = React.Children.count(children)

  const getAlignItems = () => {
    if (direction === "horizontal") {
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

  const getJustifyContent = () => {
    if (direction === "horizontal") {
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

  const getWidth = (isDesktop: boolean) => {
    const currentWidth = isDesktop ? width : mobileWidth
    const currentCustom = isDesktop ? widthCustom : mobileWidthCustom

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

  const style: CSSProperties = {
    ["--group-flex-direction" as any]:
      direction === "vertical" ? "column" : "row",
    ["--group-align-items" as any]: getAlignItems(),
    ["--group-justify-content" as any]: getJustifyContent(),
    ["--group-gap" as any]: `${gap}px`,
    ["--group-width" as any]: getWidth(true),
    ["--group-height" as any]: getHeight(),
    ["--group-padding-top" as any]:
      paddingTop !== undefined ? `${paddingTop}px` : undefined,
    ["--group-padding-bottom" as any]:
      paddingBottom !== undefined ? `${paddingBottom}px` : undefined,
    ["--group-padding-left" as any]:
      paddingLeft !== undefined ? `${paddingLeft}px` : undefined,
    ["--group-padding-right" as any]:
      paddingRight !== undefined ? `${paddingRight}px` : undefined,
    ["--group-border-radius" as any]: `${cornerRadius}px`,
    ["--group-border" as any]:
      border === "solid"
        ? `${borderThickness}px solid rgba(0, 0, 0, ${borderOpacity / 100})`
        : "none",
    ["--group-cols" as any]: childCount === 2 ? "2" : undefined,
    ["--group-mobile-flex-direction" as any]:
      verticalOnMobile && direction === "horizontal" ? "column" : undefined,
    ["--group-mobile-width" as any]: getWidth(false),
    ["--reverse-column-on-mobile" as any]: reverseVerticalOnMobile
      ? "column-reverse"
      : "unset",
  }

  return (
    <div className="group-component" style={style}>
      {children}
    </div>
  )
}

export default GroupView
