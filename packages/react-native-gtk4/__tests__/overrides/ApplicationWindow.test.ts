import ApplicationWindow from "@/generated/widgets/ApplicationWindow.js"
import "@/overrides/ApplicationWindow.js"

describe("ApplicationWindow overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const window = new ApplicationWindow({}, ApplicationWindow.createNode())

      window.commitMount()

      expect(window.node.present).toHaveBeenCalled()
    })
  })
})
