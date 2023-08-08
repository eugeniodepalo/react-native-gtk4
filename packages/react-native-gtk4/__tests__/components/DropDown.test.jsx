import * as useListItemFactoryModule from "../../src/hooks/useListItemFactory.js"
import * as useTreeModule from "../../src/hooks/useList.js"
import React, { createRef } from "react"
import {
  render,
  setup,
  findBy,
  fireEvent,
} from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import DropDown from "../../src/components/DropDown.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"

describe("DropDown", () => {
  let useListItemFactory
  let useList

  beforeEach(() => {
    setup()

    useListItemFactory = jest.spyOn(useListItemFactoryModule, "default")
    useList = jest.spyOn(useTreeModule, "default")

    const items = []

    Gtk.StringList.mockImplementation(() => ({
      splice: jest.fn((index, count, values) => {
        items.splice(index, count, ...values)
      }),
      remove: jest.fn((index) => {
        items.splice(index, 1)
      }),
    }))
  })

  test("should render", () => {
    render(
      <ListProvider.Container>
        <DropDown>
          <Box />
        </DropDown>
      </ListProvider.Container>
    )

    const dropDown = findBy({ type: "DropDown" })
    const child = findBy({ type: "Box" })

    expect(dropDown.node).toBeInstanceOf(Gtk.DropDown)
    expect(child.node).toBeInstanceOf(Gtk.Box)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(
      <ListProvider.Container>
        <DropDown ref={ref} />
      </ListProvider.Container>
    )

    const dropDown = findBy({ type: "DropDown" })

    expect(ref.current).toBe(dropDown.node)
  })

  test("should handle unmount gracefully", () => {
    render(
      <ListProvider.Container>
        <DropDown />
      </ListProvider.Container>
    )

    render(null)

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown).toBeNull()
  })

  test("should set factories", () => {
    const renderFn = () => null

    render(
      <ListProvider.Container>
        <DropDown renderItem={renderFn} />
      </ListProvider.Container>
    )

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
    render(
      <ListProvider.Container>
        <DropDown renderItem={() => null} />
      </ListProvider.Container>
    )

    const dropDown = findBy({ type: "DropDown" })

    render(
      <ListProvider.Container>
        <DropDown />
      </ListProvider.Container>
    )

    expect(dropDown.node.setFactory).toHaveBeenNthCalledWith(2, null)
    expect(dropDown.node.setListFactory).toHaveBeenNthCalledWith(2, null)
  })

  test("should set model", () => {
    render(
      <ListProvider.Container>
        <DropDown />
      </ListProvider.Container>
    )

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown.node.setModel).toHaveBeenCalledWith(
      useList.mock.results[0].value.model
    )
  })

  test("should set selectedItem", () => {
    render(
      <ListProvider.Container>
        <DropDown selectedItem={0}>
          <ListProvider.Item index={0} value="test" />
        </DropDown>
      </ListProvider.Container>
    )

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown.node.setSelected).toHaveBeenCalledWith(0)
  })

  test("should call onSelectedItemChanged when selected item changes", () => {
    const onSelectedItemChanged = jest.fn()

    render(
      <ListProvider.Container>
        <DropDown onSelectedItemChanged={onSelectedItemChanged}>
          <ListProvider.Item index={0} value="bar" />
        </DropDown>
      </ListProvider.Container>
    )

    const dropDown = findBy({ type: "DropDown" })

    dropDown.node.selected = 0

    fireEvent(dropDown, "notify::selected")

    expect(onSelectedItemChanged).toHaveBeenCalledWith(0, "bar")
  })
})
