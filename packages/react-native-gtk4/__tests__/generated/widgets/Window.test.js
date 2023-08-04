import { Window } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Window", () => {
  let widget

  beforeEach(() => {
    widget = new Window({}, Window.createNode({}))
  })

  test("should set application", () => {
    const newValue = new Gtk.Application()
    widget.set("application", newValue)
    expect(widget.node.setApplication).toHaveBeenCalledWith(newValue)
  })

  test("should set decorated", () => {
    const newValue = true
    widget.set("decorated", newValue)
    expect(widget.node.setDecorated).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultHeight", () => {
    const newValue = 1
    widget.set("defaultHeight", newValue)
    expect(widget.node.defaultHeight).toBe(newValue)
  })

  test("should set defaultWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("defaultWidget", newValue)
    expect(widget.node.setDefaultWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultWidth", () => {
    const newValue = 1
    widget.set("defaultWidth", newValue)
    expect(widget.node.defaultWidth).toBe(newValue)
  })

  test("should set deletable", () => {
    const newValue = true
    widget.set("deletable", newValue)
    expect(widget.node.setDeletable).toHaveBeenCalledWith(newValue)
  })

  test("should set destroyWithParent", () => {
    const newValue = true
    widget.set("destroyWithParent", newValue)
    expect(widget.node.setDestroyWithParent).toHaveBeenCalledWith(newValue)
  })

  test("should set display", () => {
    const newValue = new Gdk.Display()
    widget.set("display", newValue)
    expect(widget.node.setDisplay).toHaveBeenCalledWith(newValue)
  })

  test("should set focusVisible", () => {
    const newValue = true
    widget.set("focusVisible", newValue)
    expect(widget.node.setFocusVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set focusWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("focusWidget", newValue)
    expect(widget.node.focusWidget).toBe(newValue)
  })

  test("should set fullscreened", () => {
    const newValue = true
    widget.set("fullscreened", newValue)
    expect(widget.node.fullscreened).toBe(newValue)
  })

  test("should set handleMenubarAccel", () => {
    const newValue = true
    widget.set("handleMenubarAccel", newValue)
    expect(widget.node.setHandleMenubarAccel).toHaveBeenCalledWith(newValue)
  })

  test("should set hideOnClose", () => {
    const newValue = true
    widget.set("hideOnClose", newValue)
    expect(widget.node.setHideOnClose).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set maximized", () => {
    const newValue = true
    widget.set("maximized", newValue)
    expect(widget.node.maximized).toBe(newValue)
  })

  test("should set mnemonicsVisible", () => {
    const newValue = true
    widget.set("mnemonicsVisible", newValue)
    expect(widget.node.setMnemonicsVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set modal", () => {
    const newValue = true
    widget.set("modal", newValue)
    expect(widget.node.setModal).toHaveBeenCalledWith(newValue)
  })

  test("should set resizable", () => {
    const newValue = true
    widget.set("resizable", newValue)
    expect(widget.node.setResizable).toHaveBeenCalledWith(newValue)
  })

  test("should set startupId", () => {
    const newValue = "Some String"
    widget.set("startupId", newValue)
    expect(widget.node.setStartupId).toHaveBeenCalledWith(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue)
  })

  test("should set titlebar", () => {
    const newValue = new Gtk.Widget()
    widget.set("titlebar", newValue)
    expect(widget.node.setTitlebar).toHaveBeenCalledWith(newValue)
  })

  test("should set transientFor", () => {
    const newValue = new Gtk.Window()
    widget.set("transientFor", newValue)
    expect(widget.node.setTransientFor).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivateDefault", () => {
    const callback = jest.fn()

    widget.set("onActivateDefault", callback)

    const handler = widget.handlers["activate-default"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-default",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onActivateFocus", () => {
    const callback = jest.fn()

    widget.set("onActivateFocus", callback)

    const handler = widget.handlers["activate-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-focus",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCloseRequest", () => {
    const callback = jest.fn()

    widget.set("onCloseRequest", callback)

    const handler = widget.handlers["close-request"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "close-request",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onEnableDebugging", () => {
    const callback = jest.fn()

    widget.set("onEnableDebugging", callback)

    const handler = widget.handlers["enable-debugging"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "enable-debugging",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onKeysChanged", () => {
    const callback = jest.fn()

    widget.set("onKeysChanged", callback)

    const handler = widget.handlers["keys-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "keys-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyApplication", () => {
    const callback = jest.fn()

    widget.set("onNotifyApplication", callback)

    const handler = widget.handlers["notify::application"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::application",
      expect.any(Function)
    )
  })

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyChild", callback)

    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDecorated", () => {
    const callback = jest.fn()

    widget.set("onNotifyDecorated", callback)

    const handler = widget.handlers["notify::decorated"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::decorated",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDefaultHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyDefaultHeight", callback)

    const handler = widget.handlers["notify::default-height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::default-height",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDefaultWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyDefaultWidget", callback)

    const handler = widget.handlers["notify::default-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::default-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDefaultWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyDefaultWidth", callback)

    const handler = widget.handlers["notify::default-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::default-width",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDeletable", () => {
    const callback = jest.fn()

    widget.set("onNotifyDeletable", callback)

    const handler = widget.handlers["notify::deletable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::deletable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDestroyWithParent", () => {
    const callback = jest.fn()

    widget.set("onNotifyDestroyWithParent", callback)

    const handler = widget.handlers["notify::destroy-with-parent"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::destroy-with-parent",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDisplay", () => {
    const callback = jest.fn()

    widget.set("onNotifyDisplay", callback)

    const handler = widget.handlers["notify::display"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::display",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFocusVisible", () => {
    const callback = jest.fn()

    widget.set("onNotifyFocusVisible", callback)

    const handler = widget.handlers["notify::focus-visible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::focus-visible",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFocusWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyFocusWidget", callback)

    const handler = widget.handlers["notify::focus-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::focus-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFullscreened", () => {
    const callback = jest.fn()

    widget.set("onNotifyFullscreened", callback)

    const handler = widget.handlers["notify::fullscreened"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fullscreened",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHandleMenubarAccel", () => {
    const callback = jest.fn()

    widget.set("onNotifyHandleMenubarAccel", callback)

    const handler = widget.handlers["notify::handle-menubar-accel"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::handle-menubar-accel",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHideOnClose", () => {
    const callback = jest.fn()

    widget.set("onNotifyHideOnClose", callback)

    const handler = widget.handlers["notify::hide-on-close"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hide-on-close",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyIconName", callback)

    const handler = widget.handlers["notify::icon-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::icon-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIsActive", () => {
    const callback = jest.fn()

    widget.set("onNotifyIsActive", callback)

    const handler = widget.handlers["notify::is-active"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::is-active",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaximized", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaximized", callback)

    const handler = widget.handlers["notify::maximized"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::maximized",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMnemonicsVisible", () => {
    const callback = jest.fn()

    widget.set("onNotifyMnemonicsVisible", callback)

    const handler = widget.handlers["notify::mnemonics-visible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::mnemonics-visible",
      expect.any(Function)
    )
  })

  test("should connect onNotifyModal", () => {
    const callback = jest.fn()

    widget.set("onNotifyModal", callback)

    const handler = widget.handlers["notify::modal"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::modal",
      expect.any(Function)
    )
  })

  test("should connect onNotifyResizable", () => {
    const callback = jest.fn()

    widget.set("onNotifyResizable", callback)

    const handler = widget.handlers["notify::resizable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::resizable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyStartupId", () => {
    const callback = jest.fn()

    widget.set("onNotifyStartupId", callback)

    const handler = widget.handlers["notify::startup-id"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::startup-id",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTitle", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitle", callback)

    const handler = widget.handlers["notify::title"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::title",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTitlebar", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitlebar", callback)

    const handler = widget.handlers["notify::titlebar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::titlebar",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTransientFor", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransientFor", callback)

    const handler = widget.handlers["notify::transient-for"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transient-for",
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

  test("should append child", () => {
    const child = new Window()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new Window()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new Window()
    const sibling = new Window()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
