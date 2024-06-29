import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import ListProvider from "@/components/ListProvider.js"
import ListView from "@/components/ListView.js"

describe("ListView", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <ListProvider.Container>
        <ListView>
          <Box />
        </ListView>
      </ListProvider.Container>
    )

    const listView = findBy({ type: "ListView" })
    const child = findBy({ type: "Box" })

    expect(listView.node).toBeInstanceOf(Gtk.ListView)
    expect(child.node).toBeInstanceOf(Gtk.Box)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.ListView>()

    render(
      <ListProvider.Container>
        <ListView ref={ref} />
      </ListProvider.Container>
    )

    const listView = findBy({ type: "ListView" })

    expect(ref.current).toBe(listView.node)
  })

  test("should handle unmount gracefully", () => {
    render(
      <ListProvider.Container>
        <ListView />
      </ListProvider.Container>
    )

    render(null)

    const listView = findBy({ type: "ListView" })

    expect(listView).toBeNull()
  })

  test("should set factory", () => {
    const renderFn = () => <Box />

    render(
      <ListProvider.Container>
        <ListView renderItem={renderFn} />
      </ListProvider.Container>
    )

    const listView = findBy<Gtk.ListView>({ type: "ListView" })

    expect(listView.node.setFactory).toHaveBeenCalledWith(
      expect.any(Gtk.SignalListItemFactory)
    )
  })

  test("should unset factory", () => {
    render(
      <ListProvider.Container>
        <ListView renderItem={() => <Box />} />
      </ListProvider.Container>
    )

    const listView = findBy<Gtk.ListView>({ type: "ListView" })

    render(
      <ListProvider.Container>
        <ListView renderItem={null} />
      </ListProvider.Container>
    )

    expect(listView.node.setFactory).toHaveBeenNthCalledWith(2, null)
  })

  test("should set model", () => {
    render(
      <ListProvider.Container>
        <ListView />
      </ListProvider.Container>
    )

    const listView = findBy<Gtk.ListView>({ type: "ListView" })

    expect(Gtk.NoSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })

    expect(listView.node.setModel).toHaveBeenCalledWith(
      expect.any(Gtk.NoSelection)
    )
  })
})
