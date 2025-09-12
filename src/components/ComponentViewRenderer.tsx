import React from "react"
import { ComponentData } from "@/types"
import { COMPONENT_MAP } from "@/configs/componentMap.view"

interface ComponentRendererProps {
  component: ComponentData
}

export const ComponentViewRenderer = ({
  component,
}: ComponentRendererProps) => {
  const ComponentToRender = COMPONENT_MAP[component.type]

  if (!ComponentToRender) {
    console.error(
      `ComponentRenderer: Unknown component type "${component.type}"`
    )
    return null
  }

  return (
    <ComponentToRender id={component.id} settings={component.settings}>
      {component.children?.map((childComponent) => (
        <ComponentViewRenderer
          key={childComponent.id}
          component={childComponent}
        />
      ))}
    </ComponentToRender>
  )
}
