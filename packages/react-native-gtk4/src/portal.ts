import { Reconciler } from "./reconciler.js"
import AbstractContainer from "./abstract/container.js"
import { ApplicationContext } from "./components/ApplicationProvider.js"

export class Portal extends AbstractContainer {
  static instances: Portal[] = []

  constructor(context: ApplicationContext, reconciler?: Reconciler) {
    super(context, reconciler)
    Portal.instances.push(this)
  }

  destroy() {
    Portal.instances.splice(Portal.instances.indexOf(this), 1)
    this.render(null)
  }

  render(element: React.ReactNode) {
    this.update(element)
  }
}
