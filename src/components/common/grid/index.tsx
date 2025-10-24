import { ComponentProps } from "@/types"

type GridSettings = {
  title?: string
  cardWidthMobile?: number
  cardWidthDesktop?: number
  gap?: number
}

type GridWrapperProps = ComponentProps<GridSettings, React.ReactNode, any>

const Grid = ({ settings, children }: GridWrapperProps) => {
  const {
    title,
    cardWidthMobile = 160,
    cardWidthDesktop = 280,
    gap = 16,
  } = settings || {}

  return (
    <section className="grid_section">
      {title && <h2 className="grid_title">{title}</h2>}

      <div
        className="grid_container"
        style={
          {
            "--card-width-mobile": `${cardWidthMobile}px`,
            "--card-width-desktop": `${cardWidthDesktop}px`,
            "--grid-gap": `${gap}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </section>
  )
}

const GridItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid_item">{children}</div>
}

export { Grid, GridItem }
