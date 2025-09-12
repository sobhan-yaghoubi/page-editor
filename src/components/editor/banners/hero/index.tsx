// import React from "react"
// import { Button } from "@/components/ui/button"

// const index = () => {
//   return (
//     <div
//       className="h-[600px] flex items-center justify-center flex-col text-center text-white gap-3"
//       style={{
//         backgroundImage: `url(/background.svg)`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundColor: "rgba(0,0,0,0.6)",
//         backgroundBlendMode: "multiply",
//       }}
//     >
//       <h1 className="text-6xl font-bold">New arrivals</h1>
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

export const HeroSection = ({ settings, children }: ComponentProps) => {
  const style = {
    backgroundColor: settings.backgroundColor,
    textAlign: settings.textAlignment as CanvasTextAlign,
  }

  return (
    <section
      className="h-[600px] flex items-center justify-center flex-col text-center gap-3"
      style={style}
    >
      {children}
    </section>
  )
}
