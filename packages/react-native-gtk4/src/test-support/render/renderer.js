import { Reconciler } from "../../reconciler.js"
import { Container } from "../../container.js"
import { createApplication } from "./application.js"
import { RenderedTree } from "./tree.js"
import { withApplicationContext } from "../../components/ApplicationProvider.js"
import { Portal } from "../../portal.js"
import "../../overrides.js"

jest.useFakeTimers()
jest.spyOn(Reconciler, "createContainer")

export class Renderer {
  setup() {
    const application = createApplication()

    this.application = application
    this.container = new Container(application)
    this.instance = Reconciler.createContainer.mock.results[0].value

    this.applicationContext = {
      application,
      quit: jest.fn(),
    }

    Portal.instances = []
  }

  render(element) {
    Reconciler.updateContainer(
      withApplicationContext(element, this.applicationContext),
      this.instance,
      null,
      () => {}
    )

    jest.spyOn(console, "error").mockImplementation(() => {})
    Reconciler.flushSync(() => {})
    Reconciler.flushControlled(() => {})
    Reconciler.flushPassiveEffects()
    jest.runAllTimers()
    console.error.mockRestore()

    return new RenderedTree(this.container, Portal.instances)
  }
}
