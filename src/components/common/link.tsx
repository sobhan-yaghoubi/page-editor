"use client"
import React from "react"
import { useRenderers } from "@/contexts/RenderContext"

// It just takes an href string now!
export const Link = ({
  href,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const renderers = useRenderers()
  const AppLinkComponent = renderers?.["LINK"]

  if (AppLinkComponent) {
    return (
      <AppLinkComponent href={href} {...rest}>
        {children}
      </AppLinkComponent>
    )
  }

  // Simple fallback
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}
