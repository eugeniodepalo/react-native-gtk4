import GObject from "@girs/node-gobject-2.0"
import Gtk from "@girs/node-gtk-4.0"
import React, { createRef, useEffect, useMemo } from "react"
import { createContainer, destroyContainer } from "../container.js"
import { createReconciler } from "../reconciler.js"
import useListModel from "./useListModel.js"

export type ListItemFactoryRenderFunction<T> = (
  value: T | null,
  listItem: Gtk.ListItem
) => React.ReactElement & React.RefAttributes<Gtk.Widget>

export default function useListItemFactory<T>(
  render?: ListItemFactoryRenderFunction<T>
): Gtk.SignalListItemFactory | null | undefined {
  const factory = useMemo(() => new Gtk.SignalListItemFactory(), [])
  const { items } = useListModel()

  useEffect(() => {
    if (!render) {
      return
    }

    const reconciler = createReconciler()

    const onFactorySetup = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const ref = createRef<Gtk.Widget>()
      const element = render(null, listItem)
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

      const item =
        listItem.item instanceof Gtk.TreeListRow
          ? listItem.item.item
          : listItem.item

      const id = item.getProperty("string") as string
      const value = items[id] as T

      container.render(render(value, listItem))
    }

    const onFactoryUnbind = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const container = createContainer(listItem)

      container.render(render(null, listItem))
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

  if (render === undefined || render === null) {
    return render
  }

  return factory
}
