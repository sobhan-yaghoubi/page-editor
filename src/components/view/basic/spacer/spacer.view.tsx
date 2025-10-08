import { useId } from "react"
import { SpacerSettings } from "@/schema/component/basic/spacer.schema"
import { ComponentProps, Override } from "@/types"
import { toSize } from "@/utils/components"

type Props = Override<ComponentProps, "settings", SpacerSettings>

const SpacerView = ({ settings }: Props) => {
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
          flexShrink: 0,
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

SpacerView.displayName = "SpacerView"
export default SpacerView
