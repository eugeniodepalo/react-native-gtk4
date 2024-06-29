import React, { createRef } from "react"
import { render, findBy, setup } from "@/test-support/index.js"
import AbstractPopover from "@/components/AbstractPopover.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { Box } from "@/generated/intrinsics.js"

describe("AbstractPopover", () => {
  const elementType = "Popover"

  beforeEach(setup)

  test("should render", () => {
    render(<AbstractPopover elementType={elementType} />)

    const popover = findBy({ type: elementType })

    expect(popover.node).toBeInstanceOf(Gtk.Popover)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.Popover>()
    const childRef = createRef<Gtk.Box>()
    const contentRef = createRef<Gtk.Box>()

    render(
      <AbstractPopover
        ref={ref}
        elementType={elementType}
        content={<Box data-id="content" ref={contentRef} />}
      >
        <Box data-id="child" ref={childRef} />
      </AbstractPopover>
    )

    const popover = findBy({ type: elementType })
    const child = findBy({ props: { "data-id": "child" } })
    const content = findBy({ props: { "data-id": "content" } })

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
      <AbstractPopover
        elementType={elementType}
        content={<Box data-id="content" />}
      >
        <Box data-id="child" />
      </AbstractPopover>
    )

    const popover = findBy<Gtk.Popover>({ type: elementType })
    const child = findBy({ props: { "data-id": "child" } })
    const content = findBy({ props: { "data-id": "content" } })

    expect(child).not.toBeNull()
    expect(popover.node.setParent).toHaveBeenCalledWith(child.node)
    expect(popover.node.setChild).toHaveBeenCalledWith(content.node)
    expect(popover.node.popdown).toHaveBeenCalled()
  })

  test("should open when specified", () => {
    render(<AbstractPopover elementType={elementType} open />)

    const popover = findBy<Gtk.Popover>({ type: elementType })

    expect(popover.node.popup).toHaveBeenCalled()
  })
})
