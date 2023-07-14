import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk, Box } from "../index.js"

const Grid = "Grid"

const GridContext = React.createContext<Gtk.Grid | undefined>(undefined)

type Props = JSX.IntrinsicElements["Grid"] & {
  children: React.ReactNode
}

const GridComponent = forwardRef<Gtk.Grid, Props>(function GridComponent(
  { children, ...props },
  ref
) {
  const [gridNode, setGridNode] = useState<Gtk.Grid | undefined>(undefined)

  useImperativeHandle(ref, () => {
    if (!gridNode) {
      throw new Error("gridRef is undefined")
    }

    return gridNode
  })

  const gridRef = useCallback((node: Gtk.Grid) => {
    setGridNode(node)
  }, [])

  return (
    <Box>
      <GridContext.Provider value={gridNode}>
        <Grid ref={gridRef} {...props}>
          {children}
        </Grid>
      </GridContext.Provider>
    </Box>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  left?: number
  top?: number
  width?: number
  height?: number
}

const GridItem = function GridItem({
  children,
  left = 0,
  top = 0,
  width = 1,
  height = 1,
}: ItemProps) {
  const gridRef = useContext(GridContext)
  const [childRef, setChildRef] = useState<Gtk.Widget | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildRef(node)
    },
  })

  useEffect(() => {
    if (!gridRef || !childRef) {
      return
    }

    gridRef.attach(childRef, left, top, width, height)

    return () => {
      gridRef.remove(childRef)
    }
  }, [gridRef, childRef, left, top, width, height])

  return childWithRef
}

export default {
  Container: GridComponent,
  Item: GridItem,
}
