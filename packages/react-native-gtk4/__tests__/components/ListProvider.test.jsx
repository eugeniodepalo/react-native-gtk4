import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"
import useList from "../../src/hooks/useList.js"

describe("ListProvider", () => {
  let context

  const Component = ({ children } = {}) => {
    context = useList()
    return children
  }

  beforeEach(() => {
    setup()
    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    const items = []

    context.model.splice = jest.fn((index, count, values) => {
      items.splice(index, count, ...values)
    })

    context.model.remove = jest.fn((index) => {
      items.splice(index, 1)
    })
  })

  describe("Container", () => {
    test("should render", () => {
      render(
        <ListProvider.Container>
          <Component>
            <Box />
          </Component>
        </ListProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ListProvider.Container>
          <Component>
            <Box />
          </Component>
        </ListProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    const index = 0
    const value = "bar"

    test("should render", () => {
      render(
        <ListProvider.Container>
          <Component>
            <Box />
            <ListProvider.Item index={index} value={value} />
          </Component>
        </ListProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ListProvider.Container>
          <Component>
            <Box />
            <ListProvider.Item index={index} value={value} />
          </Component>
        </ListProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should throw when not in a container", () => {
      expect(() =>
        render(<ListProvider.Item index={index} value={value} />)
      ).toThrow("useList must be used within a ListProvider.Container")
    })

    test("should insert item into model", () => {
      render(
        <ListProvider.Container>
          <Component>
            <ListProvider.Item index={index} value={value} />
          </Component>
        </ListProvider.Container>
      )

      expect(context.model.splice).toHaveBeenCalledWith(index, 0, [""])
    })

    test("should remove item from model when unmounting", async () => {
      render(
        <ListProvider.Container>
          <Component>
            <ListProvider.Item index={index} value={value} />
          </Component>
        </ListProvider.Container>
      )

      render(null)

      expect(context.model.remove).toHaveBeenCalledWith(0)
    })
  })
})
