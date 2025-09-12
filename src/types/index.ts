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
  allowedChildren: (string | { type: ComponentType; max?: number })[] | "*"
  disallowedChildren?: ComponentType[]
  defaultSettings: SettingsDefinition[]
  slots?: Record<string, SlotDefinition>
  metadata?: Record<string, any>
}

/** The schema for a page or global document. Defines its top-level rules */
export interface PageSchema {
  type: ParentType | "flexible" | "fixed"
  name: string
  allowedSections?: ({ type: ComponentType; max?: number } | string)[]
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
  isSelected?: boolean // For editor UI
  actionSchema?: ActionDefinition // For storefront functionality
}

/** The type definition for a single setting in the editor's panel */
export type SettingsDefinition = {
  key: string
  label: string
  defaultValue?: any
  section?: "general" | "mobile" | string
} & (
  | { type: "text" }
  | { type: "textarea" }
  | { type: "number" }
  | { type: "boolean" }
  | {
      type: "select"
      options?: Array<{ label: string; value: string | number }>
    }
  | { type: "color" }
  | { type: "image" }
  | { type: "icon" }
  | { type: "range"; max: number[]; min: number[]; step: number }
  | { type: "group"; options: Array<{ label: string; value: string | number }> }
)
