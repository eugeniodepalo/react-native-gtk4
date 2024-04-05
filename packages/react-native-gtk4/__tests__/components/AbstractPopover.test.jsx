import React, { createRef } from "react"
import { render, findBy, setup } from "../../test-support/index.js"
import AbstractPopover from "../../src/components/AbstractPopover.js"
import Gtk from "@girs/node-gtk-4.0"
import { Box } from "../../src/generated/intrinsics.js"

describe("AbstractPopover", () => {
  const elementType = "Popover"

  beforeEach(setup)

  test("should render", () => {
    render(<AbstractPopover elementType={elementType} />)

    const popover = findBy({ type: elementType })

    expect(popover.node).toBeInstanceOf(Gtk.Popover)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const childRef = createRef()
    const contentRef = createRef()

    render(
      <AbstractPopover
        ref={ref}
        elementType={elementType}
        content={<Box id="content" ref={contentRef} />}
      >
        <Box id="child" ref={childRef} />
      </AbstractPopover>
    )

    const popover = findBy({ type: elementType })
    const child = findBy({ props: { id: "child" } })
    const content = findBy({ props: { id: "content" } })

    expect(ref.current).toBe(popover.node)
    expect(childRef.current).toBe(child.node)
    expect(contentRef.current).toBe(content.node)
  })

  test("should handle unmount gracefully", () => {
    render(<AbstractPopover elementType={elementType} />)

    render(null)

    const popover = findBy({ type: elementType })

    expect(popover).toBeNull()
  })

  test("should set content and child", () => {
    render(
      <AbstractPopover elementType={elementType} content={<Box id="content" />}>
        <Box id="child" />
      </AbstractPopover>
    )

    const popover = findBy({ type: elementType })
    const child = findBy({ props: { id: "child" } })
    const content = findBy({ props: { id: "content" } })

    expect(child).not.toBeNull()
    expect(popover.node.setParent).toHaveBeenCalledWith(child.node)
    expect(popover.node.setChild).toHaveBeenCalledWith(content.node)
    expect(popover.node.popdown).toHaveBeenCalled()
  })

  test("should open when specified", () => {
    render(<AbstractPopover elementType={elementType} open />)

    const popover = findBy({ type: elementType })

    expect(popover.node.popup).toHaveBeenCalled()
  })
})
