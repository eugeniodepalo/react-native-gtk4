import Entry from "@/generated/widgets/Entry.js"
import "@/overrides/Entry.js"

describe("Entry overrides", () => {
  let entry: Entry

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

    test("should call parent set", () => {
      entry.set("unknown", "value")

      expect(entry.node.setText).not.toHaveBeenCalled()
    })
  })
})
