import React, {
  ForwardedRef,
  createContext,
  useCallback,
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
  value: Gtk.ListItem
  type: FactoryType
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
    const innerRef = useRef<Gtk.DropDown | null>(null)
    const items = useMemo<ItemRecord<T>>(() => ({}), [])
    const model = useMemo<Gtk.StringList>(() => new Gtk.StringList(), [])
    const [boundItems, setBoundItems] = useState<BoundItem[]>([])

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
        const onFactoryBind = (object: GObject.Object) => {
          const value = object as Gtk.ListItem

          setBoundItems((boundItems) => [
            ...boundItems,
            {
              value,
              type,
            },
          ])
        }

        const onFactoryUnbind = (object: GObject.Object) => {
          setBoundItems((boundItems) =>
            boundItems.filter((item) => item.value !== object)
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
      let teardownItemFactory: (() => void) | null = null
      let teardownPopoverItemFactory: (() => void) | null = null

      if (itemFactory) {
        teardownItemFactory = setupFactory(itemFactory, "item")
      }

      if (popoverItemFactory) {
        teardownPopoverItemFactory = setupFactory(
          popoverItemFactory,
          "popoverItem"
        )
      }

      return () => {
        teardownItemFactory?.()
        teardownPopoverItemFactory?.()
      }
    }, [renderItem, renderPopoverItem])

    useImperativeHandle(ref, () => innerRef.current!)

    return (
      <>
        {createPortal(
          boundItems.map(({ type, value }) => {
            const renderFn = type === "item" ? renderItem : renderPopoverItem

            if (!renderFn) {
              return null
            }

            const listItem = value
            const item = listItem.item
            const id = item.getProperty("string") as string

            return (
              <React.Fragment key={`${type}-${id}`}>
                {renderFn((node) => {
                  if (node) {
                    listItem.setChild(node)
                  }
                }, items[id].value)}
              </React.Fragment>
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
        <Context.Provider
          value={{
            items,
            model,
          }}
        >
          {children}
        </Context.Provider>
      </>
    )
  }
)

interface ItemProps {
  value: unknown
  id: string
}

const Item = function DropDownItemComponent({ value, id }: ItemProps) {
  const context = React.useContext(Context)

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
