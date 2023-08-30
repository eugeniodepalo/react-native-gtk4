import Gtk from "@girs/node-gtk-4.0"
import { Reconciler, getWidgetClass } from "./reconciler.js"
import NodeContainer from "./containers/node.js"
import ApplicationContainer from "./containers/application.js"
import WidgetContainer from "./containers/widget.js"

export const PRIVATE_CONTAINER_KEY = Symbol("container")

export function createContainer(
  node: any,
  reconciler?: Reconciler
): NodeContainer {
  let container = node[PRIVATE_CONTAINER_KEY]

  if (!container) {
    if (node instanceof Gtk.Application) {
      container = new ApplicationContainer(node, reconciler)
    } else if (node instanceof Gtk.Widget) {
      const Widget = getWidgetClass(node.constructor.name.replace(/^Gtk/, ""))
      container = new WidgetContainer(new Widget({}, node), reconciler)
    } else {
      container = new NodeContainer(node, reconciler)
    }

    node[PRIVATE_CONTAINER_KEY] = container
  }

  return container
}

export function destroyContainer(node: any): void {
  const container = node[PRIVATE_CONTAINER_KEY]

  if (container) {
    container.destroy()
    delete node[PRIVATE_CONTAINER_KEY]
  }
}
