/**
 * The DATA CONTRACT.
 * Defines the generic shape of a product object.
 */
export interface Product {
  id: string | number
  sku: string
  name: string
  images: string[]
  description: string
  inStock: boolean
  price: number
  currency?: string
  compareAtPrice?: number
}

/**
 * The ACTION PAYLOAD CONTRACT.
 * Defines the shape of the data that will be passed to the action callbacks.
 * The application can decide what data it needs.
 */
export type AddToCartPayload = {
  productSku: string | number
  variantId?: string | number
  quantity: number
  price?: number
  customAttributes?: { key: string; value: string }[]
}

/**
 * The ACTION CALLBACK CONTRACT.
 * Defines the functions that the consuming application MUST provide
 * to make product components interactive.
 */
export interface ProductActions {
  /**
   * The application-provided function to handle adding an item to the cart.
   * @param payload - The data for the item to add.
   * @returns A Promise that resolves when the action is complete.
   */
  onAddToCart: (payload: AddToCartPayload) => Promise<void>
}
