import { SCREEN_WIDTHS_EDITOR_OPTIONS_DEFAULT_VALUE } from "@/configs/editor"
import { ComponentData, EditorDocument } from "@/types"
import { ScreenWidthOption } from "@/types/editor"
import {
  addComponentAtIndex,
  getTreeWithUpdatedSettings,
  removeComponent,
  updateComponentProps,
} from "@/utils/component-tree/tree-modifiers"
import { findComponentMeta } from "@/utils/component-tree/tree-queries"
import {
  getActiveDocument,
  getDocumentByType,
  getStateKeyForContext,
} from "@/utils/editor/state-helpers"
import { getPageHeaderFooterSupport } from "@/utils/schema/schema-helpers"
import { create } from "zustand"

export type EditorState = {
  activeContext: "page" | "header" | "footer"
  setActiveContext: (context: EditorState["activeContext"]) => void

  header: EditorDocument
  footer: EditorDocument
  activePage: EditorDocument
  selectedBlock: ComponentData | null

  isHeaderVisible: boolean
  isFooterVisible: boolean
  editorWidth: ScreenWidthOption

  setSelectedBlock: (
    block: EditorState["selectedBlock"],
    context?: EditorState["activeContext"]
  ) => void

  loadEditorData: (data: {
    page: EditorDocument
    header: EditorDocument
    footer: EditorDocument
  }) => void
  setActivePage: (page: EditorDocument) => void
  setEditorWidth: (widthOption: ScreenWidthOption) => void

  deleteComponent: (
    componentId: string,
    context: EditorState["activeContext"]
  ) => void

  updateComponentSettings: (
    componentId: string,
    newSetting: Record<string, any>,
    context: EditorState["activeContext"]
  ) => void

  addComponent: (
    newComponent: ComponentData,
    parentId: string | null,
    index: number,
    documentContext: "page" | "header" | "footer"
  ) => void
  toggleComponentVisibility: (
    componentId: string,
    context: EditorState["activeContext"]
  ) => void
}

const useEditorStore = create<EditorState>((set) => ({
  activeContext: "page",
  header: null,
  footer: null,
  activePage: null,
  selectedBlock: null,
  isHeaderVisible: false,
  isFooterVisible: false,
  editorWidth: SCREEN_WIDTHS_EDITOR_OPTIONS_DEFAULT_VALUE,

  setActiveContext: (context) =>
    set({ activeContext: context, selectedBlock: null }),

  loadEditorData: (data) => {
    const initialPage = data.page
    let visibility = { header: false, footer: false }
    if (initialPage?.segment) {
      visibility = getPageHeaderFooterSupport(initialPage.segment)
    }

    set({
      activePage: data.page,
      header: data.header,
      footer: data.footer,
      activeContext: "page",
      selectedBlock: null,
      isHeaderVisible: visibility.header,
      isFooterVisible: visibility.footer,
    })
  },
  setEditorWidth: (widthOption) => set({ editorWidth: widthOption }),

  setActivePage: (page) => {
    if (!page) return

    const visibility = getPageHeaderFooterSupport(page.segment)
    set({
      activePage: page,
      activeContext: "page",
      selectedBlock: null,
      isHeaderVisible: visibility.header,
      isFooterVisible: visibility.footer,
    })
  },

  setSelectedBlock: (block, context) =>
    set((state) => ({
      selectedBlock: block,
      activeContext: context ?? state.activeContext,
    })),

  deleteComponent: (componentId, context) =>
    set((state) => {
      const targetDoc = getDocumentByType(state, context)
      if (!targetDoc) return {}

      const newComponents = removeComponent(targetDoc.components, componentId)
      const stateKey = getStateKeyForContext(context)

      return {
        [stateKey]: { ...targetDoc, components: newComponents },
        selectedBlock:
          state.selectedBlock?.id === componentId ? null : state.selectedBlock,
      }
    }),

  updateComponentSettings: (componentId, newSettings, context) =>
    set((state) => {
      const activeDoc = getActiveDocument(state)
      if (!activeDoc) return {}

      const newComponents = getTreeWithUpdatedSettings(
        activeDoc.components,
        componentId,
        newSettings
      )

      let newSelectedBlock = state.selectedBlock
      if (state.selectedBlock?.id === componentId) {
        newSelectedBlock =
          findComponentMeta(newComponents, componentId)?.component ?? null
      }

      const stateKey = getStateKeyForContext(context)

      return {
        [stateKey]: { ...activeDoc, components: newComponents },
        selectedBlock: newSelectedBlock,
      }
    }),
  addComponent: (newComponent, parentId, index, documentContext) =>
    set((state) => {
      const targetDoc = getDocumentByType(state, documentContext)
      if (!targetDoc) return {}

      const newComponents = addComponentAtIndex(
        targetDoc.components,
        newComponent,
        parentId,
        index
      )

      const stateKey = getStateKeyForContext(documentContext)

      return {
        [stateKey]: { ...targetDoc, components: newComponents },
      }
    }),
  toggleComponentVisibility: (componentId, context) =>
    set((state) => {
      const targetDoc = getDocumentByType(state, context)
      if (!targetDoc) return {}

      const componentToToggle = findComponentMeta(
        targetDoc.components,
        componentId
      )?.component

      if (!componentToToggle) return {}

      const newComponents = updateComponentProps(
        targetDoc.components,
        componentId,
        { isHidden: !componentToToggle.isHidden }
      )
      const stateKey = getStateKeyForContext(context)

      return {
        [stateKey]: { ...targetDoc, components: newComponents },
      }
    }),
}))

export { useEditorStore }
