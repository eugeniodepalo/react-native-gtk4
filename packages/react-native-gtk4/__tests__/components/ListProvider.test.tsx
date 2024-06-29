import React from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import ListProvider from "@/components/ListProvider.js"
import useListModel from "@/hooks/useListModel.js"
import ListModelProvider, {
  ListModelContext,
} from "@/components/ListModelProvider.js"
import Gio from "@/generated/girs/node-gio-2.0.js"

describe("ListProvider", () => {
  let context: ListModelContext

  const Component = ({ children } = {} as { children?: React.ReactNode }) => {
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

    const items: string[] = []
    const model = context.model as Gtk.StringList

    model.getItem = jest.fn((index) => items[index] as any)

    model.splice = jest.fn((index, count, additions: string[] | null) => {
      items.splice(index, count, ...(additions || []))
    })

    model.remove = jest.fn((index) => {
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
          <ListModelProvider model={new Gio.ListModel()}>
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

      const model = context.model as Gtk.StringList

      expect(model.splice).toHaveBeenCalledWith(0, 0, ["0"])
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

      const model = context.model as Gtk.StringList

      expect(model.remove).toHaveBeenCalledWith(0)
    })
  })
})
