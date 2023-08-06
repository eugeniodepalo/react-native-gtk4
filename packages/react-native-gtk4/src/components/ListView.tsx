import React, {
  ForwardedRef,
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ListView } from "../generated/intrinsics.js"
import GObject from "@girs/node-gobject-2.0"
import { useForwardedRef } from "../utils.js"
import { destroyContainer, createContainer } from "../container.js"
import { createReconciler } from "../reconciler.js"

type Props<T> = Omit<
  JSX.IntrinsicElements["ListView"],
  "factory" | "headerFactory" | "model"
> & {
  selectionMode?: Gtk.SelectionMode
  selection?: string[]
  onSelectionChanged?: (ids: string[], selection: T[]) => void
  renderItem?: (
    value: T | null
  ) => React.ReactElement & React.RefAttributes<Gtk.Widget>
}

type ItemRecord<T> = Record<
  string,
  {
    value: T
    index: number
  }
>

interface Context {
  items: ItemRecord<unknown>
  model: Gtk.StringList
}

const Context = createContext<Context | null>(null)

const Container = forwardRef<Gtk.ListView, Props<any>>(
  function ListViewComponent<T>(
    {
      children,
      renderItem,
      selectionMode = Gtk.SelectionMode.NONE,
      selection = [],
      onSelectionChanged,
      ...props
    }: Props<T>,
    ref: ForwardedRef<Gtk.ListView>
  ) {
    const [, setListView] = useState<Gtk.ListView | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setListView)
    const items = useMemo<ItemRecord<T>>(() => ({}), [])
    const model = useMemo<Gtk.StringList>(() => new Gtk.StringList(), [])

    const selectionModel = useMemo<Gtk.SelectionModel>(() => {
      switch (selectionMode) {
        case Gtk.SelectionMode.SINGLE:
          return new Gtk.SingleSelection({
            model,
            autoselect: false,
          })
        case Gtk.SelectionMode.MULTIPLE:
          return new Gtk.MultiSelection({ model })
        default:
          return new Gtk.NoSelection({ model })
      }
    }, [model, selectionMode])

    const handleSelectionChanged = useCallback(() => {
      if (!onSelectionChanged) {
        return
      }

      const bitset = selectionModel.getSelection()
      const [, iter] = Gtk.bitsetIterInitFirst(bitset)
      const newSelection: string[] = []

      while (iter.isValid()) {
        const index = iter.getValue()
        const id = Object.keys(items).find((id) => items[id].index === index)

        if (!id) {
          continue
        }

        newSelection.push(id)
        iter.next()
      }

      onSelectionChanged(
        newSelection,
        newSelection.map((id) => items[id].value)
      )
    }, [selectionModel])

    const value = useMemo<Context>(
      () => ({
        items,
        model,
      }),
      [items, model]
    )

    const itemFactory = useMemo<Gtk.SignalListItemFactory>(
      () => new Gtk.SignalListItemFactory(),
      []
    )

    const setupFactory = useCallback((factory: Gtk.SignalListItemFactory) => {
      if (!renderItem) {
        return
      }

      const reconciler = createReconciler()

      const onFactorySetup = (object: GObject.Object) => {
        const listItem = object as Gtk.ListItem
        const ref = createRef<Gtk.Widget>()
        const element = renderItem(null)
        const container = createContainer(listItem, reconciler)

        container.render(
          React.cloneElement(element, {
            ref,
          })
        )

        container.commit()
        listItem.setChild(ref.current)
      }

      const onFactoryTeardown = (object: GObject.Object) => {
        const listItem = object as Gtk.ListItem
        listItem.setChild(null)
        destroyContainer(listItem)
      }

      const onFactoryBind = (object: GObject.Object) => {
        const listItem = object as Gtk.ListItem
        const container = createContainer(listItem)
        const id = listItem.item.getProperty("string") as string
        const item = items[id]

        container.render(renderItem(item.value))
      }

      const onFactoryUnbind = (object: GObject.Object) => {
        const listItem = object as Gtk.ListItem
        const container = createContainer(listItem)
        container.render(renderItem(null))
      }

      factory.on("bind", onFactoryBind)
      factory.on("unbind", onFactoryUnbind)
      factory.on("setup", onFactorySetup)
      factory.on("teardown", onFactoryTeardown)

      return () => {
        factory.off("bind", onFactoryBind)
        factory.off("unbind", onFactoryUnbind)
        factory.off("setup", onFactorySetup)
        factory.off("teardown", onFactoryTeardown)
      }
    }, [])

    useEffect(() => {
      if (renderItem) {
        return setupFactory(itemFactory)
      }
    }, [renderItem])

    useEffect(() => {
      if (!selectionModel) {
        return
      }

      selectionModel.unselectAll()

      for (const id of selection) {
        selectionModel.selectItem(items[id].index, false)
      }

      selectionModel.on("selection-changed", handleSelectionChanged)

      return () => {
        selectionModel.off("selection-changed", handleSelectionChanged)
      }
    }, [selection, selectionModel])

    return (
      <ListView
        model={selectionModel}
        ref={setInnerRef}
        factory={renderItem ? itemFactory : null}
        {...props}
      >
        <Context.Provider value={value}>{children}</Context.Provider>
      </ListView>
    )
  }
)

interface ItemProps {
  value: unknown
  id: string
}

const Item = function ListViewItemComponent({ value, id }: ItemProps) {
  const context = useContext(Context)

  if (!context) {
    throw new Error("ListView.Item must be used inside a ListView.Container")
  }

  useEffect(() => {
    const { items, model } = context

    items[id] = {
      value,
      index: model.getNItems(),
    }

    model.append(id)

    return () => {
      if (model.getString(items[id].index) === id) {
        model.remove(items[id].index)
      }

      delete items[id]
    }
  }, [value, id])

  return null
}

export default {
  Container,
  Item,
}
