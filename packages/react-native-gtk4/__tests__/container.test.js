import React from "react"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import gi from "@girs/node-gtk"
import Container, { MAX_TIMEOUT } from "../src/container.js"
import Reconciler from "../src/reconciler.js"
import { createAnyWidget } from "../test-support/utils.js"

jest.mock("react")
jest.mock("../src/reconciler.js")

describe("Container", () => {
  let application
  let container
  let widget

  beforeEach(() => {
    GLib.MainLoop.new.mockReturnValue({
      run: jest.fn(),
    })

    Container.currentTag = 0

    application = new Gtk.Application()
    container = new Container(application)
    widget = createAnyWidget()
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
    const widget2 = createAnyWidget()

    container.appendChild(widget)
    container.insertBefore(widget2, widget)

    expect(container.children.length).toBe(2)
    expect(container.children[0]).toBe(widget2)
  })

  test("should throw an error when trying to remove non-existing child", () => {
    expect(() => container.removeChild(widget)).toThrow(
      "Removed child not found"
    )
  })

  test("should run the application", () => {
    jest.useFakeTimers()
    jest.spyOn(global, "setTimeout")

    application = new Gtk.Application()
    container = new Container(application)

    expect(GLib.MainLoop.new).toHaveBeenCalledWith(null, false)

    expect(Reconciler.createContainer).toHaveBeenCalledWith(
      container,
      0,
      null,
      false,
      null,
      "1",
      expect.any(Function),
      null
    )

    container.render(React.createElement("SomeWidget"))

    expect(application.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    )

    expect(application.run).toHaveBeenCalledWith([])

    application.on.mock.calls[0][1]()

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), MAX_TIMEOUT)
    expect(GLib.MainLoop.new.mock.results[0].value.run).toHaveBeenCalled()
    expect(gi.startLoop).toHaveBeenCalled()
  })
})
