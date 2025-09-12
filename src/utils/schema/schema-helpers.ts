import { COMPONENTS_SCHEMAS } from "@/schema/blocks"
import { GLOBAL_SCHEMAS } from "@/schema/global"
import { PAGE_SCHEMAS } from "@/schema/pages"
import { ComponentData, ComponentSchema } from "@/types"

/**
 * Gets the list of available components that can be added to a parent
 */
export function getAvailableComponents(
  parentType: string,
  currentChildren: ComponentData[]
): ComponentSchema[] {
  let rules: (string | { type: string; max?: number })[] | "*" | undefined
  let componentSchema: ComponentSchema | undefined

  const pageSchema = PAGE_SCHEMAS[parentType]
  if (pageSchema?.allowedSections) {
    rules = pageSchema.allowedSections
  } else {
    const globalSchema = GLOBAL_SCHEMAS[parentType]
    if (globalSchema?.allowedSections) {
      rules = globalSchema.allowedSections
    } else {
      componentSchema = COMPONENTS_SCHEMAS[parentType]
      if (componentSchema?.allowedChildren) {
        rules = componentSchema.allowedChildren
      }
    }
  }

  if (typeof rules === "string" && rules === "*") {
    const disallowed = componentSchema?.disallowedChildren ?? []

    const allowed = Object.values(COMPONENTS_SCHEMAS).filter(
      (componentSchema) => !disallowed.includes(componentSchema.type)
    )

    return allowed
  }

  if (!rules) return []

  const availableRules = rules.filter((rule) => {
    const ruleType = typeof rule === "string" ? rules : rule.type
    const max = typeof rule === "string" ? Infinity : rule.max ?? Infinity

    const count = currentChildren.filter(
      (child) => child.type === ruleType
    ).length

    return count < max
  })

  return availableRules
    .map((rule) => {
      const type = typeof rule === "string" ? rule : rule.type
      return COMPONENTS_SCHEMAS[type]
    })
    .filter((schema): schema is ComponentSchema => !!schema)
}

/**
 * Gets the visibility rules for the header/footer based on a page's schema
 */
export function getPageHeaderFooterSupport(pageNameSchema: string): {
  header: boolean
  footer: boolean
} {
  const selectedPageSchema = PAGE_SCHEMAS[pageNameSchema]
  if (!selectedPageSchema) {
    return { header: false, footer: false }
  }

  return {
    header: !!selectedPageSchema.canHaveHeader,
    footer: !!selectedPageSchema.canHaveFooter,
  }
}

/**
 * Basic validation to check if a component can be dropped on a target.
 */
export function isMoveValid(draggedType: string, targetType: string): boolean {
  const draggedSchema = COMPONENTS_SCHEMAS[draggedType]
  const targetSchema = COMPONENTS_SCHEMAS[targetType]

  if (!draggedSchema || !targetSchema) return false

  const parentApproval =
    targetSchema.allowedChildren === "*" ||
    (Array.isArray(targetSchema.allowedChildren) &&
      targetSchema.allowedChildren.some((children) => children === draggedType))

  const childApproval =
    draggedSchema.allowedParents === "*" ||
    (Array.isArray(draggedSchema.allowedParents) &&
      draggedSchema.allowedParents.some((parent) => parent === targetType))

  return parentApproval && childApproval
}
