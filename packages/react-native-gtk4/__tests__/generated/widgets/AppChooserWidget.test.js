import { AppChooserWidget } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AppChooserWidget", () => {
  let widget

  beforeEach(() => {
    widget = new AppChooserWidget({})
  })

  test("should set construct only props", () => {
    const props = {
      contentType: "Some String",
    }

    new AppChooserWidget(props)

    expect(Gtk.AppChooserWidget).toHaveBeenCalledWith(props)
  })

  test("should set defaultText", () => {
    const newValue = "Some String"
    widget.set("defaultText", newValue)
    expect(widget.node.setDefaultText).toHaveBeenCalledWith(newValue)
  })

  test("should set showAll", () => {
    const newValue = true
    widget.set("showAll", newValue)
    expect(widget.node.setShowAll).toHaveBeenCalledWith(newValue)
  })

  test("should set showDefault", () => {
    const newValue = true
    widget.set("showDefault", newValue)
    expect(widget.node.setShowDefault).toHaveBeenCalledWith(newValue)
  })

  test("should set showFallback", () => {
    const newValue = true
    widget.set("showFallback", newValue)
    expect(widget.node.setShowFallback).toHaveBeenCalledWith(newValue)
  })

  test("should set showOther", () => {
    const newValue = true
    widget.set("showOther", newValue)
    expect(widget.node.setShowOther).toHaveBeenCalledWith(newValue)
  })

  test("should set showRecommended", () => {
    const newValue = true
    widget.set("showRecommended", newValue)
    expect(widget.node.setShowRecommended).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onApplicationActivated", () => {
    const callback = jest.fn()

    widget.set("onApplicationActivated", callback)

    const handler = widget.handlers["application-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "application-activated",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onApplicationSelected", () => {
    const callback = jest.fn()

    widget.set("onApplicationSelected", callback)

    const handler = widget.handlers["application-selected"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "application-selected",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyDefaultText", () => {
    const callback = jest.fn()

    widget.set("onNotifyDefaultText", callback)

    const handler = widget.handlers["notify::default-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::default-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowAll", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowAll", callback)

    const handler = widget.handlers["notify::show-all"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-all",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowDefault", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowDefault", callback)

    const handler = widget.handlers["notify::show-default"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-default",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowFallback", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowFallback", callback)

    const handler = widget.handlers["notify::show-fallback"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-fallback",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowOther", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowOther", callback)

    const handler = widget.handlers["notify::show-other"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-other",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowRecommended", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowRecommended", callback)

    const handler = widget.handlers["notify::show-recommended"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-recommended",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()

    widget.set("onNotifyAccessibleRole", callback)

    const handler = widget.handlers["notify::accessible-role"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })

  test("should connect onNotifyContentType", () => {
    const callback = jest.fn()

    widget.set("onNotifyContentType", callback)

    const handler = widget.handlers["notify::content-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::content-type",
      expect.any(Function)
    )
  })
})
