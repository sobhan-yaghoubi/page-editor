"use client"

import { COMPONENT_MAP_VIEW } from "@/editor"
import { ComponentData } from "../types"
import { COMPONENTS_SCHEMAS } from "@/schemas/shared/blocks"
import { BasicBlocks } from "@/schemas/shared/enums"
import { AddComponentSlotSettings } from "@/schemas/components/common/appComponentSlot.schema"
import { ComponentViewRenderer, useRenderers } from "@/view"
import React from "react"
import uuid from "@/lib/uuid"

interface ClientComponentRendererProps {
  component: ComponentData
  dataContext?: any
}

export const ClientComponentRenderer = ({
  component,
  dataContext,
}: ClientComponentRendererProps) => {
  try {
    const renderers = useRenderers()
    const ComponentToRender = COMPONENT_MAP_VIEW[component.type]
    if (!ComponentToRender) {
      return <div>[Client] Unknown Component: {component.type}</div>
    }

    const schema = (COMPONENTS_SCHEMAS as any)?.[component.type]
    const isRepeater = Boolean(schema?.isRepeater)

    if (isRepeater) {
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

    if (component.type === BasicBlocks.APP_COMPONENT_SLOT) {
      const { componentId } = component.settings as AddComponentSlotSettings

      if (!componentId) {
        if (process.env.NODE_ENV !== "production") {
          return (
            <div
              style={{
                border: "2px dashed #9ca3af",
                padding: "2rem",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              Select an App Component in the settings.
            </div>
          )
        }
        return null
      }

      const InjectedComponent = renderers?.[componentId]

      if (InjectedComponent) {
        return (
          <InjectedComponent settings={component.settings} data={dataContext} />
        )
      }

      return <div>[App Slot Error: Component "{componentId}" not found]</div>
    }

    return (
      <ComponentToRender
        id={component.id}
        settings={component.settings as any}
        action={component.action}
        data={dataContext}
      >
        {component.children?.map((childComponent) => (
          <ClientComponentRenderer
            key={childComponent.id}
            component={childComponent}
            dataContext={dataContext}
          />
        ))}
      </ComponentToRender>
    )
  } catch (error) {
    return <>Error Happened in Client {component.type}</>
  }
}
