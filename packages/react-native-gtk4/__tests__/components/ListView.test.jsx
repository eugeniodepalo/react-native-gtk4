import * as useListItemFactoryModule from "../../src/hooks/useListItemFactory.js"
import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import ListView from "../../src/components/ListView.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListView", () => {
  let useListItemFactory

  beforeEach(() => {
    setup()
    useListItemFactory = jest.spyOn(useListItemFactoryModule, "default")
  })

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

    expect(useListItemFactory).toHaveBeenCalledWith({
      render: renderFn,
      items: {},
    })

    expect(listView.node.setFactory).toHaveBeenCalledWith(
      useListItemFactory.mock.results[0].value
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

  test("should update model when selection mode changes", () => {
    render(<ListView selectionMode={Gtk.SelectionMode.MULTIPLE} />)

    const listView = findBy({ type: "ListView" })
    const [initialModel] = listView.node.setModel.mock.calls[0]

    expect(Gtk.MultiSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })

    expect(initialModel).toBeInstanceOf(Gtk.MultiSelection)

    render(<ListView selectionMode={Gtk.SelectionMode.SINGLE} />)

    const [updatedModel] = listView.node.setModel.mock.calls[1]

    expect(Gtk.SingleSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
      autoselect: false,
    })

    expect(updatedModel).toBeInstanceOf(Gtk.SingleSelection)
  })
})
