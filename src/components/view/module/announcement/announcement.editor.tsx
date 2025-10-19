import { useId } from "react"
import { ComponentProps, Override } from "@/types"
import { AnnouncementSettings } from "@/schemas/components/modules/announcement.schema"

type Props = Override<ComponentProps, "settings", AnnouncementSettings>

const AnnouncementEditor = ({ settings }: Props) => {
  const id = useId().replace(/[:]/g, "")

  const text = settings["announcement-text"]
  const link = settings["announcement-href"]
  const textSize = settings["announcement-text-size"]
  const letterSpacing = settings["announcement-letter-spacing"]
  const textCase = settings["announcement-case"]

  const textTransform = textCase === "uppercase" ? "uppercase" : "none"

  const announcementStyle: React.CSSProperties = {
    fontSize: textSize,
    letterSpacing: letterSpacing,
    textTransform: textTransform,
    textAlign: "center",
    padding: "10px 0",
    width: "100%",
    display: "block",
    flexShrink: 0,
    cursor: "pointer",
  }

  return (
    <div id={`announcement-${id}-editor`} style={announcementStyle}>
      {link ? (
        <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  )
}

AnnouncementEditor.displayName = "AnnouncementEditor"
export default AnnouncementEditor
