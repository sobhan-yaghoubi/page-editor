import { useId } from "react"
import { ComponentProps, Override } from "@/types"
import { toSize } from "@/utils/components"
import { SpacerSettings } from "@/schemas/components/basic/spacer/spacer.schema"

type Props = Override<ComponentProps, "settings", SpacerSettings>

const SpacerEditor = ({ settings }: Props) => {
  const id = useId().replace(/[:]/g, "")

  const baseHeight =
    settings["spacer-unit"] === "px"
      ? toSize(settings["spacer-size-px"], "px")
      : toSize(settings["spacer-size-percent"], "%")

  const mobileHeight = settings["custom-mobile-size-flag"]
    ? settings["spacer-mobile-unit"] === "px"
      ? toSize(settings["spacer-mobile-size-px"], "px")
      : toSize(settings["spacer-mobile-size-percent"], "%")
    : null

  return (
    <>
      <div
        id={`spacer-${id}`}
        aria-hidden="true"
        role="presentation"
        style={{
          width: "100%",
          height: baseHeight,
          display: "block",
        }}
      />
      {mobileHeight && (
        <style>{`
          @media (max-width: 640px) {
            #spacer-${id} { height: ${mobileHeight}; }
          }
        `}</style>
      )}
    </>
  )
}

SpacerEditor.displayName = "SpacerEditor"
export default SpacerEditor
