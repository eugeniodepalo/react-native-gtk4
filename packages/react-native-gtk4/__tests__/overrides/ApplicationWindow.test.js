import ApplicationWindow from "../../src/generated/widgets/ApplicationWindow.js"
import "../../src/overrides/ApplicationWindow.js"

describe("ApplicationWindow overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const window = new ApplicationWindow({}, ApplicationWindow.createNode())

      window.commitMount()

      expect(window.node.present).toHaveBeenCalled()
    })
  })
})
