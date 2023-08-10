import React from "react"
import Gtk from "@girs/node-gtk-4.0"
import { render, setup, findBy } from "../../src/test-support/index.js"
import TreeProvider from "../../src/components/TreeProvider.js"
import ListModelProvider from "../../src/components/ListModelProvider.js"
import { Box } from "../../src/generated/intrinsics.js"

describe("TreeProvider", () => {
  let model

  beforeEach(() => {
    setup()

    Gtk.TreeListModel.new.mockImplementation(
      (...args) => new Gtk.TreeListModel(...args)
    )

    const MockedStringList = Gtk.StringList

    Gtk.StringList = class extends MockedStringList {
      constructor() {
        super()
        this.items = []
      }

      splice(index, count, values) {
        this.items.splice(index, count, ...values)
      }
    }

    render(<TreeProvider.Container />)

    model = Gtk.StringList.mock.instances[0]
  })

  describe("Container", () => {
    test("should render", () => {
      render(
        <TreeProvider.Container>
          <Box />
        </TreeProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <TreeProvider.Container>
          <Box />
        </TreeProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    const value = "value"

    test("should throw when not in a TreeProvider.Container", () => {
      expect(() =>
        render(
          <ListModelProvider model={{}} items={{}} setItems={() => {}}>
            <TreeProvider.List>
              <TreeProvider.Item value={value} />
            </TreeProvider.List>
          </ListModelProvider>
        )
      ).toThrow(
        "TreeProvider.Item must be used inside a TreeProvider.Container"
      )
    })

    test("should insert item into tree model", () => {
      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(model.splice).toHaveBeenCalledWith(0, 0, ["0"])
    })

    test("should remove item from tree model when unmounting", async () => {
      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(null)

      expect(model.splice).toHaveBeenCalledWith(0, 1, [])
    })
  })
})
