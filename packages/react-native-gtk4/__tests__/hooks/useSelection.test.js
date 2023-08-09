import React from "react"
import { setup, render } from "../../src/test-support/index.js"
import useSelection from "../../src/hooks/useSelection.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"

describe("useSelection", () => {
  let model

  beforeEach(setup)

  const Component = function ({
    selectionMode,
    selection,
    onSelectionChanged,
  }) {
    model = useSelection({
      selectionMode,
      selection,
      onSelectionChanged,
    })

    return null
  }

  test("should update model when selection mode changes", () => {
    render(
      <ListProvider.Container>
        <Component selectionMode={Gtk.SelectionMode.MULTIPLE} />
      </ListProvider.Container>
    )

    const initialModel = model

    expect(Gtk.MultiSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })

    expect(initialModel).toBeInstanceOf(Gtk.MultiSelection)

    render(
      <ListProvider.Container>
        <Component selectionMode={Gtk.SelectionMode.SINGLE} />
      </ListProvider.Container>
    )

    const updatedModel = model

    expect(Gtk.SingleSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
      autoselect: false,
    })

    expect(updatedModel).toBeInstanceOf(Gtk.SingleSelection)
  })

  test("should update selected items from props", () => {
    const selection = ["0", "1"]
    const items = []
    const MockedStringList = Gtk.StringList

    Gtk.StringList = class extends MockedStringList {
      splice(index, count, values) {
        items.splice(index, count, ...values)
      }

      remove(index) {
        items.splice(index, 1)
      }

      getItem(index) {
        return {
          getProperty: () => index.toString(),
        }
      }
    }

    render(
      <ListProvider.Container>
        <ListProvider.Item index={0} value="foo" />
        <ListProvider.Item index={1} value="bar" />
        <ListProvider.Item index={2} value="baz" />
      </ListProvider.Container>
    )

    const onItemsChanged = Gtk.StringList.mock.instances[0].on.mock.calls.find(
      ([name]) => name === "items-changed"
    )[1]

    onItemsChanged(0, 0, 2)

    render(
      <ListProvider.Container>
        <ListProvider.Item index={0} value="foo" />
        <ListProvider.Item index={1} value="bar" />
        <ListProvider.Item index={2} value="baz" />
        <Component selection={selection} />
      </ListProvider.Container>
    )

    expect(model.unselectAll).toHaveBeenCalled()
    expect(model.selectItem).toHaveBeenCalledWith(0, false)
    expect(model.selectItem).toHaveBeenCalledWith(1, false)
    expect(model.selectItem).not.toHaveBeenCalledWith(2, expect.anything())
  })
})
