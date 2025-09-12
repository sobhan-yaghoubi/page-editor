import { Layouts } from "./enums"

/**
 * Defines logical groupings of parent types. This allows us to create rules
 * like "allow in all pages" without manually listing every page type.
 */

/**  A group for all standard, flexible page types */
export const FLEXIBLE_PAGES = [
  Layouts.HOME,
  Layouts.CONTACT,
  Layouts.USER_PAGES,
]

/** A group for all possible page types (system and user-created) */
export const ALL_PAGES = [
  Layouts.HOME,
  Layouts.PRODUCT,
  Layouts.CONTACT,
  Layouts.USER_PAGES,
]

/** A group for all document roots, including global areas */
export const ALL_DOCUMENT_ROOTS = [...ALL_PAGES, Layouts.HEADER, Layouts.FOOTER]
