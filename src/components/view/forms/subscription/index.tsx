// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { MoveRightIcon } from "lucide-react"
// import React from "react"

// const index = () => {
//   return (
//     <div className="flex items-center justify-center flex-col gap-3 text-center py-16">
//       <h2 className="text-5xl font-bold">Subscribe to our emails</h2>
//       <p>Be the first to know about new collections and special offers. </p>
//       <div className="flex items-center gap-1">
//         <Input placeholder="Email-Address"/>
//         <Button size="default">
//           <MoveRightIcon />
//         </Button>
//       </div>
//     </div>
//   )
// }

// export default index

import React from "react"
import { Input } from "@/components/ui/input"
import { MoveRightIcon } from "lucide-react"
import { Button as UIButton } from "@/components/ui/button"
import { ComponentProps } from "@/types"

export const SubscriptionForm = ({ settings, children }: ComponentProps) => {
  const style = {
    backgroundColor: settings.backgroundColor,
  }

  return (
    <div
      className="flex items-center justify-center flex-col gap-3 text-center py-16"
      style={style}
    >
      {children}
      <div className="flex items-center gap-1">
        <Input placeholder={settings.placeholder || "Enter your email"} />
        <UIButton size="default">
          <MoveRightIcon />
        </UIButton>
      </div>
    </div>
  )
}
