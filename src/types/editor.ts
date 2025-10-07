import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

/** Defines the shape of the screen width options in the editor's top navbar */
export interface ScreenWidthOption {
  label: string
  value: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}
