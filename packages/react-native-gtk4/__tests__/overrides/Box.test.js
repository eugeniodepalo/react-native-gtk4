import Box from "../../src/generated/widgets/Box.js"
import "../../src/overrides/Box.js"

describe("Box overrides", () => {
  let box

  beforeEach(() => {
    box = new Box({}, Box.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} }

      box.appendChild(child)

      expect(box.node.append).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} }

      box.appendChild(child)
      child.node.parent = box.node

      box.removeChild(child)

      expect(box.node.remove).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should insert node", () => {
      const child1 = { node: {} }
      const child2 = { node: {} }
      const beforeChild = { node: {} }

      box.appendChild(child1)
      box.appendChild(beforeChild)

      box.insertBefore(child2, beforeChild)

      expect(box.node.insertChildAfter).toHaveBeenCalledWith(
        child1.node,
        child2.node
      )
    })

    test("should prepend when it's the first child", () => {
      const child1 = { node: {} }
      const child2 = { node: {} }

      box.appendChild(child1)

      box.insertBefore(child2, child1)

      expect(box.node.prepend).toHaveBeenCalledWith(child2.node)
    })
  })
})
