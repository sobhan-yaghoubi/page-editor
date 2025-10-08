import { CSSProperties } from "react"
import { ComponentProps, Override } from "@/types"
import { GroupSettings } from "@/schemas/components/basic/group/group.schema"

const GroupView = ({
  settings,
  children,
}: Override<ComponentProps, "settings", GroupSettings>) => {
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

  const baseStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    alignItems: getAlignItems(),
    justifyContent: getJustifyContent(),
    gap: `${gap}px`,
    width: getWidth(true),
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
  }

  const mobileStyle: CSSProperties = {
    flexDirection:
      verticalOnMobile && direction === "horizontal" ? "column" : undefined,
    width: getWidth(false),
  }

  return (
    <>
      <style>
        {`
          .group-component {
            ${Object.entries(baseStyle)
              .filter(([_, v]) => v !== undefined)
              .map(([k, v]) => {
                const cssKey = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
                return `${cssKey}: ${v};`
              })
              .join("\n            ")}
          }

          @media (max-width: 768px) {
            .group-component {
              ${Object.entries(mobileStyle)
                .filter(([_, v]) => v !== undefined)
                .map(([k, v]) => {
                  const cssKey = k.replace(
                    /[A-Z]/g,
                    (m) => `-${m.toLowerCase()}`
                  )
                  return `${cssKey}: ${v};`
                })
                .join("\n              ")}
            }
          }
        `}
      </style>
      <div className="group-component">{children}</div>
    </>
  )
}

export default GroupView
