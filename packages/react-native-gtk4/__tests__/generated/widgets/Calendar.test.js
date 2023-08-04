import { Calendar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Calendar", () => {
  let widget

  beforeEach(() => {
    widget = new Calendar({}, Calendar.createNode({}))
  })

  test("should set day", () => {
    const newValue = 1
    widget.set("day", newValue)
    expect(widget.node.day).toBe(newValue)
  })

  test("should set month", () => {
    const newValue = 1
    widget.set("month", newValue)
    expect(widget.node.month).toBe(newValue)
  })

  test("should set showDayNames", () => {
    const newValue = true
    widget.set("showDayNames", newValue)
    expect(widget.node.setShowDayNames).toHaveBeenCalledWith(newValue)
  })

  test("should set showHeading", () => {
    const newValue = true
    widget.set("showHeading", newValue)
    expect(widget.node.setShowHeading).toHaveBeenCalledWith(newValue)
  })

  test("should set showWeekNumbers", () => {
    const newValue = true
    widget.set("showWeekNumbers", newValue)
    expect(widget.node.setShowWeekNumbers).toHaveBeenCalledWith(newValue)
  })

  test("should set year", () => {
    const newValue = 1
    widget.set("year", newValue)
    expect(widget.node.year).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onDaySelected", () => {
    const callback = jest.fn()

    widget.set("onDaySelected", callback)

    const handler = widget.handlers["day-selected"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "day-selected",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNextMonth", () => {
    const callback = jest.fn()

    widget.set("onNextMonth", callback)

    const handler = widget.handlers["next-month"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "next-month",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNextYear", () => {
    const callback = jest.fn()

    widget.set("onNextYear", callback)

    const handler = widget.handlers["next-year"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "next-year",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPrevMonth", () => {
    const callback = jest.fn()

    widget.set("onPrevMonth", callback)

    const handler = widget.handlers["prev-month"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "prev-month",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPrevYear", () => {
    const callback = jest.fn()

    widget.set("onPrevYear", callback)

    const handler = widget.handlers["prev-year"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "prev-year",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyDay", () => {
    const callback = jest.fn()

    widget.set("onNotifyDay", callback)

    const handler = widget.handlers["notify::day"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::day",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMonth", () => {
    const callback = jest.fn()

    widget.set("onNotifyMonth", callback)

    const handler = widget.handlers["notify::month"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::month",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowDayNames", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowDayNames", callback)

    const handler = widget.handlers["notify::show-day-names"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-day-names",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowHeading", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowHeading", callback)

    const handler = widget.handlers["notify::show-heading"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-heading",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowWeekNumbers", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowWeekNumbers", callback)

    const handler = widget.handlers["notify::show-week-numbers"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-week-numbers",
      expect.any(Function)
    )
  })

  test("should connect onNotifyYear", () => {
    const callback = jest.fn()

    widget.set("onNotifyYear", callback)

    const handler = widget.handlers["notify::year"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::year",
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
