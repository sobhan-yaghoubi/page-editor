"use client"

import { ComponentProps } from "@/types"
import { useRenderers } from "@/contexts/RenderContext"

export const AppComponentSlotView = ({ settings, data }: ComponentProps) => {
  const renderers = useRenderers()
  const { componentId } = settings

  if (!componentId) {
    return null
  }

  const InjectedComponent = renderers?.[componentId]

  if (InjectedComponent) {
    return <InjectedComponent settings={settings} data={data} />
  }

  if (process.env.NODE_ENV !== "production") {
    return (
      <div style={{ border: "2px solid red", padding: "1rem", color: "red" }}>
        <strong>[App Slot] Error:</strong> The application did not provide a
        renderer for the component ID: <strong>"{componentId}"</strong>.
      </div>
    )
  }

  return null
}
