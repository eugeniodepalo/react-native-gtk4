import { Calendar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Calendar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Calendar.mockImplementation(() => node)
    node = new Gtk.Calendar()
    widget = new Calendar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set day", () => {
    const newValue = 42
    widget.set("day", newValue)
    expect(node.day).toBe(newValue)
  })

  test("should set month", () => {
    const newValue = 42
    widget.set("month", newValue)
    expect(node.month).toBe(newValue)
  })

  test("should set showDayNames", () => {
    const newValue = true
    widget.set("showDayNames", newValue)
    expect(node.setShowDayNames).toHaveBeenCalledWith(newValue)
  })

  test("should set showHeading", () => {
    const newValue = true
    widget.set("showHeading", newValue)
    expect(node.setShowHeading).toHaveBeenCalledWith(newValue)
  })

  test("should set showWeekNumbers", () => {
    const newValue = true
    widget.set("showWeekNumbers", newValue)
    expect(node.setShowWeekNumbers).toHaveBeenCalledWith(newValue)
  })

  test("should set year", () => {
    const newValue = 42
    widget.set("year", newValue)
    expect(node.year).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
