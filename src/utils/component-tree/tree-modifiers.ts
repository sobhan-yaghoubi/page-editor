import uuid from "@/lib/uuid"
import { COMPONENTS_SCHEMAS } from "@/schema/blocks"
import { ComponentData, ComponentType } from "@/types"

/**
 * Recursively removes a component from the tree by its ID
 */
export function removeComponent(
  components: ComponentData[],
  componentId: string
): ComponentData[] {
  return components
    .filter((component) => component.id !== componentId)
    .map((component) => {
      if (component.children && component.children.length > 0) {
        return {
          ...component,

          children: removeComponent(component.children, componentId),
        }
      }

      return component
    })
}

/**
 * Recursively finds a component by ID and immutably merges new settings into it
 */
export function getTreeWithUpdatedSettings(
  components: ComponentData[],
  componentId: string,
  newSettings: Record<string, any>
): ComponentData[] {
  return components.map((component) => {
    if (component.id === componentId) {
      return {
        ...component,
        settings: {
          ...component.settings,
          ...newSettings,
        },
      }
    }

    if (component.children && component.children.length > 0) {
      return {
        ...component,
        children: getTreeWithUpdatedSettings(
          component.children,
          componentId,
          newSettings
        ),
      }
    }

    return component
  })
}

/**
 * Recursively finds a component and merges properties into its top level
 */
export function updateComponentProps(
  components: ComponentData[],
  componentId: string,
  newProps: Partial<ComponentData>
): ComponentData[] {
  return components.map((component) => {
    if (component.id === componentId) {
      return { ...component, ...newProps }
    }
    if (component.children && component.children.length > 0) {
      return {
        ...component,
        children: updateComponentProps(
          component.children,
          componentId,
          newProps
        ),
      }
    }
    return component
  })
}

/**
 * Recursively adds a new component to a parent (or the root) at a specific index
 */
export function addComponentAtIndex(
  components: ComponentData[],
  newComponent: ComponentData,
  parentId: string | null,
  index: number
): ComponentData[] {
  if (parentId === null) {
    const newRoot = [...components]
    newRoot.splice(index, 0, newComponent)
    return newRoot
  }

  return components.map((component) => {
    if (component.id === parentId) {
      const newChildren = component.children ? [...component.children] : []
      newChildren.splice(index, 0, newComponent)
      return {
        ...component,
        children: newChildren,
      }
    }

    if (component.children && component.children.length > 0) {
      return {
        ...component,
        children: addComponentAtIndex(
          component.children,
          newComponent,
          parentId,
          index
        ),
      }
    }

    return component
  })
}

/**
 * Creates a new component instance based on its schema, populating default settings
 */
export const createNewComponent = (componentType: ComponentType) => {
  const schema = COMPONENTS_SCHEMAS[componentType]
  if (!schema) return null

  const settings = schema.defaultSettings.reduce((acc, setting) => {
    acc[setting.key] = setting.defaultValue
    return acc
  }, {} as Record<string, any>)

  return {
    id: uuid(),
    type: componentType,
    settings,
    children: [],
  }
}
