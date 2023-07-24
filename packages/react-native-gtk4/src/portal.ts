import { Reconciler, createReconciler } from "./reconciler.js"
import AnyWidget from "./widget.js"
import { Window } from "./generated/widgets.js"

export class Portal {
  static instances: Portal[] = []

  children: AnyWidget[] = []

  private static currentTag = 0
  private container: any
  private reconciler: Reconciler

  constructor(reconciler: Reconciler = createReconciler()) {
    Portal.instances.push(this)

    this.reconciler = reconciler

    this.container = this.reconciler.createContainer(
      this,
      0,
      null,
      false,
      null,
      (Portal.currentTag++).toString(),
      () => {},
      null
    )
  }

  destroy() {
    Portal.instances.splice(Portal.instances.indexOf(this), 1)
    this.render(null)
  }

  render(element: React.ReactNode) {
    this.reconciler.updateContainer(element, this.container, null, () => {})
  }

  appendChild(child: AnyWidget) {
    this.children.push(child)
  }

  removeChild(child: AnyWidget) {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Removed child not found")
    }

    this.children.splice(index, 1)

    if (child instanceof Window) {
      child.node.destroy()
    } else {
      child.node.unparent()
    }
  }

  insertBefore(child: AnyWidget, beforeChild: AnyWidget) {
    const beforeIndex = this.children.indexOf(beforeChild)
    const index = beforeIndex - 1

    if (beforeIndex === -1) {
      throw new Error("Before child not found")
    }

    if (index < 0) {
      this.children.unshift(child)
    } else {
      this.children.splice(index, 0, child)
    }
  }
}
