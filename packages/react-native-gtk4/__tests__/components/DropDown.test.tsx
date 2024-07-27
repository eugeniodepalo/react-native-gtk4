import * as useListItemFactoryModule from "@/hooks/useListItemFactory.js"
import * as useListModelModule from "@/hooks/useListModel.js"
import React, { createRef } from "react"
import { render, setup, findBy, fireEvent } from "@/test-support/index.js"
import DropDown from "@/components/DropDown.js"
import ListProvider from "@/components/ListProvider.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import GObject from "@/generated/girs/node-gobject-2.0"
import { Box } from "@/generated/intrinsics.js"

describe("DropDown", () => {
  let useListItemFactory: jest.MockedFunction<
    typeof useListItemFactoryModule.default
  >

  let useListModel: jest.MockedFunction<typeof useListModelModule.default>

  beforeEach(() => {
    setup()

    useListItemFactory = jest.spyOn(
      useListItemFactoryModule,
      "default"
    ) as jest.MockedFunction<typeof useListItemFactoryModule.default>

    useListModel = jest.spyOn(
      useListModelModule,
      "default"
    ) as jest.MockedFunction<typeof useListModelModule.default>

    const items: string[] = []
    const BaseStringList = Gtk.StringList

    Gtk.StringList = class extends BaseStringList {
      getItem(position: number): GObject.Object | null {
        const obj = new GObject.Object()

        jest.spyOn(obj, "getProperty").mockImplementation((name) => {
          if (name === "string") {
            return items[position]
          }

          return null
        })

        return obj
      }

      splice(index: number, count: number, additions: string[] | null): void {
        items.splice(index, count, ...(additions || []))
      }

      remove(index: number) {
        items.splice(index, 1)
      }
    }
  })

  test("should render", () => {
    render(<DropDown />)

    const dropDown = findBy({ type: "DropDown" })

    expect(dropDown.node).toBeInstanceOf(Gtk.DropDown)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.DropDown>()

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
    const renderFn = () => <Box />

    render(<DropDown renderItem={renderFn} />)

    const dropDown = findBy<Gtk.DropDown>({ type: "DropDown" })

    expect(useListItemFactory).toHaveBeenCalledWith(renderFn)

    expect(dropDown.node.setFactory).toHaveBeenCalledWith(
      useListItemFactory.mock.results[0].value
    )

    expect(dropDown.node.setListFactory).toHaveBeenCalledWith(
      useListItemFactory.mock.results[1].value
    )
  })

  test("should unset factories", () => {
    render(<DropDown renderItem={() => <Box />} />)

    const dropDown = findBy<Gtk.DropDown>({ type: "DropDown" })

    render(<DropDown renderItem={null} />)

    expect(dropDown.node.setFactory).toHaveBeenNthCalledWith(2, null)
    expect(dropDown.node.setListFactory).toHaveBeenNthCalledWith(2, null)
  })

  test("should set model", () => {
    render(<DropDown />)

    const dropDown = findBy<Gtk.DropDown>({ type: "DropDown" })

    expect(dropDown.node.setModel).toHaveBeenCalledWith(
      useListModel.mock.results[0].value.model
    )
  })

  test("should set selectedItem", () => {
    render(
      <DropDown selectedItem={0}>
        <ListProvider.Item value="test" />
      </DropDown>
    )

    const dropDown = findBy<Gtk.DropDown>({ type: "DropDown" })

    expect(dropDown.node.setSelected).toHaveBeenCalledWith(0)
  })

  test("should call onSelectedItemChanged when selected item changes", () => {
    const onSelectedItemChanged = jest.fn()
    const value = { value: "bar" }

    render(
      <DropDown onSelectedItemChanged={onSelectedItemChanged}>
        <ListProvider.Item value={value} />
      </DropDown>
    )

    const dropDown = findBy<Gtk.DropDown>({ type: "DropDown" })

    dropDown.node.selected = 0

    fireEvent(dropDown, "notify::selected", dropDown.node)

    expect(onSelectedItemChanged).toHaveBeenCalledWith(0, value)
  })
})
