import { createMockWidget } from "../../src/test-support/utils.js"

describe("AbstractWidget", () => {
  let widget

  beforeEach(() => {
    widget = createMockWidget()
  })

  test("sets handler and connects to signal", () => {
    const callback = jest.fn()

    widget.setHandler("event", callback)

    expect(widget.node.on).toHaveBeenCalledWith("event", expect.any(Function))
    expect(widget.node.off).not.toHaveBeenCalled()

    const handler = widget.node.on.mock.calls[0][1]
    handler()

    expect(callback).toHaveBeenCalled()
  })

  test("sets handler and disconnects from signal", () => {
    const callback = jest.fn()

    widget.setHandler("event", callback)
    widget.setHandler("event", null)

    const handler = widget.node.on.mock.calls[0][1]

    expect(widget.node.off).toHaveBeenCalledWith("event", handler)
  })

  test("replaces existing handler", () => {
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
