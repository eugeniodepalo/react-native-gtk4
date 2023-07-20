import React from "react"
import Container, { MAX_TIMEOUT } from "../src/container.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import Widget from "../src/widget.js"
import gi from "@girs/node-gtk"

jest.mock("react")
jest.mock("../src/widget.js")

describe("Container", () => {
  let application
  let container
  let widget
  let loop

  beforeEach(() => {
    application = new Gtk.Application()

    loop = {
      run: jest.fn(),
      getContext: jest.fn(),
      isRunning: jest.fn(),
      quit: jest.fn(),
      unref: jest.fn(),
      ref: jest.fn(),
    }

    GLib.MainLoop.new.mockReturnValue(loop)
    container = new Container(application)
    widget = new Widget({})
  })

  test("should correctly append child", () => {
    container.appendChild(widget)
    expect(container.children.length).toBe(1)
    expect(container.children[0]).toBe(widget)
  })

  test("should correctly remove child", () => {
    container.appendChild(widget)
    container.removeChild(widget)
    expect(container.children.length).toBe(0)
  })

  test("should correctly insert child before another", () => {
    const secondWidget = new Widget({})
    container.appendChild(widget)
    container.insertBefore(secondWidget, widget)
    expect(container.children.length).toBe(2)
    expect(container.children[0]).toBe(secondWidget)
  })

  test("should throw an error when trying to remove non-existing child", () => {
    expect(() => container.removeChild(widget)).toThrow(
      "Removed child not found"
    )
  })

  test("should start the main loop", () => {
    jest.useFakeTimers()
    jest.spyOn(global, "setTimeout")
    application = new Gtk.Application()
    container = new Container(application)
    const element = React.createElement("SomeWidget")

    application.on.mockImplementation((_event, callback) => {
      callback()
    })

    container.render(element)

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), MAX_TIMEOUT)
    expect(application.run).toHaveBeenCalled()
    expect(GLib.MainLoop.new).toHaveBeenCalled()
    expect(loop.run).toHaveBeenCalled()
    expect(gi.startLoop).toHaveBeenCalled()
  })
})
