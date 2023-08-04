import Gtk from "@girs/node-gtk-4.0"
import ApplicationContainer from "./containers/application.js"
import BaseContainer from "./containers/base.js"
import { Reconciler } from "./reconciler.js"

const PRIVATE_CONTAINER_KEY = Symbol("container")

type RootNode<T> = T & {
  [PRIVATE_CONTAINER_KEY]?: BaseContainer<T>
}

export function createContainerForRootNode<
  T,
  U = T extends Gtk.Application ? ApplicationContainer : BaseContainer<T>,
>(node: RootNode<T>, reconciler?: Reconciler): U {
  let container = node[PRIVATE_CONTAINER_KEY]

  if (!container) {
    if (node instanceof Gtk.Application) {
      container = new ApplicationContainer(node, reconciler)
    } else {
      container = new BaseContainer(node, reconciler)
    }

    node[PRIVATE_CONTAINER_KEY] = container
  }

  return container as U
}

export function destroyContainerForRootNode<T>(node: RootNode<T>): void {
  const container = node[PRIVATE_CONTAINER_KEY]

  if (container) {
    container.destroy()
    delete node[PRIVATE_CONTAINER_KEY]
  }
}
