import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import CalendarComponent from "../../src/components/Calendar.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CalendarComponent", () => {
  beforeEach(() => {
    setup()
  })

  test("should render", () => {
    render(<CalendarComponent />)

    const calendar = findBy({ type: "Calendar" })

    expect(calendar.node).toBeInstanceOf(Gtk.Calendar)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<CalendarComponent ref={ref} />)

    const calendar = findBy({ type: "Calendar" })

    expect(ref.current).toBe(calendar.node)
  })

  test("should handle unmount gracefully", () => {
    render(<CalendarComponent />)

    render(null)

    const calendar = findBy({ type: "Calendar" })

    expect(calendar).toBeNull()
  })

  test("should mark specified days", () => {
    const testDays = [3, 5, 8]

    render(<CalendarComponent markedDays={testDays} />)

    const calendar = findBy({ type: "Calendar" })

    testDays.forEach((day) => {
      expect(calendar.node.markDay).toHaveBeenCalledWith(day)
    })
  })

  test("should unmark specified days on unmount", () => {
    const testDays = [3, 5, 8]

    render(<CalendarComponent markedDays={testDays} />)

    const calendar = findBy({ type: "Calendar" })

    render(null)

    testDays.forEach((day) => {
      expect(calendar.node.unmarkDay).toHaveBeenCalledWith(day)
    })
  })
})
