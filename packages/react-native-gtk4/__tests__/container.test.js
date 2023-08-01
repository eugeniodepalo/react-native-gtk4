import GLib from "@girs/node-glib-2.0"
import Gtk from "@girs/node-gtk-4.0"
import gi from "@girs/node-gtk"
import { Container, MAX_TIMEOUT } from "../src/container.js"
import { Reconciler } from "../src/reconciler.js"
import {
  PRIVATE_CONTAINER_KEY,
  withApplicationContext,
} from "../src/components/ApplicationProvider.js"
import { ApplicationWindow, Window } from "../src/generated/widgets.js"

jest.mock("react")
jest.mock("../src/generated/widgets/Window.js")
jest.mock("../src/generated/widgets/ApplicationWindow.js")
jest.mock("../src/components/ApplicationProvider.js")
jest.mock("../src/reconciler.js")

describe("Container", () => {
  let application
  let container
  let reconciler
  let loop

  beforeEach(() => {
    Reconciler.createContainer.mockImplementation(() => ({}))
    withApplicationContext.mockImplementation(() => ({}))

    GLib.MainLoop.new.mockImplementation(() => ({
      run: jest.fn(),
      quit: jest.fn(),
    }))

    application = new Gtk.Application()
    container = new Container(application)
    reconciler = Reconciler.createContainer.mock.results[0].value
    loop = GLib.MainLoop.new.mock.results[0].value
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect(container.context).toMatchObject({
        application,
        quit: expect.any(Function),
        [PRIVATE_CONTAINER_KEY]: container,
      })

      expect(container.reconciler).toBe(reconciler)
      expect(container.loop).toBe(loop)

      expect(Reconciler.createContainer).toHaveBeenCalledWith(
        container,
        0,
        null,
        false,
        null,
        "0",
        expect.any(Function),
        null
      )

      expect(GLib.MainLoop.new).toHaveBeenCalledWith(null, false)
    })
  })

  describe("render", () => {
    test("should start application and loop", () => {
      jest.useFakeTimers()
      jest.spyOn(global, "setTimeout")

      const element = {}

      container.render(element)

      expect(application.run).toHaveBeenCalledWith([])

      expect(application.on).toHaveBeenCalledWith(
        "activate",
        expect.any(Function)
      )

      const [, onActivate] = application.on.mock.calls[0]

      onActivate()

      expect(Reconciler.updateContainer).toHaveBeenCalledWith(
        withApplicationContext.mock.results[0].value,
        reconciler,
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

      container.appendChild(child)

      expect(child.node.setApplication).toHaveBeenCalledWith(application)
    })
  })

  describe("removeChild", () => {
    test("should unparent widgets", () => {
      const child = { node: { unparent: jest.fn() } }

      container.appendChild(child)

      container.removeChild(child)

      expect(child.node.unparent).toHaveBeenCalled()
    })

    test("should destroy window", () => {
      const child = new Window()

      child.node = new Gtk.Window()

      container.appendChild(child)

      container.removeChild(child)

      expect(child.node.destroy).toHaveBeenCalled()
    })
  })

  describe("insertBefore", () => {
    test("should set application on application windows", () => {
      const child1 = {}
      const child2 = {}
      const child3 = new ApplicationWindow()

      child3.node = new Gtk.ApplicationWindow()

      container.appendChild(child1)
      container.appendChild(child2)

      container.insertBefore(child3, child2)

      expect(child3.node.setApplication).toHaveBeenCalledWith(application)
    })
  })
})
