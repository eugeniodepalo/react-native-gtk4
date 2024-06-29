import React from "react"
import { setup, render } from "@/test-support/index.js"
import useSelection, { OnSelectionChanged } from "@/hooks/useSelection.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import ListProvider from "@/components/ListProvider.js"
import GObject from "@/generated/girs/node-gobject-2.0"

const MockedGtk = Gtk as jest.Mocked<typeof Gtk>

describe("useSelection", () => {
  let model: Gtk.SelectionModel | null

  beforeEach(setup)

  const Component = function ({
    selectionMode,
    selection,
    onSelectionChanged,
  }: {
    selectionMode: Gtk.SelectionMode
    selection: number[]
    onSelectionChanged: OnSelectionChanged
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
        <Component
          selectionMode={Gtk.SelectionMode.MULTIPLE}
          selection={[]}
          onSelectionChanged={() => {}}
        />
      </ListProvider.Container>
    )

    const initialModel = model

    expect(Gtk.MultiSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })

    expect(initialModel).toBeInstanceOf(Gtk.MultiSelection)

    render(
      <ListProvider.Container>
        <Component
          selectionMode={Gtk.SelectionMode.SINGLE}
          selection={[]}
          onSelectionChanged={() => {}}
        />
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
    const items: string[] = []
    const MockedStringList = Gtk.StringList

    Gtk.StringList = class extends MockedStringList {
      splice(index: number, count: number, additions: string[] | null) {
        items.splice(index, count, ...(additions || []))
      }

      remove(index: number) {
        items.splice(index, 1)
      }

      getItem(index: number) {
        const obj = new GObject.Object()
        obj.getProperty = () => index.toString() as any
        return obj
      }
    }

    render(
      <ListProvider.Container>
        <ListProvider.List>
          <ListProvider.Item value="foo" />
          <ListProvider.Item value="bar" />
          <ListProvider.Item value="baz" />
        </ListProvider.List>
        <Component
          selection={selection}
          selectionMode={Gtk.SelectionMode.MULTIPLE}
          onSelectionChanged={() => {}}
        />
      </ListProvider.Container>
    )

    expect(model?.unselectAll).toHaveBeenCalled()
    expect(model?.selectItem).toHaveBeenCalledWith(0, false)
    expect(model?.selectItem).toHaveBeenCalledWith(1, false)
    expect(model?.selectItem).not.toHaveBeenCalledWith(2, expect.anything())
  })

  test("should call onSelectionChanged with updated selection", () => {
    const onSelectionChanged = jest.fn()
    let currentIndex = 0
    const selection = [0, 1]

    model!.getSelection = jest.fn(() => selection as any)

    const bitsetIter = new Gtk.BitsetIter()

    bitsetIter.next = jest.fn(() => {
      currentIndex++
      return [true, bitsetIter] as any
    })

    bitsetIter.getValue = jest.fn(() => selection[currentIndex])
    bitsetIter.isValid = jest.fn(() => currentIndex < selection.length)

    MockedGtk.bitsetIterInitFirst.mockImplementation(
      () => [true, bitsetIter] as any
    )

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
          selection={[]}
        />
      </ListProvider.Container>
    )

    const mockedModelOn = model?.on as jest.Mock

    const selectionChanged = mockedModelOn.mock.calls.find(
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
        <Component
          selectionMode={Gtk.SelectionMode.NONE}
          selection={[]}
          onSelectionChanged={() => {}}
        />
      </ListProvider.Container>
    )

    expect(Gtk.NoSelection).toHaveBeenCalledWith({
      model: expect.any(Gtk.StringList),
    })
    expect(model).toBeInstanceOf(Gtk.NoSelection)
  })
})
