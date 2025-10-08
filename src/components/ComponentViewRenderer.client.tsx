"use client"

import { COMPONENT_MAP_VIEW } from "@/editor"
import { ComponentData } from "../types"

interface ClientComponentRendererProps {
  component: ComponentData
}

export const ClientComponentRenderer = ({
  component,
}: ClientComponentRendererProps) => {
  const ComponentToRender = COMPONENT_MAP_VIEW[component.type]

  if (!ComponentToRender) {
    return <div>[Client] Unknown Component: {component.type}</div>
  }

  return (
    <ComponentToRender
      id={component.id}
      settings={component.settings as any}
      action={component.action}
    >
      {component.children?.map((childComponent) => (
        <ClientComponentRenderer
          key={childComponent.id}
          component={childComponent}
        />
      ))}
    </ComponentToRender>
  )
}
