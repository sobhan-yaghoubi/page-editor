"use client"

import React, { createContext, useContext } from "react"
import { Product, ProductActions } from "../types/product"

interface ProductContextValue {
  product: Product | null
  actions: ProductActions | null
}

const ProductContext = createContext<ProductContextValue>({
  product: null,
  actions: null,
})

/**
 * The Provider component, exported from your package.
 * The application will wrap its product page with this.
 */
export const ProductProvider = ({
  product,
  actions,
  children,
}: {
  product: Product
  actions: ProductActions
  children: React.ReactNode
}) => {
  return (
    <ProductContext.Provider value={{ product, actions }}>
      {children}
    </ProductContext.Provider>
  )
}

/**
 * The hook that components inside the package will use to access the data and actions.
 */
export const useProduct = (): ProductContextValue => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}
