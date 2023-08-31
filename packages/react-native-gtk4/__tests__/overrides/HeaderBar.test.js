import HeaderBar from "../../src/generated/widgets/HeaderBar.js"
import "../../src/overrides/HeaderBar.js"

describe("HeaderBar overrides", () => {
  let headerBar

  beforeEach(() => {
    headerBar = new HeaderBar({}, HeaderBar.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} }

      headerBar.appendChild(child)

      expect(headerBar.node.packEnd).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} }

      headerBar.appendChild(child)
      child.node.parent = headerBar.node

      headerBar.removeChild(child)

      expect(headerBar.node.remove).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should remove all nodes and add them back with packEnd", () => {
      const child1 = { node: {} }
      const child2 = { node: {} }
      const beforeChild = { node: {} }

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
