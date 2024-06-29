import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import { Box } from "@/generated/intrinsics.js"
import ColumnView from "@/components/ColumnView.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import ListProvider from "@/components/ListProvider.js"
import * as useListItemFactoryModule from "@/hooks/useListItemFactory.js"

describe("ColumnView", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <ListProvider.Container>
        <ColumnView
          columns={[{ title: "Column 1" }]}
          renderCell={() => <Box />}
        />
      </ListProvider.Container>
    )

    const columnView = findBy({ type: "ColumnView" })
    expect(columnView.node).toBeInstanceOf(Gtk.ColumnView)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.ColumnView>()

    render(
      <ListProvider.Container>
        <ColumnView
          ref={ref}
          columns={[{ title: "Column 1" }]}
          renderCell={() => <Box />}
        />
      </ListProvider.Container>
    )

    const columnView = findBy({ type: "ColumnView" })
    expect(ref.current).toBe(columnView.node)
  })

  test("should handle columns", () => {
    const ref = createRef<Gtk.ColumnView>()

    render(
      <ListProvider.Container>
        <ColumnView
          columns={[{ title: "Column 1" }, { title: "Column 2" }]}
          ref={ref}
          renderCell={() => <Box />}
        />
      </ListProvider.Container>
    )

    expect(ref.current).toBeInstanceOf(Gtk.ColumnView)
    expect(ref.current?.insertColumn).toHaveBeenCalledTimes(2)

    expect(ref.current?.insertColumn).toHaveBeenNthCalledWith(
      1,
      0,
      expect.any(Gtk.ColumnViewColumn)
    )

    expect(ref.current?.insertColumn).toHaveBeenNthCalledWith(
      2,
      1,
      expect.any(Gtk.ColumnViewColumn)
    )
  })

  test("should handle unmount gracefully", () => {
    render(
      <ListProvider.Container>
        <ColumnView
          columns={[{ title: "Column 1" }]}
          renderCell={() => <Box />}
        />
      </ListProvider.Container>
    )

    render(null)

    const columnView = findBy({ type: "ColumnView" })
    expect(columnView).toBeNull()
  })

  test("should call renderCell with correct arguments", () => {
    jest.spyOn(useListItemFactoryModule, "default")

    const mockedUseListItemFactory =
      useListItemFactoryModule.default as jest.MockedFunction<
        typeof useListItemFactoryModule.default
      >

    const item = {}
    const listItem = new Gtk.ListItem()
    const renderCell = jest.fn()

    render(
      <ListProvider.Container>
        <ColumnView columns={[{ title: "Column 1" }]} renderCell={renderCell} />
      </ListProvider.Container>
    )

    const renderFn = mockedUseListItemFactory.mock.calls[0][0]

    renderFn?.(item, listItem)

    expect(renderCell).toHaveBeenCalledWith(item, 0, listItem)
  })
})
