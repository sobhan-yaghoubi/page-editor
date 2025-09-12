import React from "react"

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>FOOTER</p>
      {children}
    </div>
  )
}

export { Footer }
