import GObject from "@girs/node-gobject-2.0"
import Gtk from "@girs/node-gtk-4.0"
import React, { createRef, useEffect, useMemo } from "react"
import { Reconciler, createReconciler } from "../reconciler.js"
import useListModel from "./useListModel.js"
import Container from "../container.js"
import { RootNode, createRootNode } from "../root-node.js"

export const PRIVATE_CONTAINER_KEY = Symbol(
  "react-native-gtk4.listItemContainer"
)

type ListItemContainer = Container<RootNode<Gtk.ListItem>>

type ListItemWithContainer = Gtk.ListItem & {
  [PRIVATE_CONTAINER_KEY]?: ListItemContainer
}

function createContainer(
  listItem: ListItemWithContainer,
  reconciler: Reconciler
): ListItemContainer {
  let container = listItem[PRIVATE_CONTAINER_KEY]

  if (!container) {
    container = new Container(createRootNode(listItem), reconciler)
    listItem[PRIVATE_CONTAINER_KEY] = container
  }

  return container
}

function destroyContainer(listItem: ListItemWithContainer) {
  const container = listItem[PRIVATE_CONTAINER_KEY]

  if (container) {
    container.destroy()
    delete listItem[PRIVATE_CONTAINER_KEY]
  }
}

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
      const container = createContainer(listItem, reconciler)

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
      const container = createContainer(listItem, reconciler)

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
