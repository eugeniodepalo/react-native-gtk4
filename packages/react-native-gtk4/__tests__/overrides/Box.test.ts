import Box from "@/generated/widgets/Box.js"
import "@/overrides/Box.js"

describe("Box overrides", () => {
  let box: Box

  beforeEach(() => {
    box = new Box({}, Box.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} } as any

      box.appendChild(child)

      expect(box.node.append).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} } as any

      box.appendChild(child)
      child.node.parent = box.node

      box.removeChild(child)

      expect(box.node.remove).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should insert node", () => {
      const child1 = { node: {} } as any
      const child2 = { node: {} } as any
      const beforeChild = { node: {} } as any

      box.appendChild(child1)
      box.appendChild(beforeChild)

      box.insertBefore(child2, beforeChild)

      expect(box.node.insertChildAfter).toHaveBeenCalledWith(
        child1.node,
        child2.node
      )
    })

    test("should prepend when it's the first child", () => {
      const child1 = { node: {} } as any
      const child2 = { node: {} } as any

      box.appendChild(child1)

      box.insertBefore(child2, child1)

      expect(box.node.prepend).toHaveBeenCalledWith(child2.node)
    })
  })
})
