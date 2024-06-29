import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import CalendarComponent from "@/components/Calendar.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

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
    const ref = createRef<Gtk.Calendar>()

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

    const calendar = findBy<Gtk.Calendar>({ type: "Calendar" })

    testDays.forEach((day) => {
      expect(calendar.node.markDay).toHaveBeenCalledWith(day)
    })
  })

  test("should unmark specified days on unmount", () => {
    const testDays = [3, 5, 8]

    render(<CalendarComponent markedDays={testDays} />)

    const calendar = findBy<Gtk.Calendar>({ type: "Calendar" })

    render(null)

    testDays.forEach((day) => {
      expect(calendar.node.unmarkDay).toHaveBeenCalledWith(day)
    })
  })
})
