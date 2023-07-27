import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import AbstractPopover from "../../src/components/AbstractPopover.js"
import { Button, Label } from "../../src/generated/intrinsics.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AbstractPopover", () => {
  const elementType = "Popover"

  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.Popover, "child")
    mockProperty(Gtk.Popover, "parent")
  })

  test("should render correctly with a child and content", () => {
    const container = render(
      <AbstractPopover
        open={true}
        content={<Label text="Popover content" />}
        elementType={elementType}
      >
        <Button label="Click me!" />
      </AbstractPopover>
    )

    const popover = container.findByType("Popover")
    const button = container.findByType("Button")
    const label = container.findByType("Label")

    expect(popover.node.child).toBe(label.node)
    expect(popover.node.parent).toBe(button.node)
  })

  test("should open and close the popover when the open prop changes", () => {
    const container = render(
      <AbstractPopover
        open={false}
        content={<Label text="Popover content" />}
        elementType={elementType}
      >
        <Button label="Click me!" />
      </AbstractPopover>
    )

    const popover = container.findByType("Popover")

    expect(popover.node.popup).not.toHaveBeenCalled()

    render(
      <AbstractPopover
        open={true}
        content={<Label text="Popover content" />}
        elementType={elementType}
      >
        <Button label="Click me!" />
      </AbstractPopover>
    )

    expect(popover.node.popup).toHaveBeenCalled()
  })

  test("should be closed by default", () => {
    const container = render(
      <AbstractPopover
        content={<Label text="Popover content" />}
        elementType={elementType}
      >
        <Button label="Click me!" />
      </AbstractPopover>
    )

    const popover = container.findByType("Popover")

    expect(popover.node.popup).not.toHaveBeenCalled()
    expect(popover.node.popdown).toHaveBeenCalled()
  })

  test("should handle unmount gracefully", () => {
    jest.spyOn(React, "useRef")

    render(
      <AbstractPopover
        open={true}
        content={<Label text="Popover content" />}
        elementType={elementType}
      >
        <Button label="Click me!" />
      </AbstractPopover>
    )

    Gtk.Popover.prototype.popup.mockClear()
    Gtk.Popover.prototype.popdown.mockClear()

    for (const ref of React.useRef.mock.results.map((r) => r.value)) {
      ref.current = null
    }

    render(null)

    expect(Gtk.Popover.prototype.popup).not.toHaveBeenCalled()
    expect(Gtk.Popover.prototype.popdown).not.toHaveBeenCalled()
  })

  test("should handle open change with null refs", () => {
    jest.spyOn(React, "useRef")

    render(
      <AbstractPopover
        open={true}
        content={<Label text="Popover content" />}
        elementType={elementType}
      >
        <Button label="Click me!" />
      </AbstractPopover>
    )

    Gtk.Popover.prototype.popup.mockClear()
    Gtk.Popover.prototype.popdown.mockClear()

    for (const ref of React.useRef.mock.results.map((r) => r.value)) {
      ref.current = null
    }

    render(null)

    expect(Gtk.Popover.prototype.popup).not.toHaveBeenCalled()
    expect(Gtk.Popover.prototype.popdown).not.toHaveBeenCalled()
  })
})
