declare module "*.css?raw" {
  const content: string
  export default content
}

declare module "*.css" {
  const content: string
  export default content
}

// Specific declarations for your style files
declare module "@/styles/definitions/carousel.styles.css" {
  const content: string
  export default content
}

declare module "@/styles/definitions/button.styles.css" {
  const content: string
  export default content
}

declare module "@/styles/definitions/base.styles.css" {
  const content: string
  export default content
}

declare module "@/styles/definitions/productCard.styles.css" {
  const content: string
  export default content
}

declare module "@/styles/definitions/brand.styles.css" {
  const content: string
  export default content
}

declare module "@/styles/definitions/group.styles.css" {
  const content: string
  export default content
}
