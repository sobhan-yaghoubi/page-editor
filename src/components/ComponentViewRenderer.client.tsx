"use client"

import { ComponentData } from "../types"
import { COMPONENT_MAP } from "../configs/componentMap.view"

interface ClientComponentRendererProps {
  component: ComponentData
}

export const ClientComponentRenderer = ({
  component,
}: ClientComponentRendererProps) => {
  const ComponentToRender = COMPONENT_MAP[component.type]

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
