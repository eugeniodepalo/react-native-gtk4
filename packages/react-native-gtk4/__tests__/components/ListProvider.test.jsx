import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"

describe("ListProvider", () => {
  let model
  let items

  beforeEach(setup)

  describe("Container", () => {
    beforeEach(() => {
      model = {}
      items = {}
    })

    test("should render", () => {
      render(
        <ListProvider.Container>
          <Box />
        </ListProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ListProvider.Container>
          <Box />
        </ListProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    const id = "foo"
    const value = "bar"

    beforeEach(() => {
      const ids = []

      model = {
        append: jest.fn((id) => {
          ids.push(id)
        }),
        remove: jest.fn((index) => {
          ids.splice(index, 1)
        }),
        getNItems: () => ids.length,
        getString: (index) => ids[index],
      }
    })

    test("should render", () => {
      render(
        <ListProvider.Container value={{ model, items }}>
          <Box />
          <ListProvider.Item id={id} value={value} />
        </ListProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ListProvider.Container value={{ model, items }}>
          <Box />
          <ListProvider.Item id={id} value={value} />
        </ListProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should throw when not in a container", () => {
      expect(() => render(<ListProvider.Item id={id} value={value} />)).toThrow(
        "ListProvider.Item must be used inside a ListProvider.Container"
      )
    })

    test("should append item to model", () => {
      render(
        <ListProvider.Container value={{ model, items }}>
          <ListProvider.Item id={id} value={value} />
        </ListProvider.Container>
      )

      expect(model.append).toHaveBeenCalledWith(id)
    })

    test("should remove item from model when unmounting", async () => {
      render(
        <ListProvider.Container value={{ model, items }}>
          <ListProvider.Item id={id} value={value} />
        </ListProvider.Container>
      )

      render(null)

      expect(model.remove).toHaveBeenCalledWith(0)
    })
  })
})
