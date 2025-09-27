import React from "react"
import { ComponentData } from "@/types"
import {
  CLIENT_ONLY_COMPONENTS,
  COMPONENT_MAP,
} from "@/configs/componentMap.view"
import { ClientComponentRenderer } from "./ComponentViewRenderer.client"

export interface ComponentRendererProps {
  component: ComponentData
}

export const ComponentViewRenderer = ({
  component,
}: ComponentRendererProps) => {
  if (CLIENT_ONLY_COMPONENTS.has(component.type)) {
    return <ClientComponentRenderer component={component} />
  }

  const ComponentToRender = COMPONENT_MAP[component.type]

  if (!ComponentToRender) {
    console.error(
      `ComponentRenderer: Unknown component type "${component.type}"`
    )
    return null
  }

  return (
    <ComponentToRender
      id={component.id}
      settings={component.settings}
      action={component.action}
    >
      {component.children?.map((childComponent) => (
        <ComponentViewRenderer
          key={childComponent.id}
          component={childComponent}
        />
      ))}
    </ComponentToRender>
  )
}
