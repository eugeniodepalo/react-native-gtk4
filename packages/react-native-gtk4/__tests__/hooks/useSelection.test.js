import React from "react"
import { setup, render } from "../../src/test-support/index.js"
import useSelection from "../../src/hooks/useSelection.js"
import Gtk from "@girs/node-gtk-4.0"
import useList from "../../src/hooks/useList.js"
import ListProvider from "../../src/components/ListProvider.js"

describe("useSelection", () => {
  let model

  beforeEach(setup)

  const Component = function ({
    selectionMode,
    selection,
    onSelectionChanged,
    children,
  }) {
    const list = useList()

    model = useSelection({
      selectionMode,
      selection,
      itemsRef: list.itemsRef,
      model: list.model,
      onSelectionChanged,
    })

    return (
      <ListProvider.Container value={list}>{children}</ListProvider.Container>
    )
  }

  test("should update model when selection mode changes", () => {
    render(<Component selectionMode={Gtk.SelectionMode.MULTIPLE} />)

    const initialModel = model

    expect(Gtk.MultiSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })

    expect(initialModel).toBeInstanceOf(Gtk.MultiSelection)

    render(<Component selectionMode={Gtk.SelectionMode.SINGLE} />)

    const updatedModel = model

    expect(Gtk.SingleSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
      autoselect: false,
    })

    expect(updatedModel).toBeInstanceOf(Gtk.SingleSelection)
  })

  test("should update selected items from props", () => {
    const selection = ["foo", "bar"]
    const ids = []

    Gtk.StringList.mockImplementation(() => ({
      append: jest.fn((id) => {
        ids.push(id)
      }),
      remove: jest.fn((index) => {
        ids.splice(index, 1)
      }),
      getNItems: () => ids.length,
      getString: (index) => ids[index],
    }))

    render(
      <Component selection={selection}>
        <ListProvider.Item id="foo" value="foo" />
        <ListProvider.Item id="bar" value="bar" />
        <ListProvider.Item id="baz" value="baz" />
      </Component>
    )

    expect(model.unselectAll).toHaveBeenCalled()
    expect(model.selectItem).toHaveBeenCalledWith(0, false)
    expect(model.selectItem).toHaveBeenCalledWith(1, false)
    expect(model.selectItem).not.toHaveBeenCalledWith(2, expect.anything())
  })
})
