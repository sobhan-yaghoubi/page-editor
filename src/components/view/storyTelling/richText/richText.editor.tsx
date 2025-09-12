// import React from "react"
// import { Button } from "@/components/ui/button"

// const index = () => {
//   return (
//     <div className="h-[600px] flex items-center justify-center flex-col text-center gap-3">
//       <h1 className="text-6xl font-bold">Rich Text</h1>
//       <p className="max-w-96">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque
//         explicabo eligendi?
//       </p>
//       <Button size="lg">Shop Now</Button>
//     </div>
//   )
// }

// export default index

import React from "react"
import { ComponentProps } from "@/types"

export const RichText = ({ settings, children }: ComponentProps) => {
  const style = {
    padding: settings.padding,
    textAlign: settings.textAlignment as CanvasTextAlign,
    flexFlow: settings.direction === "vertical" ? "column" : "row",
    width: settings.width,
  }

  return (
    <div
      className="flex items-center justify-center text-center gap-3"
      style={style}
    >
      {children}
    </div>
  )
}
