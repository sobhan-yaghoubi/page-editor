"use client"

import React from "react"
import { ComponentProps, Override } from "@/types"
import { toSize } from "@/utils/components"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel"
import { AnnouncementBarSettings } from "@/schemas/components/modules/announcementBar.schema"

type Props = Override<ComponentProps, "settings", AnnouncementBarSettings>

const AnnouncementBarView = ({ settings, children }: Props) => {
  const {
    "duration-timer": duration,
    "announcement-section-width": sectionWidth,
    "divider-thickness": dividerThickness,
    "padding-top": paddingTop,
    "padding-bottom": paddingBottom,
  } = settings

  const childArray = React.Children.toArray(children)
  const hasMultipleChildren = childArray.length > 1

  const sectionStyles: React.CSSProperties = {
    paddingTop: toSize(paddingTop, "px"),
    paddingBottom: toSize(paddingBottom, "px"),
    borderBottom:
      dividerThickness > 0
        ? `${toSize(dividerThickness, "px")} solid #e5e7eb`
        : "none",
    width: "100%",
  }

  const containerStyles: React.CSSProperties = {
    maxWidth: sectionWidth === "page" ? "1280px" : "100%",
    margin: sectionWidth === "page" ? "0 auto" : "0",
  }

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {hasMultipleChildren ? (
          <Carousel
            desktopHeight="auto"
            mobileHeight="auto"
            slideSize="100%"
            autoplay={duration > 0}
            {...(duration && { autoplayDelay: duration * 1000 })}
            options={{ loop: true, align: "start" }}
          >
            <CarouselContent>
              {childArray.map((child, index) => (
                <CarouselItem key={index}>{child}</CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          childArray
        )}
      </div>
    </section>
  )
}

AnnouncementBarView.displayName = "AnnouncementBarView"
export default AnnouncementBarView
