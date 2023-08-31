import GLib from "@girs/node-glib-2.0"
import Gtk from "@girs/node-gtk-4.0"
import gi from "@girs/node-gtk"
import Application, { MAX_TIMEOUT } from "../src/application.js"
import { ApplicationWindow } from "../src/generated/widgets.js"

jest.mock("react")
jest.mock("../src/generated/widgets/Widget.js")
jest.mock("../src/generated/widgets/Window.js")
jest.mock("../src/generated/widgets/ApplicationWindow.js")

describe("Application", () => {
  let application
  let rootNode
  let loop

  beforeEach(() => {
    GLib.MainLoop.new.mockImplementation(() => ({
      run: jest.fn(),
      quit: jest.fn(),
    }))

    application = new Gtk.Application()
    rootNode = new Application(application)
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

      rootNode.run(() => {})

      expect(application.run).toHaveBeenCalledWith([])

      expect(application.on).toHaveBeenCalledWith(
        "activate",
        expect.any(Function)
      )

      const [, onActivate] = application.on.mock.calls[0]

      onActivate()

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

    test("exposes an application context", () => {
      jest.useFakeTimers()
      jest.spyOn(global, "setTimeout")
      jest.spyOn(global, "clearTimeout")

      rootNode.run(() => {})

      const [, onActivate] = application.on.mock.calls[0]

      onActivate()

      const { quit } = rootNode.context
      const timeout = setTimeout.mock.results[0].value
      const result = quit()

      expect(result).toBe(false)
      expect(application.quit).toHaveBeenCalled()
      expect(loop.quit).toHaveBeenCalled()
      expect(clearTimeout).toHaveBeenCalledWith(timeout)
    })
  })

  describe("appendChild", () => {
    test("should set application on application windows", () => {
      const child = new ApplicationWindow()

      child.node = new Gtk.ApplicationWindow()

      rootNode.appendChild(child)

      expect(child.node.setApplication).toHaveBeenCalledWith(application)
    })
  })

  describe("insertBefore", () => {
    test("should set application on application windows", () => {
      const child1 = {}
      const child2 = {}
      const child3 = new ApplicationWindow()

      child3.node = new Gtk.ApplicationWindow()

      rootNode.appendChild(child1)
      rootNode.appendChild(child2)

      rootNode.insertBefore(child3, child2)

      expect(child3.node.setApplication).toHaveBeenCalledWith(application)
    })
  })
})
