import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import ListView from "../../src/components/ListView.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListView", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <ListView>
        <Box />
      </ListView>
    )

    const listView = findBy({ type: "ListView" })
    const child = findBy({ type: "Box" })

    expect(listView.node).toBeInstanceOf(Gtk.ListView)
    expect(child.node).toBeInstanceOf(Gtk.Box)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<ListView ref={ref} />)

    const listView = findBy({ type: "ListView" })

    expect(ref.current).toBe(listView.node)
  })

  test("should handle unmount gracefully", () => {
    render(<ListView />)

    render(null)

    const listView = findBy({ type: "ListView" })

    expect(listView).toBeNull()
  })

  test("should set factory", () => {
    const renderFn = () => null

    render(<ListView renderItem={renderFn} />)

    const listView = findBy({ type: "ListView" })

    expect(listView.node.setFactory).toHaveBeenCalledWith(
      expect.any(Gtk.SignalListItemFactory)
    )
  })

  test("should unset factory", () => {
    render(<ListView renderItem={() => null} />)

    const listView = findBy({ type: "ListView" })

    render(<ListView />)

    expect(listView.node.setFactory).toHaveBeenNthCalledWith(2, null)
  })

  test("should set model", () => {
    render(<ListView />)

    const listView = findBy({ type: "ListView" })

    expect(Gtk.NoSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })

    expect(listView.node.setModel).toHaveBeenCalledWith(
      expect.any(Gtk.NoSelection)
    )
  })
})
