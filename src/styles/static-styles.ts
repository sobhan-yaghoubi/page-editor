import baseCSS from "@/styles/definitions/base.styles.css?raw"
import brandCSS from "@/styles/definitions/brand.styles.css?raw"
import buttonCSS from "@/styles/definitions/button.styles.css?raw"
import carouselCSS from "@/styles/definitions/carousel.styles.css?raw"
import groupCSS from "@/styles/definitions/group.styles.css?raw"
import productCardCSS from "@/styles/definitions/productCard.styles.css?raw"
import blogCSS from "@/styles/definitions/blog.styles.css?raw"
import commentCss from "@/styles/definitions/comment.styles.css?raw"
import gridCss from "@/styles/definitions/grid.styles.css?raw"
import productCss from "@/styles/definitions/product.styles.css?raw"

export const staticStyles = {
  base: baseCSS,
  brand: brandCSS,
  button: buttonCSS,
  carousel: carouselCSS,
  group: groupCSS,
  productCard: productCardCSS,
  comment: commentCss,
  blog: blogCSS,
  grid: gridCss,
  product : productCss
}

/**
 * Combine all static styles into a single CSS string
 */
export function getAllStaticStyles(): string {
  return Object.values(staticStyles).join("\n\n")
}

export function getAllStaticStylesWithCustomQueries(queryName: string): string {
  const styles = Object.values(staticStyles).map((css) => {
    return css.replace(/@media\s+([^{]+)/g, `@${queryName} $1`)
  })
  return styles.join("\n\n")
}

/**
 * Get a specific static style by key
 */
export function getStaticStyle(key: keyof typeof staticStyles): string {
  return staticStyles[key]
}
