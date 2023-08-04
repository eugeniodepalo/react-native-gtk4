import Window from "../../src/generated/widgets/Window.js"
import "../../src/overrides/Window.js"

describe("Window overrides", () => {
  test("should set close-request handler", () => {
    const window = new Window({}, Window.createNode())

    window.commitMount()

    expect(window.node.on).toHaveBeenCalledWith(
      "close-request",
      expect.any(Function)
    )

    expect(window.node.on.mock.calls[0][1]()).toBe(true)
  })
})
