import AnyWidget from "../src/widget.js"
import Gtk from "@girs/node-gtk-4.0"

function createWidget() {
  return new (class extends AnyWidget {
    createNode() {
      return new Gtk.Widget()
    }
  })()
}

describe("AnyWidget", () => {
  let widget

  beforeEach(() => {
    widget = createWidget()
  })

  it("initializes with default values", () => {
    expect(widget.children).toEqual([])
    expect(widget.handlers).toEqual({})
    expect(widget.props).toEqual({})
  })

  it("can append a child", () => {
    const child = createWidget()
    widget.appendChild(child)
    expect(widget.children).toContain(child)
  })

  it("can remove a child", () => {
    const child = createWidget()

    widget.appendChild(child)
    widget.removeChild(child)

    expect(widget.children).not.toContain(child)
  })

  it("throws an error when removing a non-existent child", () => {
    const child = createWidget()
    expect(() => widget.removeChild(child)).toThrow("Removed child not found")
  })

  it("can insert a child before another", () => {
    const child1 = createWidget()
    const child2 = createWidget()

    widget.appendChild(child1)
    widget.insertBefore(child2, child1)

    expect(widget.children[0]).toBe(child2)
  })

  it("throws an error when inserting before a non-existent child", () => {
    const child1 = createWidget()
    const child2 = createWidget()

    expect(() => widget.insertBefore(child1, child2)).toThrow(
      "Before child not found"
    )
  })

  it("sets handler and connects to signal", () => {
    const callback = jest.fn()

    widget.setHandler("event", callback)

    const handler = widget.handlers["event"]

    expect(handler).toBeInstanceOf(Function)
    expect(widget.node.on).toHaveBeenCalledWith("event", expect.any(Function))
    expect(widget.node.off).not.toHaveBeenCalled()

    handler()

    expect(callback).toHaveBeenCalled()
  })

  it("sets handler and disconnects from signal", () => {
    const callback = jest.fn()

    widget.setHandler("event", callback)
    widget.setHandler("event", null)

    const handler = widget.handlers["event"]

    expect(widget.node.on).toHaveBeenCalledWith("event", expect.any(Function))
    expect(widget.node.off).toHaveBeenCalledWith("event", expect.any(Function))
    expect(handler).toBeUndefined()
  })

  it("replaces existing handler", () => {
    const callback1 = jest.fn()
    const callback2 = jest.fn()

    widget.setHandler("event", callback1)
    widget.setHandler("event", callback2)

    const handler = widget.handlers["event"]

    expect(widget.node.on).toHaveBeenCalledWith("event", expect.any(Function))
    expect(widget.node.off).toHaveBeenCalledWith("event", expect.any(Function))
    expect(handler).toBeInstanceOf(Function)

    handler()

    expect(callback1).not.toHaveBeenCalled()
    expect(callback2).toHaveBeenCalled()
  })
})
