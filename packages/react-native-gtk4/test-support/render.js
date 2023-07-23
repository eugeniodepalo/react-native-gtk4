import Container from "../src/container"
import Gtk from "@girs/node-gtk-4.0"
import { createReconciler } from "../src/reconciler.js"
import { withApplicationContext } from "../src/components/ApplicationProvider.js"
import "../src/overrides.js"

const reconciler = createReconciler()
jest.spyOn(reconciler, "createContainer")
jest.useFakeTimers()

export class Renderer {
  setup() {
    const application = new Gtk.Application()

    application.getActiveWindow = jest.fn(() => application.activeWindow)

    Gtk.ApplicationWindow.prototype.show = jest.fn(function () {
      application.activeWindow = this
    })

    Gtk.ApplicationWindow.prototype.hide = jest.fn(function () {
      application.activeWindow = null
    })

    Gtk.ApplicationWindow.prototype.destroy = jest.fn(function () {
      application.activeWindow = null
    })

    Gtk.ApplicationWindow.prototype.present = jest.fn(function () {
      application.activeWindow = this
    })

    this.application = application
    this.container = new Container(application, reconciler)
    this.instance = reconciler.createContainer.mock.results[0].value

    this.applicationContext = {
      application,
      quit: jest.fn(),
    }
  }

  render(element) {
    reconciler.updateContainer(
      withApplicationContext(element, this.applicationContext),
      this.instance,
      null,
      () => {}
    )

    jest.runAllTimers()

    return this.container.children
  }
}

const renderer = new Renderer()

export function setupRenderer() {
  renderer.setup()
}

export function render(element) {
  return renderer.render(element)
}
