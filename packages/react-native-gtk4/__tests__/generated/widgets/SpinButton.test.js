import { SpinButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("SpinButton", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.SpinButton.mockImplementation(() => node)
    node = new Gtk.SpinButton()
    widget = new SpinButton({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set adjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("adjustment", newValue)
    expect(node.setAdjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set climbRate", () => {
    const newValue = 42
    widget.set("climbRate", newValue)
    expect(node.setClimbRate).toHaveBeenCalledWith(newValue)
  })

  test("should set digits", () => {
    const newValue = 42
    widget.set("digits", newValue)
    expect(node.setDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set numeric", () => {
    const newValue = true
    widget.set("numeric", newValue)
    expect(node.setNumeric).toHaveBeenCalledWith(newValue)
  })

  test("should set snapToTicks", () => {
    const newValue = true
    widget.set("snapToTicks", newValue)
    expect(node.setSnapToTicks).toHaveBeenCalledWith(newValue)
  })

  test("should set updatePolicy", () => {
    const newValue = Gtk.SpinButtonUpdatePolicy.ALWAYS
    widget.set("updatePolicy", newValue)
    expect(node.setUpdatePolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set value", () => {
    const newValue = 42
    widget.set("value", newValue)
    expect(node.setValue).toHaveBeenCalledWith(newValue)
  })

  test("should set wrap", () => {
    const newValue = true
    widget.set("wrap", newValue)
    expect(node.setWrap).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set editingCanceled", () => {
    const newValue = true
    widget.set("editingCanceled", newValue)
    expect(node.editingCanceled).toBe(newValue)
  })

  test("should set editable", () => {
    const newValue = true
    widget.set("editable", newValue)
    expect(node.setEditable).toHaveBeenCalledWith(newValue)
  })

  test("should set enableUndo", () => {
    const newValue = true
    widget.set("enableUndo", newValue)
    expect(node.setEnableUndo).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 42
    widget.set("maxWidthChars", newValue)
    expect(node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "New String"
    widget.set("text", newValue)
    expect(node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 42
    widget.set("widthChars", newValue)
    expect(node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 42
    widget.set("xalign", newValue)
    expect(node.xalign).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
  })
})
