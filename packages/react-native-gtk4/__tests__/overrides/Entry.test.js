import Entry from "../../src/generated/widgets/Entry.js"
import "../../src/overrides/Entry.js"

describe("Entry overrides", () => {
  let entry

  beforeEach(() => {
    entry = new Entry({}, Entry.createNode())
  })

  describe("set", () => {
    test("should not set text if it's the same", () => {
      entry.node.text = "text"

      entry.set("text", "text")

      expect(entry.node.setText).not.toHaveBeenCalled()
    })

    test("should set text", () => {
      entry.set("text", "text")

      expect(entry.node.setText).toHaveBeenCalledWith("text")
    })
  })
})
