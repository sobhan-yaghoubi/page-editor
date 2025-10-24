"use client"

import { useState } from "react"

type CollapseWrapperProps = {
  html: string
  maxChars: number
  collapseLabel: string
  expandLabel: string
}

export function CollapseWrapper({
  html,
  maxChars,
  collapseLabel,
  expandLabel,
}: CollapseWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  const shouldCollapse = text.length > maxChars

  if (!shouldCollapse) return null

  return (
    <>
      <div
        className="seo_collapse_overlay"
        data-expanded={isExpanded}
        dangerouslySetInnerHTML={{
          __html: isExpanded ? html : truncateHtml(html, maxChars),
        }}
      />

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="seo_toggle"
        aria-expanded={isExpanded}
      >
        {isExpanded ? collapseLabel : expandLabel}
      </button>
    </>
  )
}

function truncateHtml(html: string, maxChars: number): string {
  const div = document.createElement("div")
  div.innerHTML = html
  const text = div.textContent || ""

  if (text.length <= maxChars) return html

  let truncated = ""
  let charCount = 0
  let openTags: string[] = []

  const walker = document.createTreeWalker(
    div,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
  )
  let node: Node | null = walker.currentNode

  while (node && charCount < maxChars) {
    if (node.nodeType === Node.TEXT_NODE) {
      const remaining = maxChars - charCount
      const text = node.textContent || ""
      if (text.length > remaining) {
        truncated += text.slice(0, remaining) + "..."
        charCount += remaining
        break
      } else {
        truncated += text
        charCount += text.length
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement
      truncated += `<${el.tagName.toLowerCase()}>`
      openTags.push(el.tagName.toLowerCase())
    }
    node = walker.nextNode()
  }

  while (openTags.length) {
    truncated += `</${openTags.pop()}>`
  }

  return truncated
}
