import { create } from "zustand"

export type ComponentTreeItemState = {
  isExpanded: boolean
  isPopoverOpen: boolean
  actions: {
    toggleExpanded: () => void
    setPopoverOpen: (isOpen: boolean) => void
  }
}

export const createComponentTreeItemStore = () =>
  create<ComponentTreeItemState>((set) => ({
    isExpanded: false,
    isPopoverOpen: false,
    actions: {
      toggleExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),
      setPopoverOpen: (isOpen) => set({ isPopoverOpen: isOpen }),
    },
  }))

export type ComponentTreeItemStore = ReturnType<
  typeof createComponentTreeItemStore
>
