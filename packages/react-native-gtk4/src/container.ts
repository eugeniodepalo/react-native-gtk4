import { Reconciler, getWidgetClass } from "./reconciler.js"
import Application from "./application.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"
import Gtk from "@girs/node-gtk-4.0"
import Widget from "./generated/widgets/Widget.js"
import Node from "./node.js"

export const PRIVATE_CONTAINER_KEY = Symbol("container")

type WithContainer<T> = T & {
  [PRIVATE_CONTAINER_KEY]?: Container<RootNode<T>>
}

type RootNode<T> = T extends Gtk.Application
  ? Application
  : T extends Gtk.Widget
  ? Widget<T>
  : Node<T>

function createRootNode<T>(node: T): RootNode<T> {
  if (node instanceof Gtk.Application) {
    return new Application(node) as RootNode<T>
  } else if (node instanceof Gtk.Widget) {
    const Widget = getWidgetClass(node.constructor.name.replace(/^Gtk/, ""))
    return new Widget({}, node) as RootNode<T>
  } else {
    return new Node(node) as RootNode<T>
  }
}

export function createContainer<T>(
  node: WithContainer<T>,
  reconciler?: Reconciler
): Container<RootNode<T>> {
  let container = node[PRIVATE_CONTAINER_KEY]

  if (!container) {
    container = new Container(createRootNode(node), reconciler)
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

export default class Container<T> {
  static currentTag = 0

  rootNode: T
  private container: any
  private reconciler: Reconciler

  constructor(rootNode: T, reconciler = Reconciler) {
    this.rootNode = rootNode
    this.reconciler = reconciler

    this.container = reconciler.createContainer(
      this.rootNode,
      0,
      null,
      false,
      null,
      (Container.currentTag++).toString(),
      /* istanbul ignore next */ () => {},
      null
    )
  }

  render(element: React.ReactNode) {
    const rootElement =
      this.rootNode instanceof Application
        ? withApplicationContext(element, this.rootNode.context)
        : element

    this.reconciler.updateContainer(
      rootElement,
      this.container,
      null,
      /* istanbul ignore next */ () => {}
    )
  }

  commit() {
    this.reconciler.flushSync(() => {})
    this.reconciler.flushPassiveEffects()
    this.reconciler.flushControlled(() => {})
  }

  destroy() {
    this.reconciler.updateContainer(null, this.container, null, () => {})
  }
}
