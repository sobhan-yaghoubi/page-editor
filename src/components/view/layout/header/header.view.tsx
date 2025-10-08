import { ComponentProps } from "@/types"
import React from "react"

const Header = ({ children }: ComponentProps) => {
  return (
    <div>
      <p>HEADER</p>
      {children}
    </div>
  )
}

export { Header }
