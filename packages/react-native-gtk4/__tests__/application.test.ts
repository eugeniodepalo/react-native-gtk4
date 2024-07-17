import GLib from "@/generated/girs/node-glib-2.0"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import gi from "@/generated/girs/node-gtk.js"
import Application, { MAX_TIMEOUT } from "@/application.js"
import { ApplicationWindow } from "@/generated/widgets.js"

jest.mock("react")
jest.mock("@/generated/widgets/Widget.js")
jest.mock("@/generated/widgets/Window.js")
jest.mock("@/generated/widgets/ApplicationWindow.js")

const mockedGLibMainLoopNew = GLib.MainLoop.new as jest.MockedFunction<
  typeof GLib.MainLoop.new
>

describe("Application", () => {
  let application: Gtk.Application
  let rootNode: Application
  let loop: GLib.MainLoop

  beforeEach(() => {
    mockedGLibMainLoopNew.mockImplementation(() => {
      return {
        run: jest.fn(),
        quit: jest.fn(),
        isRunning: jest.fn(),
        getContext: jest.fn(),
        ref: jest.fn(),
        unref: jest.fn(),
      }
    })

    application = new Gtk.Application()
    rootNode = new Application(application)
    loop = mockedGLibMainLoopNew.mock.results[0].value
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

      const mockedApplicationOn = application.on as jest.Mock
      const [, onActivate] = mockedApplicationOn.mock.calls[0]

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

      const mockedApplicationOn = application.on as jest.MockedFunction<
        typeof application.on
      >

      const [, onActivate] = mockedApplicationOn.mock.calls[0]

      onActivate()

      const { quit } = rootNode.context
      const mockedSetTimeout = global.setTimeout as jest.MockedFunction<
        typeof setTimeout
      >
      const timeout = mockedSetTimeout.mock.results[0].value
      const result = quit()

      expect(result).toBe(false)
      expect(application.quit).toHaveBeenCalled()
      expect(loop.quit).toHaveBeenCalled()
      expect(clearTimeout).toHaveBeenCalledWith(timeout)
    })
  })

  describe("appendChild", () => {
    test("should set application on application windows", () => {
      const child = new ApplicationWindow({}, ApplicationWindow.createNode())

      child.node = new Gtk.ApplicationWindow()

      rootNode.appendChild(child)

      expect(child.node.setApplication).toHaveBeenCalledWith(application)
    })
  })

  describe("insertBefore", () => {
    test("should set application on application windows", () => {
      const child1 = {} as any
      const child2 = {} as any
      const child3 = new ApplicationWindow({}, ApplicationWindow.createNode())

      child3.node = new Gtk.ApplicationWindow()

      rootNode.appendChild(child1)
      rootNode.appendChild(child2)

      rootNode.insertBefore(child3, child2)

      expect(child3.node.setApplication).toHaveBeenCalledWith(application)
    })
  })
})
