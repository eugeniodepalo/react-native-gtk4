import * as useListItemFactoryModule from "../../src/hooks/useListItemFactory.js"
import * as useListContextModule from "../../src/hooks/useListContext.js"
import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import DropDown from "../../src/components/DropDown.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DropDown", () => {
  let useListItemFactory
  let useListContext

  beforeEach(() => {
    setup()
    useListItemFactory = jest.spyOn(useListItemFactoryModule, "default")
    useListContext = jest.spyOn(useListContextModule, "default")
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

    expect(useListItemFactory).toHaveBeenCalledWith({
      render: renderFn,
      itemsRef: { current: {} },
    })

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
      useListContext.mock.results[0].value.model
    )
  })
})
