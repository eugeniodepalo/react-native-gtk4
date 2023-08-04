import AbstractNode from "../abstract/node.js"
import { Reconciler } from "../reconciler.js"
import Window from "../generated/widgets/Window.js"
import Widget from "../generated/widgets/Widget.js"

let currentTag = 0

export default class BaseContainer<T = any, U = any> extends AbstractNode<
  T,
  U
> {
  private container: any
  private reconciler: Reconciler

  constructor(node: T, reconciler = Reconciler) {
    super(node)

    this.reconciler = reconciler

    this.container = reconciler.createContainer(
      this,
      0,
      null,
      false,
      null,
      (currentTag++).toString(),
      /* istanbul ignore next */ () => {},
      null
    )
  }

  render(element: React.ReactNode) {
    this.reconciler.updateContainer(
      element,
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

  removeChild(child: AbstractNode<U>): void {
    super.removeChild(child)

    if (child instanceof Window) {
      child.node.destroy()
    } else if (child instanceof Widget) {
      child.node.unparent()
    }
  }
}
