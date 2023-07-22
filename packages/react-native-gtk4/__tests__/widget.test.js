import { createAnyWidget } from "../test-support/utils.js"

describe("AnyWidget", () => {
  let widget

  beforeEach(() => {
    widget = createAnyWidget()
  })

  it("initializes with default children", () => {
    expect(widget.children).toEqual([])
  })

  it("can append a child", () => {
    const child = createAnyWidget()
    widget.appendChild(child)
    expect(widget.children).toContain(child)
  })

  it("can remove a child", () => {
    const child = createAnyWidget()

    widget.appendChild(child)
    widget.removeChild(child)

    expect(widget.children).not.toContain(child)
  })

  it("throws an error when removing a non-existent child", () => {
    const child = createAnyWidget()
    expect(() => widget.removeChild(child)).toThrow("Removed child not found")
  })

  it("can insert a child before another", () => {
    const child1 = createAnyWidget()
    const child2 = createAnyWidget()

    widget.appendChild(child1)
    widget.insertBefore(child2, child1)

    expect(widget.children[0]).toBe(child2)
  })

  it("throws an error when inserting before a non-existent child", () => {
    const child1 = createAnyWidget()
    const child2 = createAnyWidget()

    expect(() => widget.insertBefore(child1, child2)).toThrow(
      "Before child not found"
    )
  })

  it("sets handler and connects to signal", () => {
    const callback = jest.fn()

    widget.setHandler("event", callback)

    expect(widget.node.on).toHaveBeenCalledWith("event", expect.any(Function))
    expect(widget.node.off).not.toHaveBeenCalled()

    const handler = widget.node.on.mock.calls[0][1]
    handler()

    expect(callback).toHaveBeenCalled()
  })

  it("sets handler and disconnects from signal", () => {
    const callback = jest.fn()

    widget.setHandler("event", callback)
    widget.setHandler("event", null)

    const handler = widget.node.on.mock.calls[0][1]

    expect(widget.node.off).toHaveBeenCalledWith("event", handler)
  })

  it("replaces existing handler", () => {
    const callback1 = jest.fn()
    const callback2 = jest.fn()

    widget.setHandler("event", callback1)
    widget.setHandler("event", callback2)

    const handler1 = widget.node.on.mock.calls[0][1]
    const handler2 = widget.node.on.mock.calls[1][1]

    expect(widget.node.on).toHaveBeenCalledWith("event", handler1)
    expect(widget.node.off).toHaveBeenCalledWith("event", handler1)
    expect(widget.node.on).toHaveBeenCalledWith("event", handler2)
  })
})
