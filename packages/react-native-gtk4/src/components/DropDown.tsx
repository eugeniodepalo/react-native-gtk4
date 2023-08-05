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
import { DropDown } from "../generated/intrinsics.js"
import GObject from "@girs/node-gobject-2.0"
import { useForwardedRef } from "../utils.js"
import { destroyContainer, createContainer } from "../container.js"
import { createReconciler } from "../reconciler.js"

type FactoryType = "item" | "popoverItem"

type Props<T> = Omit<
  JSX.IntrinsicElements["DropDown"],
  "itemFactory" | "popoverItemFactory"
> & {
  renderPopoverItem?: (
    value?: T
  ) => React.ReactElement & React.RefAttributes<Gtk.Widget>
  renderItem?: (
    value?: T
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

const Container = forwardRef<Gtk.DropDown, Props<any>>(
  function DropDownComponent<T>(
    {
      children,
      renderItem,
      renderPopoverItem = renderItem,
      ...props
    }: Props<T>,
    ref: ForwardedRef<Gtk.DropDown>
  ) {
    const [, setDropDown] = useState<Gtk.DropDown | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setDropDown)
    const items = useMemo<ItemRecord<T>>(() => ({}), [])
    const model = useMemo<Gtk.StringList>(() => new Gtk.StringList(), [])

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

    const popoverItemFactory = useMemo<Gtk.SignalListItemFactory>(
      () => new Gtk.SignalListItemFactory(),
      []
    )

    const setupFactory = useCallback(
      (factory: Gtk.SignalListItemFactory, type: FactoryType) => {
        const renderFn = type === "item" ? renderItem : renderPopoverItem

        if (!renderFn) {
          return
        }

        const reconciler = createReconciler()

        const onFactorySetup = (object: GObject.Object) => {
          const listItem = object as Gtk.ListItem
          const ref = createRef<Gtk.Widget>()
          const element = renderFn()
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

          container.render(renderFn(item.value))
        }

        const onFactoryUnbind = (object: GObject.Object) => {
          const listItem = object as Gtk.ListItem
          const container = createContainer(listItem)
          container.render(renderFn())
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
      },
      []
    )

    useEffect(() => {
      if (renderItem) {
        return setupFactory(itemFactory, "item")
      }
    }, [renderItem])

    useEffect(() => {
      if (renderPopoverItem) {
        return setupFactory(popoverItemFactory, "popoverItem")
      }
    }, [renderPopoverItem])

    return (
      <DropDown
        model={model}
        ref={setInnerRef}
        factory={renderItem ? itemFactory : null}
        listFactory={renderPopoverItem ? popoverItemFactory : null}
        {...props}
      >
        <Context.Provider value={value}>{children}</Context.Provider>
      </DropDown>
    )
  }
)

interface ItemProps {
  value: unknown
  id: string
}

const Item = function DropDownItemComponent({ value, id }: ItemProps) {
  const context = useContext(Context)

  if (!context) {
    throw new Error("DropDown.Item must be used inside a DropDown.Container")
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
