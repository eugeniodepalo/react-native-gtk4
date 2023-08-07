import GObject from "@girs/node-gobject-2.0"
import Gtk from "@girs/node-gtk-4.0"
import React, { createRef, useEffect, useMemo } from "react"
import { createContainer, destroyContainer } from "../container.js"
import { createReconciler } from "../reconciler.js"
import { ListProviderItemRecord } from "../components/ListProvider.js"

export type ListItemFactoryRenderFunction<T> = (
  value: T | null
) => React.ReactElement & React.RefAttributes<Gtk.Widget>

interface Props<T> {
  render?: ListItemFactoryRenderFunction<T>
  itemsRef: React.RefObject<ListProviderItemRecord<T>>
}

export default function useListItemFactory<T>({
  render,
  itemsRef,
}: Props<T>): Gtk.SignalListItemFactory | null {
  const factory = useMemo<Gtk.SignalListItemFactory>(
    () => new Gtk.SignalListItemFactory(),
    []
  )

  useEffect(() => {
    const items = itemsRef.current

    if (!render || !items) {
      return
    }

    const reconciler = createReconciler()

    const onFactorySetup = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const ref = createRef<Gtk.Widget>()
      const element = render(null)
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

      container.render(render(item.value))
    }

    const onFactoryUnbind = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const container = createContainer(listItem)
      container.render(render(null))
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
  }, [render])

  return render ? factory : null
}
