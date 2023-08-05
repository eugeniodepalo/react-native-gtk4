import GLib from "@girs/node-glib-2.0"
import Gtk from "@girs/node-gtk-4.0"
import gi from "@girs/node-gtk"
import ApplicationContainer, {
  MAX_TIMEOUT,
} from "../../src/container/application.js"
import { withApplicationContext } from "../../src/components/ApplicationProvider.js"
import { Reconciler } from "../../src/reconciler.js"
import { ApplicationWindow } from "../../src/generated/widgets.js"

jest.mock("react")
jest.mock("../../src/generated/widgets/Widget.js")
jest.mock("../../src/generated/widgets/Window.js")
jest.mock("../../src/generated/widgets/ApplicationWindow.js")
jest.mock("../../src/components/ApplicationProvider.js")
jest.mock("../../src/reconciler.js")

describe("ApplicationContainer", () => {
  let application
  let applicationContainer
  let container
  let loop

  beforeEach(() => {
    Reconciler.createContainer.mockImplementation(() => ({}))
    withApplicationContext.mockImplementation(() => ({}))

    GLib.MainLoop.new.mockImplementation(() => ({
      run: jest.fn(),
      quit: jest.fn(),
    }))

    application = new Gtk.Application()
    applicationContainer = new ApplicationContainer(application)
    container = Reconciler.createContainer.mock.results[0].value
    loop = GLib.MainLoop.new.mock.results[0].value
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect(GLib.MainLoop.new).toHaveBeenCalledWith(null, false)
    })
  })

  describe("render", () => {
    test("should start application and loop", () => {
      jest.useFakeTimers()
      jest.spyOn(global, "setTimeout")

      const element = {}

      applicationContainer.render(element)

      expect(application.run).toHaveBeenCalledWith([])

      expect(application.on).toHaveBeenCalledWith(
        "activate",
        expect.any(Function)
      )

      const [, onActivate] = application.on.mock.calls[0]

      onActivate()

      expect(Reconciler.updateContainer).toHaveBeenCalledWith(
        withApplicationContext.mock.results[0].value,
        container,
        null,
        expect.any(Function)
      )

      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), MAX_TIMEOUT)
      expect(gi.startLoop).toHaveBeenCalled()
      expect(loop.run).toHaveBeenCalled()

      jest.runOnlyPendingTimers()

      expect(setTimeout).toHaveBeenNthCalledWith(
        2,
        expect.any(Function),
        MAX_TIMEOUT
      )
    })
  })

  describe("appendChild", () => {
    test("should set application on application windows", () => {
      const child = new ApplicationWindow()

      child.node = new Gtk.ApplicationWindow()

      applicationContainer.appendChild(child)

      expect(child.node.setApplication).toHaveBeenCalledWith(application)
    })
  })

  describe("insertBefore", () => {
    test("should set application on application windows", () => {
      const child1 = {}
      const child2 = {}
      const child3 = new ApplicationWindow()

      child3.node = new Gtk.ApplicationWindow()

      applicationContainer.appendChild(child1)
      applicationContainer.appendChild(child2)

      applicationContainer.insertBefore(child3, child2)

      expect(child3.node.setApplication).toHaveBeenCalledWith(application)
    })
  })
})
