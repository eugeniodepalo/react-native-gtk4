import { Inscription } from "@/generated/widgets.js"
import Pango from "@/generated/girs/node-pango-1.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Inscription", () => {
  let widget: Inscription

  beforeEach(() => {
    widget = new Inscription({}, Inscription.createNode())
  })

  test("should set attributes", () => {
    const newValue = undefined
    widget.set("attributes", newValue)
    expect(widget.node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set markup", () => {
    const newValue = "Some String"
    widget.set("markup", newValue)
    expect(widget.node.setMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set minChars", () => {
    const newValue = 1
    widget.set("minChars", newValue)
    expect(widget.node.setMinChars).toHaveBeenCalledWith(newValue)
  })

  test("should set minLines", () => {
    const newValue = 1
    widget.set("minLines", newValue)
    expect(widget.node.setMinLines).toHaveBeenCalledWith(newValue)
  })

  test("should set natChars", () => {
    const newValue = 1
    widget.set("natChars", newValue)
    expect(widget.node.setNatChars).toHaveBeenCalledWith(newValue)
  })

  test("should set natLines", () => {
    const newValue = 1
    widget.set("natLines", newValue)
    expect(widget.node.setNatLines).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set textOverflow", () => {
    const newValue = Gtk.InscriptionOverflow.CLIP
    widget.set("textOverflow", newValue)
    expect(widget.node.setTextOverflow).toHaveBeenCalledWith(newValue)
  })

  test("should set wrapMode", () => {
    const newValue = Pango.WrapMode.WORD
    widget.set("wrapMode", newValue)
    expect(widget.node.setWrapMode).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 1
    widget.set("xalign", newValue)
    expect(widget.node.setXalign).toHaveBeenCalledWith(newValue)
  })

  test("should set yalign", () => {
    const newValue = 1
    widget.set("yalign", newValue)
    expect(widget.node.setYalign).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyAttributes", () => {
    const callback = jest.fn()

    widget.set("onNotifyAttributes", callback)

    const handler = widget.handlers["notify::attributes"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::attributes",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyMarkup", callback)

    const handler = widget.handlers["notify::markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::markup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinChars", callback)

    const handler = widget.handlers["notify::min-chars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-chars",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinLines", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinLines", callback)

    const handler = widget.handlers["notify::min-lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyNatChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyNatChars", callback)

    const handler = widget.handlers["notify::nat-chars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::nat-chars",
      expect.any(Function)
    )
  })

  test("should connect onNotifyNatLines", () => {
    const callback = jest.fn()

    widget.set("onNotifyNatLines", callback)

    const handler = widget.handlers["notify::nat-lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::nat-lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyText", () => {
    const callback = jest.fn()

    widget.set("onNotifyText", callback)

    const handler = widget.handlers["notify::text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTextOverflow", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextOverflow", callback)

    const handler = widget.handlers["notify::text-overflow"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text-overflow",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWrapMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyWrapMode", callback)

    const handler = widget.handlers["notify::wrap-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrap-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifyXalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyXalign", callback)

    const handler = widget.handlers["notify::xalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::xalign",
      expect.any(Function)
    )
  })

  test("should connect onNotifyYalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyYalign", callback)

    const handler = widget.handlers["notify::yalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::yalign",
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
})
