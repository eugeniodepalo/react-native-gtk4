import Window from "@/generated/widgets/Window.js"
import "@/overrides/Window.js"

describe("Window overrides", () => {
  describe("commitMount", () => {
    test("should prevent close", () => {
      const window = new Window({}, Window.createNode())

      window.commitMount()

      expect(window.node.on).toHaveBeenCalledWith(
        "close-request",
        expect.any(Function),
        true
      )

      const windowNodeOnMock = window.node.on as jest.Mock
      const [, onCloseRequest] = windowNodeOnMock.mock.calls[0]

      expect(onCloseRequest()).toBe(true)
    })
  })
})
