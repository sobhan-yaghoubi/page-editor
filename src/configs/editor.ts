import { FullscreenIcon, MonitorIcon, SmartphoneIcon } from "lucide-react"

export const SCREEN_WIDTHS_EDITOR_OPTIONS = [
  { label: "Desktop", value: "desktop", icon: MonitorIcon },
  { label: "Mobile", value: "mobile", icon: SmartphoneIcon },
  { label: "Fullscreen", value: "fullScreen", icon: FullscreenIcon },
] as const

export const SCREEN_WIDTHS_EDITOR_OPTIONS_DEFAULT_VALUE =
  SCREEN_WIDTHS_EDITOR_OPTIONS[0]
