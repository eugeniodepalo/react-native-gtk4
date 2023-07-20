import { Window } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Window", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Window.mockImplementation(() => node)
    node = new Gtk.Window()
    widget = new Window({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set application", () => {
    const newValue = new Gtk.Application()
    widget.set("application", newValue)
    expect(node.setApplication).toHaveBeenCalledWith(newValue)
  })

  test("should set decorated", () => {
    const newValue = true
    widget.set("decorated", newValue)
    expect(node.setDecorated).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultHeight", () => {
    const newValue = 42
    widget.set("defaultHeight", newValue)
    expect(node.defaultHeight).toBe(newValue)
  })

  test("should set defaultWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("defaultWidget", newValue)
    expect(node.setDefaultWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultWidth", () => {
    const newValue = 42
    widget.set("defaultWidth", newValue)
    expect(node.defaultWidth).toBe(newValue)
  })

  test("should set deletable", () => {
    const newValue = true
    widget.set("deletable", newValue)
    expect(node.setDeletable).toHaveBeenCalledWith(newValue)
  })

  test("should set destroyWithParent", () => {
    const newValue = true
    widget.set("destroyWithParent", newValue)
    expect(node.setDestroyWithParent).toHaveBeenCalledWith(newValue)
  })

  test("should set display", () => {
    const newValue = new Gdk.Display()
    widget.set("display", newValue)
    expect(node.setDisplay).toHaveBeenCalledWith(newValue)
  })

  test("should set focusVisible", () => {
    const newValue = true
    widget.set("focusVisible", newValue)
    expect(node.setFocusVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set focusWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("focusWidget", newValue)
    expect(node.focusWidget).toBe(newValue)
  })

  test("should set fullscreened", () => {
    const newValue = true
    widget.set("fullscreened", newValue)
    expect(node.fullscreened).toBe(newValue)
  })

  test("should set handleMenubarAccel", () => {
    const newValue = true
    widget.set("handleMenubarAccel", newValue)
    expect(node.setHandleMenubarAccel).toHaveBeenCalledWith(newValue)
  })

  test("should set hideOnClose", () => {
    const newValue = true
    widget.set("hideOnClose", newValue)
    expect(node.setHideOnClose).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "New String"
    widget.set("iconName", newValue)
    expect(node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set maximized", () => {
    const newValue = true
    widget.set("maximized", newValue)
    expect(node.maximized).toBe(newValue)
  })

  test("should set mnemonicsVisible", () => {
    const newValue = true
    widget.set("mnemonicsVisible", newValue)
    expect(node.setMnemonicsVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set modal", () => {
    const newValue = true
    widget.set("modal", newValue)
    expect(node.setModal).toHaveBeenCalledWith(newValue)
  })

  test("should set resizable", () => {
    const newValue = true
    widget.set("resizable", newValue)
    expect(node.setResizable).toHaveBeenCalledWith(newValue)
  })

  test("should set startupId", () => {
    const newValue = "New String"
    widget.set("startupId", newValue)
    expect(node.setStartupId).toHaveBeenCalledWith(newValue)
  })

  test("should set title", () => {
    const newValue = "New String"
    widget.set("title", newValue)
    expect(node.setTitle).toHaveBeenCalledWith(newValue)
  })

  test("should set titlebar", () => {
    const newValue = new Gtk.Widget()
    widget.set("titlebar", newValue)
    expect(node.setTitlebar).toHaveBeenCalledWith(newValue)
  })

  test("should set transientFor", () => {
    const newValue = new Gtk.Window()
    widget.set("transientFor", newValue)
    expect(node.setTransientFor).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
