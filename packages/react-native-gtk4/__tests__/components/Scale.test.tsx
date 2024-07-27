import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import Scale from "@/components/Scale.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Scale", () => {
  const range = [0, 10] as [number, number]

  beforeEach(setup)

  test("should render", () => {
    render(<Scale range={range} />)

    const scale = findBy({ type: "Scale" })

    expect(scale.node).toBeInstanceOf(Gtk.Scale)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.Scale>()

    render(<Scale range={range} ref={ref} />)

    const scale = findBy({ type: "Scale" })

    expect(ref.current).toBe(scale.node)
  })

  test("should unset range on unmount", () => {
    render(<Scale range={range} />)

    const scale = findBy<Gtk.Scale>({ type: "Scale" })

    render(null)

    expect(scale.node.setRange).toHaveBeenCalledWith(0, 0)
  })

  test("should set range", () => {
    render(<Scale range={range} />)

    const scale = findBy<Gtk.Scale>({ type: "Scale" })

    expect(scale.node.setRange).toHaveBeenCalledWith(range[0], range[1])
  })

  test("should set value correctly", () => {
    const value = 5

    render(<Scale value={value} range={range} />)

    const scale = findBy<Gtk.Scale>({ type: "Scale" })

    expect(scale.node.setValue).toHaveBeenCalledWith(value)
  })

  test("should unset value correctly on unmount", () => {
    const value = 5

    render(<Scale value={value} range={range} />)

    const scale = findBy<Gtk.Scale>({ type: "Scale" })

    render(null)

    expect(scale.node.setValue).toHaveBeenCalledWith(0)
  })

  test("should add marks", () => {
    const marks = [
      {
        label: "Start",
        value: 0,
      },
      {
        label: "Middle",
        value: 5,
      },
      {
        label: "End",
        value: 10,
      },
    ]

    render(<Scale marks={marks} range={range} />)

    const scale = findBy<Gtk.Scale>({ type: "Scale" })

    for (const mark of marks) {
      expect(scale.node.addMark).toHaveBeenCalledWith(
        mark.value,
        Gtk.PositionType.BOTTOM,
        mark.label
      )
    }
  })

  test("should unset marks on unmount", () => {
    const marks = [
      {
        label: "Start",
        value: 0,
      },
      {
        label: "Middle",
        value: 5,
      },
      {
        label: "End",
        value: 10,
      },
    ]

    render(<Scale marks={marks} range={range} />)

    const scale = findBy<Gtk.Scale>({ type: "Scale" })

    render(null)

    expect(scale.node.clearMarks).toHaveBeenCalled()
  })
})
