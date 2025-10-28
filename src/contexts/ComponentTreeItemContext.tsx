"use client"

import React, { createContext, useContext, useRef } from "react"
import { useStore, StoreApi } from "zustand"
import {
  ComponentTreeItemState,
  createComponentTreeItemStore,
} from "../stores/componentTreeItem.store"

export const ComponentTreeItemContext = createContext<
  StoreApi<ComponentTreeItemState> | undefined
>(undefined)

export const ComponentTreeItemProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const storeRef = useRef<StoreApi<ComponentTreeItemState>>(undefined)
  if (!storeRef.current) {
    storeRef.current = createComponentTreeItemStore()
  }
  return (
    <ComponentTreeItemContext.Provider value={storeRef.current}>
      {children}
    </ComponentTreeItemContext.Provider>
  )
}

export const useComponentTreeItemStore = <T,>(
  selector: (state: ComponentTreeItemState) => T
): T => {
  const store = useContext(ComponentTreeItemContext)
  if (!store) {
    throw new Error(
      "useComponentTreeItemStore must be used within a ComponentTreeItemProvider"
    )
  }
  return useStore(store, selector)
}
