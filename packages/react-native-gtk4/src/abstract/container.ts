import AbstractNode from "./node.js"
import AbstractWidget from "./widget.js"
import Window from "../generated/widgets/Window.js"
import { Reconciler, createReconciler } from "../reconciler.js"
import { ApplicationContext } from "src/components/ApplicationProvider.js"

let currentTag = 0

export default abstract class AbstractContainer extends AbstractNode<AbstractWidget> {
  context: ApplicationContext
  protected container: any
  protected reconciler: Reconciler

  constructor(
    context: ApplicationContext,
    reconciler: Reconciler = createReconciler()
  ) {
    super()

    this.reconciler = reconciler
    this.context = context

    this.container = this.reconciler.createContainer(
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

  removeChild(child: AbstractWidget): void {
    super.removeChild(child)

    if (child instanceof Window) {
      child.node.destroy()
    } else {
      child.node.unparent()
    }
  }

  protected update(element: React.ReactNode) {
    this.reconciler.updateContainer(
      element,
      this.container,
      null,
      /* istanbul ignore next */ () => {}
    )
  }
}
