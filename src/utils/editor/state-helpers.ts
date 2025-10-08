import { EditorState } from "@/stores/editor"
import { EditorDocument } from "@/types"

/**
 * Get the active Document (header, page, or footer) from the editor state
 */
export const getActiveDocument = (
  state: Pick<EditorState, "activeContext" | "header" | "footer" | "activePage">
): EditorDocument => {
  switch (state.activeContext) {
    case "header":
      return state.header
    case "footer":
      return state.footer
    case "page":
    default:
      return state.activePage
  }
}

/**
 * Get a specific Document by its context type from the editor state
 */
export const getDocumentByType = (
  state: EditorState,
  type: EditorState["activeContext"]
): EditorDocument => {
  switch (type) {
    case "header":
      return state.header
    case "footer":
      return state.footer
    case "page":
      return state.activePage
  }
}

/**
 * Get the correct state key ('activePage', 'header', 'footer') for a given context.
 */
export const getStateKeyForContext = (
  context: EditorState["activeContext"]
) => {
  return context === "page" ? "activePage" : context
}
