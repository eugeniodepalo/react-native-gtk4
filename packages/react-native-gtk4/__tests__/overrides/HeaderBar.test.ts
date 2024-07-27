import HeaderBar from "@/generated/widgets/HeaderBar.js"
import "@/overrides/HeaderBar.js"

describe("HeaderBar overrides", () => {
  let headerBar: HeaderBar

  beforeEach(() => {
    headerBar = new HeaderBar({}, HeaderBar.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} } as any

      headerBar.appendChild(child)

      expect(headerBar.node.packEnd).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} } as any

      headerBar.appendChild(child)
      child.node.parent = headerBar.node

      headerBar.removeChild(child)

      expect(headerBar.node.remove).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should remove all nodes and add them back with packEnd", () => {
      const child1 = { node: {} } as any
      const child2 = { node: {} } as any
      const beforeChild = { node: {} } as any

      headerBar.appendChild(child1)
      headerBar.appendChild(beforeChild)

      headerBar.insertBefore(child2, beforeChild)

      expect(headerBar.node.remove).toHaveBeenCalledWith(child1.node)
      expect(headerBar.node.remove).toHaveBeenCalledWith(beforeChild.node)
      expect(headerBar.node.packEnd).toHaveBeenCalledWith(child1.node)
      expect(headerBar.node.packEnd).toHaveBeenCalledWith(beforeChild.node)
      expect(headerBar.node.packEnd).toHaveBeenCalledWith(child2.node)
    })
  })
})
