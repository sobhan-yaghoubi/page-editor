import uuid from "@/lib/uuid"
import { COMPONENTS_SCHEMAS } from "@/schemas/shared/blocks"
import {
  ActionDefinition,
  ComponentData,
  ComponentType,
  PageSchema,
  SettingsDefinition,
} from "@/types"

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

  const settings = schema.defaultSettings.reduce(
    (acc, setting: SettingsDefinition) => {
      acc[setting.key] = setting.defaultValue
      return acc
    },
    {} as Record<string, any>
  )

  const action: ActionDefinition | undefined = schema.action

  const newComponent: ComponentData = {
    id: uuid(),
    type: componentType,
    settings,
    children: [],
    action,
  }

  return newComponent
}

/**
 * Generates the initial ComponentData[] tree for a page that uses a "fixed" schema.
 * It automatically creates the pre-defined sections and their slotted children.
 *
 * @param pageSchema The schema for the fixed page (e.g., PAGE_SCHEMAS[Layouts.PRODUCT]).
 * @returns An array of ComponentData representing the initial page structure.
 */
export function createDataFromFixedSchema(
  pageSchema: PageSchema
): ComponentData[] {
  if (pageSchema.type !== "fixed" || !pageSchema.allowedSections) {
    console.warn(
      "Attempted to create data from a non-fixed or undefined schema."
    )
    return []
  }

  return pageSchema.allowedSections
    .map((sectionRule) => {
      const sectionType: ComponentType =
        typeof sectionRule === "object" ? sectionRule.type : sectionRule

      const sectionSchema = COMPONENTS_SCHEMAS[sectionType]

      const sectionData = createNewComponent(sectionType)
      if (!sectionData) return null

      if (sectionSchema?.slots) {
        sectionData.children = Object.entries(sectionSchema.slots)
          .map(([slotName, slotDef]) => {
            const childData = createNewComponent(slotDef.component)
            if (!childData) return null
            childData.slotName = slotName
            return childData
          })
          .filter((child): child is ComponentData => Boolean(child))
      }

      return sectionData
    })
    .filter((child): child is ComponentData => Boolean(child))
}
