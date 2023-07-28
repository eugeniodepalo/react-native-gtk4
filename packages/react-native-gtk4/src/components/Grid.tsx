import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Grid } from "../generated/intrinsics.js"

const GridContext = React.createContext<Gtk.Grid | null>(null)

type Props = JSX.IntrinsicElements["Grid"] & {
  children: React.ReactNode
}

const GridContainer = forwardRef<Gtk.Grid, Props>(function GridContainer(
  { children, ...props },
  ref
) {
  const [grid, setGrid] = useState<Gtk.Grid | null>(null)

  useImperativeHandle(ref, () => grid!)

  const gridRef = useCallback((node: Gtk.Grid | null) => {
    setGrid(node)
  }, [])

  return (
    <Grid ref={gridRef} {...props}>
      {grid ? (
        <GridContext.Provider value={grid}>{children}</GridContext.Provider>
      ) : null}
    </Grid>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  col?: number
  row?: number
  width?: number
  height?: number
}

const GridItem = function GridItem({
  children,
  col = 0,
  row = 0,
  width = 1,
  height = 1,
}: ItemProps) {
  const grid = useContext(GridContext)
  const childRef = useRef<Gtk.Widget | null>(null)

  if (!grid) {
    throw new Error("Grid.Item must be a child of Grid.Container")
  }

  useEffect(() => {
    const child = childRef.current

    if (!child) {
      return
    }

    grid.attach(child, col, row, width, height)

    return () => {
      grid.remove(child)
    }
  }, [col, grid, height, row, width])

  return React.cloneElement(children, {
    ref: childRef,
  })
}

export default {
  Container: GridContainer,
  Item: GridItem,
}
