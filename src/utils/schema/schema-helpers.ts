import { COMPONENTS_SCHEMAS } from "@/schemas/shared/blocks"
import { GLOBAL_SCHEMAS } from "@/schemas/shared/global"
import { PAGE_SCHEMAS } from "@/schemas/shared/pages"
import {
  ComponentData,
  ComponentSchema,
  SettingCondition,
  SettingSimpleCondition,
} from "@/types"

function getAllowedTypesFromSchema(
  parentType: string
): (string | { type: string; max?: number })[] | "*" | undefined {
  const pageSchema = PAGE_SCHEMAS[parentType]
  if (pageSchema?.allowedSections) return pageSchema.allowedSections

  const globalSchema = GLOBAL_SCHEMAS[parentType]
  if (globalSchema?.allowedSections) return globalSchema.allowedSections

  const componentSchema = COMPONENTS_SCHEMAS[parentType]
  if (componentSchema?.allowedChildren) return componentSchema.allowedChildren

  return undefined
}

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

export function evaluateCondition(
  condition: SettingCondition | undefined,
  currentSetting: Record<string, any>
): boolean {
  if (!condition) return true

  if ("AND" in condition) {
    return condition.AND.every((subCondition) =>
      evaluateCondition(subCondition, currentSetting)
    )
  }

  if ("OR" in condition) {
    return condition.OR.every((subCondition) =>
      evaluateCondition(subCondition, currentSetting)
    )
  }

  const simpleCondition = condition as SettingSimpleCondition
  const dependentValue = currentSetting[simpleCondition.key]
  const conditionValue = simpleCondition.value

  switch (simpleCondition.operator) {
    case "notEqual":
      return dependentValue !== conditionValue

    case "greaterThan":
      return Number(dependentValue) > Number(conditionValue)

    case "lessThan":
      return Number(dependentValue) < Number(conditionValue)

    case "equals":
    default:
      return dependentValue === conditionValue
  }
}
