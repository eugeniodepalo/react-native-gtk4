import React, { useContext, useEffect, useState } from "react"
import { forwardRef, createContext } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Grid } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

const Context = createContext<Gtk.Grid | null>(null)

const Container = forwardRef<Gtk.Grid, JSX.IntrinsicElements["Grid"]>(
  function GridContainer({ children, ...props }, ref) {
    const [grid, setGrid] = useState<Gtk.Grid | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setGrid)

    return (
      <Grid ref={setInnerRef} {...props}>
        {grid ? (
          <Context.Provider value={grid}>{children}</Context.Provider>
        ) : null}
      </Grid>
    )
  }
)

interface ItemProps {
  children: React.ReactElement & React.RefAttributes<Gtk.Widget>
  col?: number
  row?: number
  width?: number
  height?: number
}

const Item = function GridItem({
  children,
  col = 0,
  row = 0,
  width = 1,
  height = 1,
}: ItemProps) {
  const grid = useContext(Context)
  const [childRef, setChildRef] = useForwardedRef(children.ref)

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
    ref: setChildRef,
  })
}

export default {
  Container,
  Item,
}
