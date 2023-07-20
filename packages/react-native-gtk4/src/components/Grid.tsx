import React, {
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"

const Grid = "Grid"
const GridContext = React.createContext<Gtk.Grid | null>(null)

type Props = JSX.IntrinsicElements["Grid"] & {
  children: React.ReactNode
}

const GridContainer = forwardRef<Gtk.Grid, Props>(function GridContainer(
  { children, ...props },
  ref
) {
  const [gridNode, setGridNode] = useState<Gtk.Grid | null>(null)

  useImperativeHandle(ref, () => gridNode!)

  const gridRef = useCallback((node: Gtk.Grid | null) => {
    setGridNode(node)
  }, [])

  return (
    <GridContext.Provider value={gridNode}>
      <Grid ref={gridRef} {...props}>
        {children}
      </Grid>
    </GridContext.Provider>
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
  const gridNode = useContext(GridContext)
  const childRef = useRef<Gtk.Widget | null>(null)

  const setChildRef = useCallback(
    (node: Gtk.Widget | null) => {
      const prevNode = childRef.current

      childRef.current = node

      if (!gridNode) {
        return
      }

      if (prevNode) {
        gridNode.remove(prevNode)
      }

      if (node) {
        gridNode.attach(node, col, row, width, height)
      }
    },
    [col, gridNode, height, row, width]
  )

  return React.cloneElement(children, {
    ref: setChildRef,
  })
}

export default {
  Container: GridContainer,
  Item: GridItem,
}
