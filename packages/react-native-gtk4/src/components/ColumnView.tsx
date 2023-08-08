import React, { ForwardedRef, useState, useCallback, useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ColumnView } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import ListProvider from "./ListProvider.js"
import useList, { ListItemRecord } from "../hooks/useList.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useSelection from "../hooks/useSelection.js"
import _ from "lodash"

type Column = Omit<Gtk.ColumnViewColumn.ConstructorProperties, "model" | "id">

type RenderCellFunction<T = unknown, U extends string = string> = (
  item: T | null,
  column: U
) => ReturnType<ListItemFactoryRenderFunction<T>>

type Props<T, U extends string> = Omit<
  JSX.IntrinsicElements["ColumnView"],
  "model"
> & {
  columns: Record<U, Column>
  selectionMode?: Gtk.SelectionMode
  selection?: string[]
  onSelectionChanged?: (ids: string[], selection: T[]) => void
  renderCell?: RenderCellFunction<T, U>
}

interface ColumnProps<T, U extends string> {
  id: U
  column: Column
  itemsRef: React.RefObject<ListItemRecord<T>>
  view: Gtk.ColumnView
  renderCell?: (
    item: T | null,
    column: U
  ) => ReturnType<ListItemFactoryRenderFunction<T>>
}

const Column = React.memo(function ColumnComponent<T, U extends string>({
  id,
  column,
  renderCell,
  view,
  itemsRef,
}: ColumnProps<T, U>) {
  const render = useCallback(
    (item: T | null) => {
      if (!renderCell) {
        throw new Error("Expected renderCell to be defined")
      }

      return renderCell(item, id)
    },
    [id, renderCell]
  )

  const factory = useListItemFactory<T>({
    render,
    itemsRef,
  })

  useEffect(() => {
    const columnViewColumn = new Gtk.ColumnViewColumn({
      ...column,
      factory,
    })

    view.appendColumn(columnViewColumn)

    return () => {
      view.removeColumn(columnViewColumn)
    }
  }, [])

  return null
}, _.isEqual)

export default forwardRef<Gtk.ColumnView, Props<any, any>>(
  function ColumnViewComponent<T, U extends string>(
    {
      children,
      renderCell,
      columns,
      selectionMode = Gtk.SelectionMode.NONE,
      selection = [],
      onSelectionChanged,
      ...props
    }: Props<T, U>,
    ref: ForwardedRef<Gtk.ColumnView>
  ) {
    const [columnView, setColumnView] = useState<Gtk.ColumnView | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setColumnView)
    const list = useList<T>()
    const { itemsRef, model } = list

    const selectionModel = useSelection({
      selectionMode,
      selection,
      model,
      onSelectionChanged,
      itemsRef,
    })

    return (
      <ColumnView model={selectionModel} ref={setInnerRef} {...props}>
        <ListProvider.Container value={list}>{children}</ListProvider.Container>
        {columnView
          ? Object.entries<Column>(columns).map(([id, column]) => (
              <Column
                key={id}
                id={id as U}
                column={column}
                renderCell={renderCell as RenderCellFunction}
                itemsRef={itemsRef}
                view={columnView}
              />
            ))
          : null}
      </ColumnView>
    )
  }
)
