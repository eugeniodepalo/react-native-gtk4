import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Scale from "../../src/components/Scale.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Scale", () => {
  const range = [0, 10]

  beforeEach(() => {
    setup()
  })

  test("should render correctly", () => {
    render(<Scale range={range} />)
    const scale = findBy({ type: "Scale" })
    expect(scale).toBeTruthy()
  })

  test("should set range correctly", () => {
    render(<Scale range={range} />)
    const scale = findBy({ type: "Scale" })
    expect(scale.node.setRange).toHaveBeenCalledWith(range[0], range[1])
  })

  test("should reset range correctly on unmount", () => {
    render(<Scale range={range} />)

    const scale = findBy({ type: "Scale" })

    render(null)

    expect(scale.node.setRange).toHaveBeenCalledWith(0, 0)
  })

  test("should set value correctly", () => {
    const value = 5

    render(<Scale value={value} range={range} />)

    const scale = findBy({ type: "Scale" })

    expect(scale.node.setValue).toHaveBeenCalledWith(value)
  })

  test("should reset value correctly on unmount", () => {
    const value = 5

    render(<Scale value={value} range={range} />)

    const scale = findBy({ type: "Scale" })

    render(null)

    expect(scale.node.setValue).toHaveBeenCalledWith(0)
  })

  test("should add marks correctly", () => {
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

    const scale = findBy({ type: "Scale" })

    for (const mark of marks) {
      expect(scale.node.addMark).toHaveBeenCalledWith(
        mark.value,
        Gtk.PositionType.BOTTOM,
        mark.label
      )
    }
  })

  test("should remove marks correctly on unmount", () => {
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

    const scale = findBy({ type: "Scale" })

    render(null)

    expect(scale.node.clearMarks).toHaveBeenCalled()
  })
})
