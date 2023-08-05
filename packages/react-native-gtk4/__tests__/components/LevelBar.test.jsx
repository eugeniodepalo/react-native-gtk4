import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import LevelBar, { DEFAULT_OFFSETS } from "../../src/components/LevelBar.js"
import Gtk from "@girs/node-gtk-4.0"

describe("LevelBar", () => {
  beforeEach(() => {
    setup()
    jest.replaceProperty(Gtk, "LEVEL_BAR_OFFSET_LOW", "low")
    jest.replaceProperty(Gtk, "LEVEL_BAR_OFFSET_HIGH", "high")
    jest.replaceProperty(Gtk, "LEVEL_BAR_OFFSET_FULL", "full")
  })

  test("should render", () => {
    render(<LevelBar />)

    const levelBar = findBy({ type: "LevelBar" })

    expect(levelBar.node).toBeInstanceOf(Gtk.LevelBar)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<LevelBar ref={ref} />)

    const levelBar = findBy({ type: "LevelBar" })

    expect(ref.current).toBe(levelBar.node)
  })

  test("should handle unmount gracefully", () => {
    render(<LevelBar />)

    render(null)

    const levelBar = findBy({ type: "LevelBar" })

    expect(levelBar).toBeNull()
  })

  test("should add custom offsets", () => {
    const customOffsets = {
      low: 0.2,
      high: 0.5,
      full: 0.9,
    }

    render(<LevelBar offsets={customOffsets} />)

    const levelBar = findBy({ type: "LevelBar" })

    for (const name of Object.keys(customOffsets)) {
      expect(levelBar.node.addOffsetValue).toHaveBeenCalledWith(
        name,
        customOffsets[name]
      )
    }
  })

  test("should remove custom offsets correctly on unmount", () => {
    const customOffsets = {
      low: 0.2,
      high: 0.5,
      full: 0.9,
    }

    render(<LevelBar offsets={customOffsets} />)

    const levelBar = findBy({ type: "LevelBar" })

    render(null)

    for (const offset of Object.keys(DEFAULT_OFFSETS)) {
      expect(levelBar.node.removeOffsetValue).toHaveBeenCalledWith(offset)
    }

    for (const name of Object.keys(customOffsets)) {
      expect(levelBar.node.removeOffsetValue).toHaveBeenCalledWith(name)
    }
  })
})
