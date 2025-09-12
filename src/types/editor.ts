import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type ScreenWidthEditor = {
  label: string
  value: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

export type SettingsDefinition = {
  key: string
  label: string
  defaultValue?: any
  section?: "general" | "mobile"
} & (
  | { type: "text" }
  | { type: "textarea" }
  | { type: "number" }
  | {
      type: "boolean"
    }
  | {
      type: "select"
      options?: Array<{ label: string; value: string | number }>
    }
  | { type: "color" }
  | { type: "image" }
  | {
      type: "icon"
    }
  | { type: "range"; max: number[]; min: number[]; step: number }
  | { type: "group"; options: Array<{ label: string; value: string | number }> }
)
