"use client"

import React, { createContext, useContext } from "react"

export type RendererMap = Record<string, React.ComponentType<any>>

const RenderContext = createContext<RendererMap | null>(null)

/**
 * A provider that makes a map of custom, application-specific renderers
 * available to all components from the package.
 */
export const RenderProvider = ({
  renderers,
  children,
}: {
  renderers: RendererMap
  children: React.ReactNode
}) => {
  return (
    <RenderContext.Provider value={renderers}>
      {children}
    </RenderContext.Provider>
  )
}

/**
 * A hook for components to access the provided renderer map.
 */
export const useRenderers = (): RendererMap | null => {
  return useContext(RenderContext)
}
