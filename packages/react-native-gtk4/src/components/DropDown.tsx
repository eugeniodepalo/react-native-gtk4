import React, {
  ForwardedRef,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { DropDown } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import GObject from "@girs/node-gobject-2.0"
import _ from "lodash"

type FactoryType = "item" | "popoverItem"

type Props<T> = Omit<
  JSX.IntrinsicElements["DropDown"],
  "children" | "itemFactory" | "popoverItemFactory"
> & {
  children?: React.ReactNode
  renderPopoverItem?: (ref: ForwardedRef<any>, value?: T) => React.ReactNode
  renderItem?: (ref: ForwardedRef<any>, value?: T) => React.ReactNode
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

interface BoundItem {
  listItem: Gtk.ListItem
  type: FactoryType
}

const Context = createContext<Context | null>(null)

const Container = React.memo(
  forwardRef<Gtk.DropDown, Props<any>>(function DropDownComponent<T>(
    {
      children,
      renderItem,
      renderPopoverItem = renderItem,
      ...props
    }: Props<T>,
    ref: ForwardedRef<Gtk.DropDown>
  ) {
    const innerRef = useRef<Gtk.DropDown | null>(null)
    const items = useMemo<ItemRecord<T>>(() => ({}), [])
    const model = useMemo<Gtk.StringList>(() => new Gtk.StringList(), [])
    const [boundItems, setBoundItems] = useState<BoundItem[]>([])

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

    const PopoverItemComponent = useMemo(
      () =>
        renderPopoverItem
          ? forwardRef<any, { value: T }>(function PopoverItemComponent(
              { value },
              ref
            ) {
              return renderPopoverItem(ref, value)
            })
          : null,
      [renderPopoverItem]
    )

    const ItemComponent = useMemo(
      () =>
        renderItem
          ? forwardRef<any, { value: T }>(function ItemComponent(
              { value },
              ref
            ) {
              return renderItem(ref, value)
            })
          : null,
      [renderItem]
    )

    const setupFactory = useCallback(
      (factory: Gtk.SignalListItemFactory, type: FactoryType) => {
        const onFactoryBind = (object: GObject.Object) => {
          const listItem = object as Gtk.ListItem

          setBoundItems((boundItems) => [
            ...boundItems,
            {
              listItem,
              type,
            },
          ])
        }

        const onFactoryUnbind = (object: GObject.Object) => {
          setBoundItems((boundItems) =>
            boundItems.filter((item) => item.listItem !== object)
          )
        }

        factory.on("bind", onFactoryBind)
        factory.on("unbind", onFactoryUnbind)

        return () => {
          factory.off("bind", onFactoryBind)
          factory.off("unbind", onFactoryUnbind)
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

    useImperativeHandle(ref, () => innerRef.current!)

    return (
      <>
        {createPortal(
          boundItems.map(({ type, listItem }) => {
            const Component =
              type === "item" ? ItemComponent : PopoverItemComponent

            if (!Component) {
              return null
            }

            const item = listItem.item
            const id = item.getProperty("string") as string

            return (
              <Component
                key={`${type}-${id}`}
                ref={(node) => {
                  if (node) {
                    listItem.setChild(node)
                  }
                }}
                value={items[id].value}
              />
            )
          })
        )}
        <DropDown
          model={model}
          ref={innerRef}
          factory={renderItem ? itemFactory : undefined}
          listFactory={renderPopoverItem ? popoverItemFactory : undefined}
          {...props}
        />
        <Context.Provider value={value}>{children}</Context.Provider>
      </>
    )
  }),
  _.isEqual
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
