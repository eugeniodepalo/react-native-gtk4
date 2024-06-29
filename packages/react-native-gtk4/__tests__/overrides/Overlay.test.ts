import Overlay from "@/generated/widgets/Overlay.js"
import "@/overrides/Overlay.js"

describe("Overlay overrides", () => {
  let overlay: Overlay

  beforeEach(() => {
    overlay = new Overlay({}, Overlay.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} } as any

      overlay.appendChild(child)

      expect(overlay.node.addOverlay).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} } as any

      overlay.appendChild(child)
      child.node.parent = overlay.node

      overlay.removeChild(child)

      expect(overlay.node.removeOverlay).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should remove all nodes and add them back with addOverlay", () => {
      const child1 = { node: {} } as any
      const child2 = { node: {} } as any
      const beforeChild = { node: {} } as any

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
