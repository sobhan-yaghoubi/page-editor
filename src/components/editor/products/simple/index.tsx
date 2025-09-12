// import Image from "next/image"
// import React from "react"

// const products = [
//   {
//     id: "1",
//     name: "lorem ipsum",
//     src: "/t-shirt-1.svg",
//     price: "140",
//   },
//   {
//     id: "2",
//     name: "lorem ipsum",
//     src: "/t-shirt-2.svg",
//     price: "10",
//   },
//   {
//     id: "3",
//     name: "lorem ipsum",
//     src: "/t-shirt-3.svg",
//     price: "90",
//   },
//   {
//     id: "4",
//     name: "lorem ipsum",
//     src: "/t-shirt-1.svg",
//     price: "200",
//   },
// ]

// const index = () => {
//   return (
//     <div className="px-8 py-12">
//       <h2 className="text-2xl font-bold mb-8">Product List Title</h2>
//       <ul className="grid grid-cols-4 gap-3 md:grid-cols-3">
//         {products.map((product) => (
//           <ProductCardSimple key={product.id} {...product} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// const ProductCardSimple = ({
//   src,
//   name,
//   price,
// }: {
//   src: string
//   name: string
//   price: string
// }) => {
//   return (
//    <div className="rounded-md overflow-hidden">
//      <Image src={src} width={500} height={500} alt="" />
//      <p className="my-2 text-lg">{name}</p>
//      <p>{price} $</p>
//    </div>
//   )
// }

// export default index

import React from "react"
import { ComponentProps } from "@/types"

export const ProductFeatures = ({ settings, children }: ComponentProps) => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">
        {settings.title || "Product List Title"}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {children}
      </ul>
    </div>
  )
}

export const FeatureItem = ({ settings, children }: ComponentProps) => {
  return <div className="">hello{children}</div>
}
