import React, { ForwardedRef, useState, useCallback, useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ColumnView } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useSelection from "../hooks/useSelection.js"
import _ from "lodash"

type Column = Omit<Gtk.ColumnViewColumn.ConstructorProperties, "model" | "id">

type RenderCellFunction<T = unknown> = (
  item: T | null,
  column: number
) => ReturnType<ListItemFactoryRenderFunction<T>>

type Props<T> = Omit<JSX.IntrinsicElements["ColumnView"], "model"> & {
  columns: Column[]
  selectionMode?: Gtk.SelectionMode
  selection?: number[]
  onSelectionChanged?: (indexes: number[], selection: T[]) => void
  renderCell?: RenderCellFunction<T>
}

interface ColumnProps<T> {
  index: number
  column: Column
  view: Gtk.ColumnView
  renderCell?: (
    item: T | null,
    column: number
  ) => ReturnType<ListItemFactoryRenderFunction<T>>
}

const Column = React.memo(function ColumnComponent<T>({
  index,
  column,
  renderCell,
  view,
}: ColumnProps<T>) {
  const render = useCallback(
    (item: T | null) => {
      if (!renderCell) {
        throw new Error("Expected renderCell to be defined")
      }

      return renderCell(item, index)
    },
    [index, renderCell]
  )

  const factory = useListItemFactory<T>(render)

  useEffect(() => {
    const columnViewColumn = new Gtk.ColumnViewColumn({
      ...column,
      factory,
    })

    view.insertColumn(index, columnViewColumn)

    return () => {
      view.removeColumn(columnViewColumn)
    }
  }, [])

  return null
}, _.isEqual)

export default forwardRef<Gtk.ColumnView, Props<any>>(
  function ColumnViewComponent<T>(
    {
      children,
      renderCell,
      columns,
      selectionMode = Gtk.SelectionMode.NONE,
      selection = [],
      onSelectionChanged,
      ...props
    }: Props<T>,
    ref: ForwardedRef<Gtk.ColumnView>
  ) {
    const [columnView, setColumnView] = useState<Gtk.ColumnView | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setColumnView)

    const selectionModel = useSelection({
      selectionMode,
      selection,
      onSelectionChanged,
    })

    return (
      <ColumnView model={selectionModel} ref={setInnerRef} {...props}>
        {children}
        {columnView
          ? columns.map((column, index) => (
              <Column
                key={index}
                index={index}
                column={column}
                renderCell={renderCell as RenderCellFunction}
                view={columnView}
              />
            ))
          : null}
      </ColumnView>
    )
  }
)
