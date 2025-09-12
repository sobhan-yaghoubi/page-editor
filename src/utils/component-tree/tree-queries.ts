import { ComponentData } from "@/types"

/**
 * Recursively finds a component, its parent object, and its index within the parent's children array
 * This is the primary search utility for the editor
 */
export function findComponentMeta(
  components: ComponentData[],
  componentId: string,
  parent: ComponentData | null = null
): {
  component: ComponentData
  parent: ComponentData | null
  index: number
} | null {
  for (let i = 0; i < components.length; i++) {
    const component = components[i]
    if (component.id === componentId) {
      return { component, parent, index: i }
    }
    if (component.children) {
      const found = findComponentMeta(
        component.children,
        componentId,
        component
      )
      if (found) return found
    }
  }
  return null
}
