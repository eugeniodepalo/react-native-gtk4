import { createReconciler } from "../../reconciler.js"
import Container from "../../container.js"
import { createApplication } from "./application.js"
import { RenderedTree } from "./tree.js"
import { withApplicationContext } from "../../components/ApplicationProvider.js"
import { Portal } from "../../portal.js"
import "../../overrides.js"

const reconciler = createReconciler()

jest.spyOn(reconciler, "createContainer")
jest.useFakeTimers()

export class Renderer {
  setup() {
    const application = createApplication()

    this.application = application
    this.container = new Container(application, reconciler)
    this.instance = reconciler.createContainer.mock.results[0].value

    this.applicationContext = {
      application,
      quit: jest.fn(),
    }

    Portal.instances = []
  }

  render(element) {
    reconciler.updateContainer(
      withApplicationContext(element, this.applicationContext),
      this.instance,
      null,
      () => {}
    )

    reconciler.flushSync(() => {})
    reconciler.flushControlled(() => {})
    reconciler.flushPassiveEffects()
    jest.runAllTimers()

    return new RenderedTree(this.container, Portal.instances)
  }
}
