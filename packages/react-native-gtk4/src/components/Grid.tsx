import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

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

  useImperativeHandle(ref, () => gridNode!)

  const gridRef = useCallback((node: Gtk.Grid) => {
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
  const gridNode = useContext(GridContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildNode(node)
    },
  })

  useEffect(() => {
    if (!gridNode || !childNode) {
      return
    }

    gridNode.attach(childNode, left, top, width, height)

    return () => {
      gridNode.remove(childNode)
    }
  }, [gridNode, childNode, left, top, width, height])

  return childWithRef
}

export default {
  Container: GridComponent,
  Item: GridItem,
}
