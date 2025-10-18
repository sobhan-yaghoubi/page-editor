import { ComponentData } from "../types"
import {
  CLIENT_ONLY_COMPONENTS,
  COMPONENT_MAP_VIEW,
} from "../configs/component.registry"
import { ClientComponentRenderer } from "./ComponentViewRenderer.client"
import { COMPONENTS_SCHEMAS } from "@/schemas/shared/blocks"
import uuid from "@/lib/uuid"
import React from "react"

export const ComponentViewRenderer = ({
  component,
  dataContext,
}: {
  component: ComponentData
  dataContext?: any
}) => {
  try {
    if (CLIENT_ONLY_COMPONENTS.has(component.type)) {
      return (
        <ClientComponentRenderer
          component={component}
          dataContext={dataContext}
        />
      )
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
            Component type "{component.type}" is a data-driven component and
            must be handled by the application's top-level renderer.
          </div>
        )
      }
      return null
    }

    const schema = COMPONENTS_SCHEMAS?.[component.type]

    if (schema?.isRepeater) {
      const itemsArray: any[] = Array.isArray(dataContext) ? dataContext : []

      return (
        <ComponentToRender
          id={component.id}
          settings={component.settings as any}
          action={component.action}
          data={itemsArray}
          renderRepeater={(
            items: any[],
            template: ComponentData[],
            Wrapper?: React.ElementType,
            additionalWrapperProps?: React.HTMLProps<HTMLElement>
          ) =>
            items.map((item, idx) => {
              const base =
                (item && (item.id || item.sku || item.slug)) ?? `i-${idx}`
              const itemKey = `rep-${uuid()}-${String(base)}`

              const wrapperProps = {
                key: item.id || itemKey,
                ...additionalWrapperProps,
              }

              const Comp = Wrapper ?? React.Fragment
              return (
                <Comp {...wrapperProps}>
                  {template?.map((templateChild) => (
                    <ComponentViewRenderer
                      key={templateChild.id}
                      component={templateChild}
                      dataContext={item}
                    />
                  ))}
                </Comp>
              )
            })
          }
        >
          {component.children}
        </ComponentToRender>
      )
    }

    return (
      <ComponentToRender
        id={component.id}
        settings={component.settings as any}
        action={component.action}
        data={dataContext}
      >
        {component.children?.map((child) => (
          <ComponentViewRenderer
            key={child.id}
            component={child}
            dataContext={dataContext}
          />
        ))}
      </ComponentToRender>
    )
  } catch (error) {
    return <>Error Happened in the {component.type}</>
  }
}
