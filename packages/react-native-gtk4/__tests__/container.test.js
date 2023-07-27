import React from "react"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import gi from "@girs/node-gtk"
import { Container, MAX_TIMEOUT } from "../src/container.js"
import { Reconciler } from "../src/reconciler.js"
import ApplicationWindow from "../src/generated/widgets/ApplicationWindow.js"
import { withApplicationContext } from "../src/components/ApplicationProvider.js"

jest.mock("react")
jest.mock("../src/generated/widgets/ApplicationWindow.js")
jest.mock("../src/components/ApplicationProvider.js")
jest.mock("../src/reconciler.js")

describe("Container", () => {
  let application
  let container

  beforeEach(() => {
    GLib.MainLoop.new.mockReturnValue({
      run: jest.fn(),
      quit: jest.fn(),
    })

    Reconciler.createContainer = jest.fn()
    Reconciler.updateContainer = jest.fn()

    application = new Gtk.Application()
    container = new Container(application)
  })

  test("should set application property for ApplicationWindow", () => {
    ApplicationWindow.mockImplementation(() =>
      Object.assign(Object.create(ApplicationWindow.prototype), {
        node: {
          setApplication: jest.fn(),
        },
      })
    )

    const window = new ApplicationWindow()
    container.appendChild(window)
    expect(window.node.setApplication).toHaveBeenCalledWith(application)
  })

  test("should set application property for ApplicationWindow when inserting", () => {
    ApplicationWindow.mockImplementation(() =>
      Object.assign(Object.create(ApplicationWindow.prototype), {
        node: {
          setApplication: jest.fn(),
        },
      })
    )

    const window1 = new ApplicationWindow()
    const window2 = new ApplicationWindow()

    container.appendChild(window1)
    container.insertBefore(window2, window1)

    expect(window2.node.setApplication).toHaveBeenCalledWith(application)
  })

  test("should run the application", () => {
    jest.useFakeTimers()
    jest.spyOn(global, "setTimeout")

    application = new Gtk.Application()
    container = new Container(application)
    container.render(React.createElement("SomeWidget"))

    expect(application.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    )

    expect(GLib.MainLoop.new).toHaveBeenCalledWith(null, false)
    expect(application.run).toHaveBeenCalledWith([])

    application.on.mock.calls[0][1]()

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), MAX_TIMEOUT)
    expect(GLib.MainLoop.new.mock.results[0].value.run).toHaveBeenCalled()
    expect(gi.startLoop).toHaveBeenCalled()
  })

  test("should expose an application context", () => {
    jest.useFakeTimers()
    jest.spyOn(global, "setTimeout")
    jest.spyOn(global, "clearTimeout")

    const element = React.createElement("SomeWidget")
    container.render(element)

    application.on.mock.calls[0][1]()

    expect(withApplicationContext).toHaveBeenCalledWith(
      element,
      expect.any(Object)
    )

    const context = withApplicationContext.mock.calls[0][1]
    const loop = GLib.MainLoop.new.mock.results[0].value
    const timeout = setTimeout.mock.results[0].value
    const result = context.quit()

    expect(result).toBe(false)
    expect(context.application).toBe(application)
    expect(application.quit).toHaveBeenCalled()
    expect(loop.quit).toHaveBeenCalled()
    expect(clearTimeout).toHaveBeenCalledWith(timeout)
  })
})
