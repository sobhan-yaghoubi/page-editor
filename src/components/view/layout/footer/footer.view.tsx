import { ComponentProps } from "@/types"
import React from "react"

const Footer = ({ children }: ComponentProps) => {
  return (
    <div>
      <p>FOOTER</p>
      {children}
    </div>
  )
}

export { Footer }
