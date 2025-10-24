"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import sanitizeHtml from "sanitize-html"
import clsx from "clsx"

type SeoBoxProps = {
  htmlContent: string
  id?: string
  defaultCollapsed?: boolean
  previewLines?: number
  openForBots?: boolean
}

const sanitizeOptions = {
  allowedTags: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "br",
    "hr",
    "ul",
    "ol",
    "li",
    "strong",
    "em",
    "u",
    "s",
    "blockquote",
    "a",
    "img",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "code",
    "pre",
    "div",
    "span",
  ],
  allowedAttributes: {
    a: ["href", "title", "target"],
    img: ["src", "alt", "width", "height", "loading"],
    "*": ["class", "style"],
  },
  allowedSchemes: ["http", "https", "mailto"],
}

export default function SeoBox({
  htmlContent,
  id,
  defaultCollapsed = true,
  previewLines = 2,
  openForBots = true,
}: SeoBoxProps) {
  const [isOpen, setIsOpen] = useState(!defaultCollapsed)

  useEffect(() => {
    if (!openForBots) return
    const isBot =
      typeof navigator !== "undefined" &&
      /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(
        navigator.userAgent
      )
    const isSSR = typeof window === "undefined"
    if (isBot || isSSR) setIsOpen(true)
  }, [openForBots])

  const safeHtml = sanitizeHtml(htmlContent, sanitizeOptions)

  return (
    <section id={id} className="seo-box" aria-expanded={isOpen}>
      <header
        className="seo-header"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      >
        <span className="seo-toggle-text">
          {isOpen ? "Show less" : "Show more"}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </header>
    
      <div
        className={clsx("seo-content-wrapper", { collapsed: !isOpen })}
        style={
          {
            "--preview-lines": previewLines,
          } as React.CSSProperties
        }
      >
        <div
          className="seo-content"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
      </div>
    </section>
  )
}
