import React from "react"

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>HEADER</p>
      {children}
    </div>
  )
}

export { Header }
