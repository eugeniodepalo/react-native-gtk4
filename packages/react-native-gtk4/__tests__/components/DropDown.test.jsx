import * as useListItemFactoryModule from "../../src/hooks/useListItemFactory.js"
import * as useListModelModule from "../../src/hooks/useListModel.js"
import React, { createRef } from "react"
import {
  render,
  setup,
  findBy,
  fireEvent,
} from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import DropDown from "../../src/components/DropDown.js"
import ListProvider from "../../src/components/ListProvider.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DropDown", () => {
  let useListItemFactory
  let useListModel

  beforeEach(() => {
    setup()

    useListItemFactory = jest.spyOn(useListItemFactoryModule, "default")
    useListModel = jest.spyOn(useListModelModule, "default")

    const items = []
    const MockedStringList = Gtk.StringList

    Gtk.StringList = class extends MockedStringList {
      splice(index, count, values) {
        items.splice(index, count, ...values)
      }

      remove(index) {
        items.splice(index, 1)
      }
    }
  })

  test("should render", () => {
    render(
      <DropDown>
        <Box />
      </DropDown>
    )

    const dropDown = findBy({ type: "DropDown" })
    const child = findBy({ type: "Box" })

    expect(dropDown.node).toBeInstanceOf(Gtk.DropDown)
    expect(child.node).toBeInstanceOf(Gtk.Box)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<DropDown ref={ref} />)

    const dropDown = findBy({ type: "DropDown" })

    expect(ref.current).toBe(dropDown.node)
  })

  test("should handle unmount gracefully", () => {
    render(<DropDown />)

    render(null)

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown).toBeNull()
  })

  test("should set factories", () => {
    const renderFn = () => null

    render(<DropDown renderItem={renderFn} />)

    const dropDown = findBy({ type: "DropDown" })

    expect(useListItemFactory).toHaveBeenCalledWith(renderFn)

    expect(dropDown.node.setFactory).toHaveBeenCalledWith(
      useListItemFactory.mock.results[0].value
    )

    expect(dropDown.node.setListFactory).toHaveBeenCalledWith(
      useListItemFactory.mock.results[1].value
    )
  })

  test("should unset factories", () => {
    render(<DropDown renderItem={() => null} />)

    const dropDown = findBy({ type: "DropDown" })

    render(<DropDown />)

    expect(dropDown.node.setFactory).toHaveBeenNthCalledWith(2, null)
    expect(dropDown.node.setListFactory).toHaveBeenNthCalledWith(2, null)
  })

  test("should set model", () => {
    render(<DropDown />)

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown.node.setModel).toHaveBeenCalledWith(
      useListModel.mock.results[0].value.model
    )
  })

  test("should set selectedItem", () => {
    render(
      <DropDown selectedItem={0}>
        <ListProvider.Item index={0} value="test" />
      </DropDown>
    )

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown.node.setSelected).toHaveBeenCalledWith(0)
  })

  test("should call onSelectedItemChanged when selected item changes", () => {
    const onSelectedItemChanged = jest.fn()

    render(
      <DropDown onSelectedItemChanged={onSelectedItemChanged}>
        <ListProvider.Item index={0} value="bar" />
      </DropDown>
    )

    const dropDown = findBy({ type: "DropDown" })

    dropDown.node.selected = 0

    fireEvent(dropDown, "notify::selected")

    expect(onSelectedItemChanged).toHaveBeenCalledWith(0, "bar")
  })
})
