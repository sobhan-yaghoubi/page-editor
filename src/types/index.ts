import { ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"
import {
  BasicBlocks,
  Layouts,
  ModuleUI,
  ProductBlocks,
  Sections,
  TemplateUI,
} from "@/schemas/shared/enums"

/**
 * Represents all possible types of a renderable component.
 * Combines all editor-supported component categories into a single union.
 * Used by: ComponentData, ComponentSchema, SlotDefinition, PageSchema
 *
 * @type ComponentType
 */
export type ComponentType =
  | Sections
  | BasicBlocks
  | ProductBlocks
  | ModuleUI
  | TemplateUI

/**
 * Represents all possible parents a component can have.
 * A parent can be another component or a document root (layout).
 * Used by: ComponentSchema.allowedParents, PageSchema.type
 *
 * @type ParentType
 */
export type ParentType = ComponentType | Layouts

/**
 * Defines the structure of an action that a component can trigger in the view/runtime.
 *
 * @type ActionDefinition
 * @property { string } type - Action identifier (e.g., "navigate", "openModal").
 * @property { Record<string, any> } payload - Arbitrary data the action handler needs.
 */
export interface ActionDefinition {
  type: string
  payload: Record<string, any>
}

/**
 * Core, serializable data for a single component instance within a page layout.
 * This is what is persisted to the database.
 *
 * @type ComponentData
 * @property { string } id - Unique instance ID.
 * @property { ComponentType } type - The component's type.
 * @property { TSetting } settings - Concrete, resolved settings for rendering.
 * @property { ComponentData<any>[] } children - Nested component instances (tree structure).
 * @property { boolean } isHidden - If true, component is not rendered.
 * @property { string } slotName - Slot identifier within its parent (if applicable).
 * @property { ActionDefinition } action - Optional action attached to this component instance.
 */
export interface ComponentData<TSetting = Record<string, any>> {
  id: string
  type: ComponentType
  settings: TSetting
  children?: ComponentData<any>[]
  isHidden?: boolean
  slotName?: string
  action?: ActionDefinition
}

/**
 * Represents a full page document (e.g., Homepage, Product, etc).
 *
 * @type PageData
 * @property { string } id - Page identifier.
 * @property { string } name - UI readable name.
 * @property { string } pageType - Page type/route key in the host app.
 * @property { ComponentData<any>[] } components - Top-level component tree.
 * @property { boolean } isHeaderVisible - Whether a header should be rendered.
 * @property { boolean } isFooterVisible - Whether a footer should be rendered.
 */
export interface PageData {
  id: string
  name: string
  pageType: string
  components: ComponentData<any>[]
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
}

/**
 * data structure for any document handled by the editor
 * (a page, the global header, or the global footer).
 * This is the public API contract: consuming apps must map their data to this shape.
 *
 * @type DocumentData
 * @property { string | number } id - Document identifier.
 * @property { string } name - UI readable name.
 * @property { string } type - Type of the page extra helper for detect Page Schemas
 * @property { string } segment - Segment or route key (e.g., "header", "footer", "home", etc).
 * @property { ComponentData<any>[] } components - Top-level component tree.
 * @property { boolean } isHeaderVisible - Whether a header should be rendered for this doc.
 * @property { boolean } isFooterVisible - Whether a footer should be rendered for this doc.
 */
export interface DocumentData {
  id: string | number
  name: string
  segment: string
  type: string
  components: ComponentData<any>[]
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
}

/**
 * In-memory, editable version of a document within the editor.
 * Can be a page, the global header, or the global footer. null means nothing loaded.
 *
 * @type { DocumentData | null } EditorDocument
 */
export type EditorDocument = DocumentData | null

/**
 * Defines how a component may be rendered inside a named parent slot.
 *
 * @type SlotDefinition
 * @property { ComponentType } component - Allowed child component type.
 * @property { SettingsDefinition[] } settings - Settings applied when used in this slot.
 * @property { boolean } isLocked - If true, slot contents are not draggable/deletable.
 * @property { ActionDefinition } action - Optional default action for the slotted component.
 */
export interface SlotDefinition {
  component: ComponentType
  settings?: SettingsDefinition[]
  isLocked?: boolean
  action?: ActionDefinition
}

export type DefaultChild = {
  type: ComponentType
  settings?: Record<string, any>
  children?: DefaultChild[]
}

/**
 * Master schema for a single component: rules, settings, and editor behavior.
 *
 * @type ComponentSchema
 * @property { ComponentType } type - component type.
 * @property { string } label - UI readable label in the editor.
 * @property { ForwardRefExoticComponent<Omit<LucideProps,"ref">&RefAttributes<SVGSVGElement>> } icon - Optional Lucide icon component.
 * @property { "section" | "block" } category - High-level grouping in the editor.
 * @property { boolean } isDraggable - Whether instances can be dragged.
 * @property { boolean } isDeletable - Whether instances can be deleted.
 * @property { boolean } isHidable - Whether instances can be toggled hidden.
 * @property { ParentType[] | "*" } allowedParents - Valid parent types or "*" for any.
 * @property { (ComponentType | { type: ComponentType, max?: number })[] | "*" } allowedChildren - Valid child types or "*" for any; supports per-type max counts.
 * @property { ComponentType[] } disallowedChildren - Explicitly forbidden child types.
 * @property { DefaultChild[] } defaultChildren - Pre-populated Layout
 * @property { boolean } isSelfNestingAllowed - For a "Element" that can be nested inside another "Element"
 * @property { ReadonlyArray<SettingsDefinition> } defaultSettings - Default settings schema for new instances.
 * @property { Record<string, SlotDefinition>= } slots - Named slots and their constraints.
 * @property { Record<string, any>= } metadata - Free-form component metadata.
 * @property { ActionDefinition= } action - Optional default action for new instances.
 */
export interface ComponentSchema {
  type: ComponentType
  label: string
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
  category: "section" | "block"
  isDraggable: boolean
  isDeletable?: boolean
  isHidable?: boolean
  allowedParents: ParentType[] | "*"
  allowedChildren:
    | (ComponentType | { type: ComponentType; max?: number })[]
    | "*"
  disallowedChildren?: ComponentType[]
  defaultChildren?: DefaultChild[]
  isRepeater?: boolean
  defaultSettings: ReadonlyArray<SettingsDefinition>
  isSelfNestingAllowed?: boolean
  slots?: Record<string, SlotDefinition>
  metadata?: Record<string, any>
  action?: ActionDefinition
}

/**
 * Schema for a page or global document. Defines top-level constraints.
 *
 * @type PageSchema
 * @property { ParentType | "flexible" | "fixed" } type - Document type or layout policy.
 * @property { string } name - UI readable document name.
 * @property { (ComponentType | { type: ComponentType, max?: number })[] } allowedSections - Allowed top-level sections with optional per-type limits.
 * @property { boolean } canHaveHeader - Whether a header is allowed.
 * @property { boolean } canHaveFooter - Whether a footer is allowed.
 */ export interface PageSchema {
  type: ParentType | "flexible" | "fixed"
  name: string
  allowedSections?: (ComponentType | { type: ComponentType; max?: number })[]
  canHaveHeader?: boolean
  canHaveFooter?: boolean
}

/**
 * Props passed to every renderable component in both editor and runtime view.
 *
 * @template TSettings - Concrete settings shape for this component.
 * @template C - Children type (usually React.ReactNode).
 *
 * @type ComponentProps
 * @property { string } id - Instance ID (matches ComponentData.id).
 * @property { TSettings } settings - Resolved settings for rendering.
 * @property { TData } data - the specific shape of the dynamic data payload.
 * @property { C } children - Renderable children.
 * @property { boolean } isSelected - Editor selection hint for styling/UX.
 * @property { ActionDefinition } action - Optional action bound to the instance.
 */
export interface ComponentProps<
  TSettings = Record<string, any>,
  C = React.ReactNode,
  TData = any
> {
  id: string
  settings: TSettings
  children?: C
  data?: TData
  isSelected?: boolean
  action?: ActionDefinition
  renderRepeater?: (
    items: any[],
    template: ComponentData[],
    Wrapper: React.ElementType,
    additionalWrapperProps?: React.HTMLProps<HTMLElement>
  ) => React.ReactNode
}

/**
 * A conditional expression controlling when a setting is shown/enabled.
 * Supports simple, AND, and OR conditions.
 *
 * @type SettingCondition
 */
export type SettingCondition =
  | SettingSimpleCondition
  | SettingAndCondition
  | SettingOrCondition

/**
 * A single key/value comparison used in a condition.
 *
 * @type SettingSimpleCondition
 * @property { string } key - Setting key to inspect.
 * @property { string | number | boolean } value - Value to compare against.
 * @property { "equals" | "notEqual" | "greaterThan" | "lessThan" } operator - Comparison operator (defaults to "equals").
 */
export type SettingSimpleCondition = {
  key: string
  value: string | number | boolean
  operator?: "equals" | "notEqual" | "greaterThan" | "lessThan"
}

/**
 * Logical AND of multiple setting conditions.
 *
 * @type SettingAndCondition
 * @property { SettingCondition[] } AND - All child conditions must be true.
 */
export interface SettingAndCondition {
  AND: SettingCondition[]
}

/**
 * Logical OR of multiple setting conditions.
 *
 * @type SettingOrCondition
 * @property { SettingCondition[] } OR - Any child condition may be true.
 */
export interface SettingOrCondition {
  OR: SettingCondition[]
}

/**
 * Base shape of a single editor setting row/field.
 *
 * @type BaseSetting
 * @property { string } key - Unique setting key.
 * @property { string } label - UI readable label.
 * @property { any } defaultValue - Default value when not set.
 * @property { "general" | "mobile" | string } section - Grouping section in the UI.
 * @property { SettingCondition } condition - Controls visibility/enabled state.
 */
interface BaseSetting {
  key: string
  label: string
  defaultValue?: any
  section?: "general" | "mobile" | string
  condition?: SettingCondition
}

/**
 * Textual or media input setting.
 *
 * @type TextSetting
 * @property { "text" | "textarea" | "number" | "color" | "image" | "icon" } type - Input subtype.
 */
type TextSetting = BaseSetting & {
  type: "text" | "textarea" | "number" | "color" | "image" | "icon"
}

/**
 * Boolean toggle setting.
 *
 * @type BooleanSetting
 * @property { "boolean" } type
 */
type BooleanSetting = BaseSetting & { type: "boolean" }

/**
 * Select dropdown with static options.
 *
 * @type SelectSetting
 * @property { "select" } type
 * @property { { label: string, value: string | number, condition?: SettingCondition }[] } options - Available options with optional per-option conditions.
 */
type SelectSetting = BaseSetting & {
  type: "select"
  options: Array<{
    label: string
    value: string | number
    condition?: SettingCondition
  }>
}

/**
 * Grouped choice (e.g., segmented control) with static options.
 *
 * @type GroupSetting
 * @property { "group" } type
 * @property { { label: string, value: string | number }[] } options
 */
type GroupSetting = BaseSetting & {
  type: "group"
  options: Array<{ label: string; value: string | number }>
}

/**
 * Numeric range slider.
 *
 * @type RangeSetting
 * @property { "range" } type
 * @property { number } max
 * @property { number } min
 * @property { number } step
 * @property { string } unit - Optional display unit (e.g., "px", "%", etc).
 */
type RangeSetting = BaseSetting & {
  type: "range"
  max: number
  min: number
  step: number
  unit?: string
}

/**
 * Asynchronous select whose options are populated from a dynamic source.
 *
 * @type DynamicSelect
 * @property { "asyncSelect" } type
 * @property { string } sourceKey - Lookup key to resolve the async source at runtime.
 */
type DynamicSelect = BaseSetting & {
  type: "asyncSelect"
  sourceKey: string
}

/**
 * Hyperlink input.
 * @type LinkSetting
 * @property { "link" } type
 */
type LinkSetting = BaseSetting & { type: "link" }

//TODO: write proper js doc
export type RepeaterField = SettingsDefinition & {
  section?: never
  condition?: never
}

/**
 * A repeater setting for managing an array of objects.
 */
type RepeaterSetting = BaseSetting & {
  type: "repeater"
  itemSchema: RepeaterField[]
}

/**
 * Final discriminated union type for any single editor setting definition.
 *
 * @type SettingsDefinition
 */
export type SettingsDefinition =
  | TextSetting
  | BooleanSetting
  | SelectSetting
  | GroupSetting
  | RangeSetting
  | LinkSetting
  | DynamicSelect
  | RepeaterSetting

/**
 * Helper to extract the value type from a setting's options array.
 * Internal utility. Typically used by mapped types.
 *
 * @template P
 * @type OptionValue
 */
type OptionValue<P> = P extends { options: ReadonlyArray<infer O> }
  ? O extends { value: infer V }
    ? V
    : never
  : never

/**
 * Produces typed settings object from a readonly schema array.
 * Maps each setting's key to its corresponding value type.
 *
 * Example: Use as SettingsFromSchema<typeof defaultSettings>.
 *
 * @template T - A readonly array of objects that include { key: string }.
 * @type SettingsFromSchema
 */
export type SettingsFromSchema<T extends readonly { key: string }[]> = {
  [P in T[number] as P["key"]]: P extends { type: "boolean" }
    ? boolean
    : P extends { type: "range" }
    ? number
    : P extends { type: "select" | "group" }
    ? OptionValue<P>
    : P extends { type: "number" }
    ? number
    : P extends {
        type: "text" | "textarea" | "color" | "image" | "icon" | "link"
      }
    ? string
    : P extends { defaultValue: infer DV }
    ? DV
    : never
}

/**
 * Utility type to override a specific property in an existing type.
 * Merges T with a replacement for property K mapped to type U.
 *
 * @template T - Base type.
 * @template { keyof T } K - Key to override.
 * @template U - Replacement type for K.
 * @type Override
 */
export type Override<T, K extends keyof T, U> = Omit<T, K> & { [P in K]: U }

/**
 * Describes a function that fetches data for a dynamic setting.
 * It must return a promise that resolves to an array of label/value pairs.
 */
export type DataLoader = () => Promise<
  { label: string; value: string | number }[]
>

/**
 * A map of semantic source keys (e.g., 'productCollections') to their
 * corresponding data loader functions. The application will provide this.
 */
export type DataLoaderMap = Record<string, DataLoader>
