import { Reconciler } from "./reconciler.js"
import Application from "./application.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"

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
