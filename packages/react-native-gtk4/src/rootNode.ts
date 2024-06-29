import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Application from "./application.js"
import Widget from "./generated/widgets/Widget.js"
import { getWidgetClass } from "./reconciler.js"
import Node from "./node.js"

export const ROOT_NODE_KEY = Symbol("react-native-gtk4.rootNode")

export type RootNode<T> = T extends Gtk.Application
  ? Application
  : T extends Gtk.Widget
    ? Widget<T>
    : Node<T>

export type WithRootNode<T> = T & {
  [ROOT_NODE_KEY]?: RootNode<T>
}

export function createRootNode<T>(node: WithRootNode<T>): RootNode<T> {
  let rootNode = node[ROOT_NODE_KEY]

  if (!rootNode) {
    if (node instanceof Gtk.Application) {
      rootNode = new Application(node) as RootNode<T>
    } else if (node instanceof Gtk.Widget) {
      const Widget = getWidgetClass(node.constructor.name.replace(/^Gtk/, ""))
      rootNode = new Widget({}, node) as RootNode<T>
    } else {
      rootNode = new Node(node) as RootNode<T>
    }

    node[ROOT_NODE_KEY] = rootNode
  }

  return rootNode
}
