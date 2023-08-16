import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"
import useListModel from "../../src/hooks/useListModel.js"
import ListModelProvider from "../../src/components/ListModelProvider.js"

describe("ListProvider", () => {
  let context

  const Component = ({ children } = {}) => {
    context = useListModel()
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
    const value = { value: "bar" }

    test("should render", () => {
      render(
        <ListProvider.Container>
          <Component>
            <Box />
            <ListProvider.List>
              <ListProvider.Item value={value} />
            </ListProvider.List>
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
            <ListProvider.List>
              <ListProvider.Item value={value} />
            </ListProvider.List>
          </Component>
        </ListProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should throw when not in a ListProvider.Container", () => {
      expect(() =>
        render(
          <ListModelProvider model={{}} items={{}} setItems={() => {}}>
            <ListProvider.List>
              <ListProvider.Item value={value} />
            </ListProvider.List>
          </ListModelProvider>
        )
      ).toThrow(
        "ListProvider.List must be used within a ListProvider.Container"
      )
    })

    test("should insert item into model", () => {
      render(
        <ListProvider.Container>
          <Component>
            <ListProvider.List>
              <ListProvider.Item value={value} />
            </ListProvider.List>
          </Component>
        </ListProvider.Container>
      )

      expect(context.model.splice).toHaveBeenCalledWith(0, 0, ["0"])
    })

    test("should remove item from model when unmounting", async () => {
      render(
        <ListProvider.Container>
          <Component>
            <ListProvider.List>
              <ListProvider.Item value={value} />
            </ListProvider.List>
          </Component>
        </ListProvider.Container>
      )

      render(null)

      expect(context.model.remove).toHaveBeenCalledWith(0)
    })
  })
})
