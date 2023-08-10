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
    const selection = [0, 1]
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
        <ListProvider.List>
          <ListProvider.Item value="foo" />
          <ListProvider.Item value="bar" />
          <ListProvider.Item value="baz" />
        </ListProvider.List>
        <Component selection={selection} />
      </ListProvider.Container>
    )

    expect(model.unselectAll).toHaveBeenCalled()
    expect(model.selectItem).toHaveBeenCalledWith(0, false)
    expect(model.selectItem).toHaveBeenCalledWith(1, false)
    expect(model.selectItem).not.toHaveBeenCalledWith(2, expect.anything())
  })

  test("should call onSelectionChanged with updated selection", () => {
    const onSelectionChanged = jest.fn()
    let currentIndex = 0
    const selection = [0, 1]

    model.getSelection = jest.fn(() => selection)

    const bitsetIter = new Gtk.BitsetIter()

    bitsetIter.next = jest.fn(() => {
      currentIndex++
      return [true, bitsetIter]
    })

    bitsetIter.getValue = jest.fn(() => selection[currentIndex])
    bitsetIter.isValid = jest.fn(() => currentIndex < selection.length)

    Gtk.bitsetIterInitFirst.mockImplementation(() => [true, bitsetIter])

    render(
      <ListProvider.Container>
        <ListProvider.List>
          <ListProvider.Item value="foo" />
          <ListProvider.Item value="bar" />
          <ListProvider.Item value="baz" />
        </ListProvider.List>
        <Component
          selectionMode={Gtk.SelectionMode.MULTIPLE}
          onSelectionChanged={onSelectionChanged}
        />
      </ListProvider.Container>
    )

    const selectionChanged = model.on.mock.calls.find(
      ([name]) => name === "selection-changed"
    )[1]

    selectionChanged()

    expect(onSelectionChanged).toHaveBeenCalled()

    expect(onSelectionChanged).toHaveBeenCalledWith(
      expect.any(Array),
      expect.any(Array)
    )
  })

  test("should return a NoSelection model when no mode is specified", () => {
    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    expect(Gtk.NoSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })
    expect(model).toBeInstanceOf(Gtk.NoSelection)
  })
})
