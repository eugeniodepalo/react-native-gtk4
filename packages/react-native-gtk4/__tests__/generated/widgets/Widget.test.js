import { Widget } from "../../../src/generated/widgets.js"
import Gdk from "@girs/node-gdk-4.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Widget", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Widget()
    Gtk.Widget.mockImplementation(() => node)
    widget = new Widget({})
  })

  test("should set construct only props", () => {
    const props = {
      cssName: "Some String",
    }

    new Widget(props)

    expect(Gtk.Widget).toHaveBeenCalledWith(props)
  })

  test("should set canFocus", () => {
    const newValue = true
    widget.set("canFocus", newValue)
    expect(node.setCanFocus).toHaveBeenCalledWith(newValue)
  })

  test("should set canTarget", () => {
    const newValue = true
    widget.set("canTarget", newValue)
    expect(node.setCanTarget).toHaveBeenCalledWith(newValue)
  })

  test("should set cssClasses", () => {
    const newValue = "Some String"
    widget.set("cssClasses", newValue)
    expect(node.setCssClasses).toHaveBeenCalledWith(newValue)
  })

  test("should set cursor", () => {
    const newValue = new Gdk.Cursor()
    widget.set("cursor", newValue)
    expect(node.setCursor).toHaveBeenCalledWith(newValue)
  })

  test("should set focusOnClick", () => {
    const newValue = true
    widget.set("focusOnClick", newValue)
    expect(node.setFocusOnClick).toHaveBeenCalledWith(newValue)
  })

  test("should set focusable", () => {
    const newValue = true
    widget.set("focusable", newValue)
    expect(node.setFocusable).toHaveBeenCalledWith(newValue)
  })

  test("should set halign", () => {
    const newValue = Gtk.Align.FILL
    widget.set("halign", newValue)
    expect(node.setHalign).toHaveBeenCalledWith(newValue)
  })

  test("should set hasTooltip", () => {
    const newValue = true
    widget.set("hasTooltip", newValue)
    expect(node.setHasTooltip).toHaveBeenCalledWith(newValue)
  })

  test("should set heightRequest", () => {
    const newValue = 1
    widget.set("heightRequest", newValue)
    expect(node.heightRequest).toBe(newValue)
  })

  test("should set hexpand", () => {
    const newValue = true
    widget.set("hexpand", newValue)
    expect(node.setHexpand).toHaveBeenCalledWith(newValue)
  })

  test("should set hexpandSet", () => {
    const newValue = true
    widget.set("hexpandSet", newValue)
    expect(node.setHexpandSet).toHaveBeenCalledWith(newValue)
  })

  test("should set layoutManager", () => {
    const newValue = new Gtk.LayoutManager()
    widget.set("layoutManager", newValue)
    expect(node.setLayoutManager).toHaveBeenCalledWith(newValue)
  })

  test("should set marginBottom", () => {
    const newValue = 1
    widget.set("marginBottom", newValue)
    expect(node.setMarginBottom).toHaveBeenCalledWith(newValue)
  })

  test("should set marginEnd", () => {
    const newValue = 1
    widget.set("marginEnd", newValue)
    expect(node.setMarginEnd).toHaveBeenCalledWith(newValue)
  })

  test("should set marginStart", () => {
    const newValue = 1
    widget.set("marginStart", newValue)
    expect(node.setMarginStart).toHaveBeenCalledWith(newValue)
  })

  test("should set marginTop", () => {
    const newValue = 1
    widget.set("marginTop", newValue)
    expect(node.setMarginTop).toHaveBeenCalledWith(newValue)
  })

  test("should set name", () => {
    const newValue = "Some String"
    widget.set("name", newValue)
    expect(node.setName).toHaveBeenCalledWith(newValue)
  })

  test("should set opacity", () => {
    const newValue = 1
    widget.set("opacity", newValue)
    expect(node.setOpacity).toHaveBeenCalledWith(newValue)
  })

  test("should set overflow", () => {
    const newValue = Gtk.Overflow.VISIBLE
    widget.set("overflow", newValue)
    expect(node.setOverflow).toHaveBeenCalledWith(newValue)
  })

  test("should set receivesDefault", () => {
    const newValue = true
    widget.set("receivesDefault", newValue)
    expect(node.setReceivesDefault).toHaveBeenCalledWith(newValue)
  })

  test("should set sensitive", () => {
    const newValue = true
    widget.set("sensitive", newValue)
    expect(node.setSensitive).toHaveBeenCalledWith(newValue)
  })

  test("should set tooltipMarkup", () => {
    const newValue = "Some String"
    widget.set("tooltipMarkup", newValue)
    expect(node.setTooltipMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set tooltipText", () => {
    const newValue = "Some String"
    widget.set("tooltipText", newValue)
    expect(node.setTooltipText).toHaveBeenCalledWith(newValue)
  })

  test("should set valign", () => {
    const newValue = Gtk.Align.FILL
    widget.set("valign", newValue)
    expect(node.setValign).toHaveBeenCalledWith(newValue)
  })

  test("should set vexpand", () => {
    const newValue = true
    widget.set("vexpand", newValue)
    expect(node.setVexpand).toHaveBeenCalledWith(newValue)
  })

  test("should set vexpandSet", () => {
    const newValue = true
    widget.set("vexpandSet", newValue)
    expect(node.setVexpandSet).toHaveBeenCalledWith(newValue)
  })

  test("should set visible", () => {
    const newValue = true
    widget.set("visible", newValue)
    expect(node.setVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set widthRequest", () => {
    const newValue = 1
    widget.set("widthRequest", newValue)
    expect(node.widthRequest).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onDestroy", () => {
    const callback = jest.fn()
    widget.set("onDestroy", callback)
    const handler = widget.handlers["destroy"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("destroy", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onDirectionChanged", () => {
    const callback = jest.fn()
    widget.set("onDirectionChanged", callback)
    const handler = widget.handlers["direction-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "direction-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onHide", () => {
    const callback = jest.fn()
    widget.set("onHide", callback)
    const handler = widget.handlers["hide"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("hide", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onKeynavFailed", () => {
    const callback = jest.fn()
    widget.set("onKeynavFailed", callback)
    const handler = widget.handlers["keynav-failed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("keynav-failed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMap", () => {
    const callback = jest.fn()
    widget.set("onMap", callback)
    const handler = widget.handlers["map"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("map", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMnemonicActivate", () => {
    const callback = jest.fn()
    widget.set("onMnemonicActivate", callback)
    const handler = widget.handlers["mnemonic-activate"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "mnemonic-activate",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveFocus", () => {
    const callback = jest.fn()
    widget.set("onMoveFocus", callback)
    const handler = widget.handlers["move-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("move-focus", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onQueryTooltip", () => {
    const callback = jest.fn()
    widget.set("onQueryTooltip", callback)
    const handler = widget.handlers["query-tooltip"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("query-tooltip", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRealize", () => {
    const callback = jest.fn()
    widget.set("onRealize", callback)
    const handler = widget.handlers["realize"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("realize", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onShow", () => {
    const callback = jest.fn()
    widget.set("onShow", callback)
    const handler = widget.handlers["show"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("show", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onStateFlagsChanged", () => {
    const callback = jest.fn()
    widget.set("onStateFlagsChanged", callback)
    const handler = widget.handlers["state-flags-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "state-flags-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onUnmap", () => {
    const callback = jest.fn()
    widget.set("onUnmap", callback)
    const handler = widget.handlers["unmap"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("unmap", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onUnrealize", () => {
    const callback = jest.fn()
    widget.set("onUnrealize", callback)
    const handler = widget.handlers["unrealize"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("unrealize", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyCanFocus", () => {
    const callback = jest.fn()
    widget.set("onNotifyCanFocus", callback)
    const handler = widget.handlers["notify::can-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::can-focus",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCanTarget", () => {
    const callback = jest.fn()
    widget.set("onNotifyCanTarget", callback)
    const handler = widget.handlers["notify::can-target"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::can-target",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCssClasses", () => {
    const callback = jest.fn()
    widget.set("onNotifyCssClasses", callback)
    const handler = widget.handlers["notify::css-classes"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::css-classes",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCssName", () => {
    const callback = jest.fn()
    widget.set("onNotifyCssName", callback)
    const handler = widget.handlers["notify::css-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::css-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCursor", () => {
    const callback = jest.fn()
    widget.set("onNotifyCursor", callback)
    const handler = widget.handlers["notify::cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::cursor", expect.any(Function))
  })

  test("should connect onNotifyFocusOnClick", () => {
    const callback = jest.fn()
    widget.set("onNotifyFocusOnClick", callback)
    const handler = widget.handlers["notify::focus-on-click"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::focus-on-click",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFocusable", () => {
    const callback = jest.fn()
    widget.set("onNotifyFocusable", callback)
    const handler = widget.handlers["notify::focusable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::focusable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHalign", () => {
    const callback = jest.fn()
    widget.set("onNotifyHalign", callback)
    const handler = widget.handlers["notify::halign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::halign", expect.any(Function))
  })

  test("should connect onNotifyHasDefault", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasDefault", callback)
    const handler = widget.handlers["notify::has-default"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-default",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasFocus", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasFocus", callback)
    const handler = widget.handlers["notify::has-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-focus",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasTooltip", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasTooltip", callback)
    const handler = widget.handlers["notify::has-tooltip"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-tooltip",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHeightRequest", () => {
    const callback = jest.fn()
    widget.set("onNotifyHeightRequest", callback)
    const handler = widget.handlers["notify::height-request"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::height-request",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHexpand", () => {
    const callback = jest.fn()
    widget.set("onNotifyHexpand", callback)
    const handler = widget.handlers["notify::hexpand"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hexpand",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHexpandSet", () => {
    const callback = jest.fn()
    widget.set("onNotifyHexpandSet", callback)
    const handler = widget.handlers["notify::hexpand-set"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hexpand-set",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLayoutManager", () => {
    const callback = jest.fn()
    widget.set("onNotifyLayoutManager", callback)
    const handler = widget.handlers["notify::layout-manager"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::layout-manager",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMarginBottom", () => {
    const callback = jest.fn()
    widget.set("onNotifyMarginBottom", callback)
    const handler = widget.handlers["notify::margin-bottom"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::margin-bottom",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMarginEnd", () => {
    const callback = jest.fn()
    widget.set("onNotifyMarginEnd", callback)
    const handler = widget.handlers["notify::margin-end"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::margin-end",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMarginStart", () => {
    const callback = jest.fn()
    widget.set("onNotifyMarginStart", callback)
    const handler = widget.handlers["notify::margin-start"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::margin-start",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMarginTop", () => {
    const callback = jest.fn()
    widget.set("onNotifyMarginTop", callback)
    const handler = widget.handlers["notify::margin-top"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::margin-top",
      expect.any(Function)
    )
  })

  test("should connect onNotifyName", () => {
    const callback = jest.fn()
    widget.set("onNotifyName", callback)
    const handler = widget.handlers["notify::name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::name", expect.any(Function))
  })

  test("should connect onNotifyOpacity", () => {
    const callback = jest.fn()
    widget.set("onNotifyOpacity", callback)
    const handler = widget.handlers["notify::opacity"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::opacity",
      expect.any(Function)
    )
  })

  test("should connect onNotifyOverflow", () => {
    const callback = jest.fn()
    widget.set("onNotifyOverflow", callback)
    const handler = widget.handlers["notify::overflow"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::overflow",
      expect.any(Function)
    )
  })

  test("should connect onNotifyParent", () => {
    const callback = jest.fn()
    widget.set("onNotifyParent", callback)
    const handler = widget.handlers["notify::parent"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::parent", expect.any(Function))
  })

  test("should connect onNotifyReceivesDefault", () => {
    const callback = jest.fn()
    widget.set("onNotifyReceivesDefault", callback)
    const handler = widget.handlers["notify::receives-default"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::receives-default",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRoot", () => {
    const callback = jest.fn()
    widget.set("onNotifyRoot", callback)
    const handler = widget.handlers["notify::root"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::root", expect.any(Function))
  })

  test("should connect onNotifyScaleFactor", () => {
    const callback = jest.fn()
    widget.set("onNotifyScaleFactor", callback)
    const handler = widget.handlers["notify::scale-factor"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::scale-factor",
      expect.any(Function)
    )
  })

  test("should connect onNotifySensitive", () => {
    const callback = jest.fn()
    widget.set("onNotifySensitive", callback)
    const handler = widget.handlers["notify::sensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::sensitive",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipMarkup", () => {
    const callback = jest.fn()
    widget.set("onNotifyTooltipMarkup", callback)
    const handler = widget.handlers["notify::tooltip-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::tooltip-markup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipText", () => {
    const callback = jest.fn()
    widget.set("onNotifyTooltipText", callback)
    const handler = widget.handlers["notify::tooltip-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::tooltip-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyValign", () => {
    const callback = jest.fn()
    widget.set("onNotifyValign", callback)
    const handler = widget.handlers["notify::valign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::valign", expect.any(Function))
  })

  test("should connect onNotifyVexpand", () => {
    const callback = jest.fn()
    widget.set("onNotifyVexpand", callback)
    const handler = widget.handlers["notify::vexpand"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::vexpand",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVexpandSet", () => {
    const callback = jest.fn()
    widget.set("onNotifyVexpandSet", callback)
    const handler = widget.handlers["notify::vexpand-set"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::vexpand-set",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVisible", () => {
    const callback = jest.fn()
    widget.set("onNotifyVisible", callback)
    const handler = widget.handlers["notify::visible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::visible",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWidthRequest", () => {
    const callback = jest.fn()
    widget.set("onNotifyWidthRequest", callback)
    const handler = widget.handlers["notify::width-request"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::width-request",
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
