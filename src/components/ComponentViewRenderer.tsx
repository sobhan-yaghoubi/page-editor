import { ComponentData } from "../types"
import {
  CLIENT_ONLY_COMPONENTS,
  COMPONENT_MAP_VIEW,
} from "../configs/component.registry"
import { ClientComponentRenderer } from "./ComponentViewRenderer.client"

export const ComponentViewRenderer = ({
  component,
}: {
  component: ComponentData
}) => {
  if (CLIENT_ONLY_COMPONENTS.has(component.type)) {
    return <ClientComponentRenderer component={component} />
  }

  const ComponentToRender = COMPONENT_MAP_VIEW[component.type]

  if (!ComponentToRender) {
    if (process.env.NODE_ENV !== "production") {
      return (
        <div
          style={{
            border: "2px dotted blue",
            padding: "1rem",
            margin: "0.5rem",
          }}
        >
          <strong>Developer Note:</strong>
          <br />
          Component type "{component.type}" is a data-driven component and must
          be handled by the application's top-level renderer.
        </div>
      )
    }
    return null
  }

  return (
    <ComponentToRender
      id={component.id}
      settings={component.settings as any}
      action={component.action}
    >
      {component.children?.map((child) => (
        <ComponentViewRenderer key={child.id} component={child} />
      ))}
    </ComponentToRender>
  )
}
