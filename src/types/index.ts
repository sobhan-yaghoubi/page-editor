import { ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"
import { BasicBlocks, Layouts, ProductBlocks, Sections } from "@/schema/enums"

/** Represents all possible types of a renderable components */
export type ComponentType = Sections | BasicBlocks | ProductBlocks

/** Represents all possible parents a component can have (components or document roots) */
export type ParentType = ComponentType | Layouts

/** Defines the structure of a component's action for the view */
export interface ActionDefinition {
  type: string
  payload: Record<string, any>
}

/**
 * Represents the data for a single component instance within a page layout
 * This is the core data structure that gets serialized to the DB
 */
export interface ComponentData {
  id: string
  type: ComponentType
  settings: Record<string, any>
  children?: ComponentData[]
  isHidden?: boolean
  slotName?: string
  action?: ActionDefinition
}

/**
 * Represents the data for an entire page document (Homepage, Contact Page and etc)
 */
export interface PageData {
  id: string
  name: string
  pageType: string
  components: ComponentData[]
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
}

/**
 * The canonical data structure for any document the editor can handle
 * (a page, the global header, or the global footer)
 *
 * This is the public "API Contract" of the package. Any consuming
 * application must map its data to this shape before passing it to the editor.
 */
export interface DocumentData {
  id: string | number
  name: string
  segment: string
  components: ComponentData[]
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
}

/**
 * Represents the in-memory, editable version of a document within the editor
 *
 * This object could be a page, the global header, or the global footer
 *
 * It is the canonical data structure that the editor's state and utility
 */
export type EditorDocument = DocumentData | null

/** Defines the structure of a component rendered in a parent's slot */
export interface SlotDefinition {
  component: ComponentType
  settings?: SettingsDefinition[]
  isLocked?: boolean
  action?: ActionDefinition
}

/**
 * The master schema for a single component Defines its rules, settings,
 * and behavior within the editor
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
  defaultSettings: SettingsDefinition[]
  slots?: Record<string, SlotDefinition>
  metadata?: Record<string, any>
  action?: ActionDefinition
}

/** The schema for a page or global document. Defines its top-level rules */
export interface PageSchema {
  type: ParentType | "flexible" | "fixed"
  name: string
  allowedSections?: (ComponentType | { type: ComponentType; max?: number })[]
  canHaveHeader?: boolean
  canHaveFooter?: boolean
}

/**
 * The props passed to every renderable component on both the editor and view
 */
export interface ComponentProps {
  id: string
  settings: ComponentData["settings"]
  children?: React.ReactNode
  isSelected?: boolean
  action?: ActionDefinition
}

/** The type definition for a single setting in the editor's panel */

interface BaseSetting {
  key: string
  label: string
  defaultValue?: any
  section?: "general" | "mobile" | string
}

type TextSetting = BaseSetting & {
  type: "text" | "textarea" | "number" | "color" | "image" | "icon"
}
type BooleanSetting = BaseSetting & { type: "boolean" }
type SelectSetting = BaseSetting & {
  type: "select"
  options: Array<{ label: string; value: string | number }>
}
type GroupSetting = BaseSetting & {
  type: "group"
  options: Array<{ label: string; value: string | number }>
}
type RangeSetting = BaseSetting & {
  type: "range"
  max: number[]
  min: number[]
  step: number
}

type LinkSetting = BaseSetting & { type: "link" }

/**
 * The final, complete type for a single setting in the editor's panel.
 * This is a robust discriminated union.
 */
export type SettingsDefinition =
  | TextSetting
  | BooleanSetting
  | SelectSetting
  | GroupSetting
  | RangeSetting
  | LinkSetting

export type SettingsFromSchema<T extends readonly SettingsDefinition[]> = {
  -readonly [K in T[number] as K["key"]]: K["defaultValue"] extends boolean
    ? boolean
    : K["defaultValue"] extends number
    ? number
    : K["defaultValue"] extends string
    ? string
    : any
}
