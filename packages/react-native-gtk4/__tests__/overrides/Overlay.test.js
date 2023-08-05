import Overlay from "../../src/generated/widgets/Overlay.js"
import "../../src/overrides/Overlay.js"

describe("Overlay overrides", () => {
  let overlay

  beforeEach(() => {
    overlay = new Overlay({}, Overlay.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} }

      overlay.appendChild(child)

      expect(overlay.node.addOverlay).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} }

      overlay.appendChild(child)
      overlay.removeChild(child)

      expect(overlay.node.removeOverlay).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should remove all nodes and add them back with addOverlay", () => {
      const child1 = { node: {} }
      const child2 = { node: {} }
      const beforeChild = { node: {} }

      overlay.appendChild(child1)
      overlay.appendChild(beforeChild)
      overlay.insertBefore(child2, beforeChild)

      expect(overlay.node.removeOverlay).toHaveBeenCalledWith(child1.node)
      expect(overlay.node.removeOverlay).toHaveBeenCalledWith(beforeChild.node)
      expect(overlay.node.addOverlay).toHaveBeenCalledWith(child1.node)
      expect(overlay.node.addOverlay).toHaveBeenCalledWith(beforeChild.node)
      expect(overlay.node.addOverlay).toHaveBeenCalledWith(child2.node)
    })
  })
})
