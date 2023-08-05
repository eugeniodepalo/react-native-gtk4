import Gtk from "@girs/node-gtk-4.0"
import { Reconciler } from "./reconciler.js"
import NodeContainer from "./container/node.js"
import ApplicationContainer from "./container/application.js"

const PRIVATE_CONTAINER_KEY = Symbol("container")

type RootNode<T> = T & {
  [PRIVATE_CONTAINER_KEY]?: NodeContainer<T>
}

export function createContainer<
  T,
  U = T extends Gtk.Application ? ApplicationContainer : NodeContainer<T>,
>(node: RootNode<T>, reconciler?: Reconciler): U {
  let container = node[PRIVATE_CONTAINER_KEY]

  if (!container) {
    if (node instanceof Gtk.Application) {
      container = new ApplicationContainer(node, reconciler)
    } else {
      container = new NodeContainer(node, reconciler)
    }

    node[PRIVATE_CONTAINER_KEY] = container
  }

  return container as U
}

export function destroyContainer<T>(node: RootNode<T>): void {
  const container = node[PRIVATE_CONTAINER_KEY]

  if (container) {
    container.destroy()
    delete node[PRIVATE_CONTAINER_KEY]
  }
}
