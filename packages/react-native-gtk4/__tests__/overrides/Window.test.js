import Window from "../../src/generated/widgets/Window.js"
import "../../src/overrides/Window.js"

describe("Window overrides", () => {
  describe("commitMount", () => {
    test("should prevent close", () => {
      const window = new Window({}, Window.createNode())

      window.commitMount()

      expect(window.node.on).toHaveBeenCalledWith(
        "close-request",
        expect.any(Function)
      )

      const [, onCloseRequest] = window.node.on.mock.calls[0]

      expect(onCloseRequest()).toBe(true)
    })
  })
})
