import Overlay from "../../src/generated/widgets/Overlay.js"
import { createMockWidget } from "../../src/test-support/utils.js"
import "../../src/overrides/Overlay.js"

describe("Overlay overrides", () => {
  let overlay

  beforeEach(() => {
    overlay = new Overlay({}, Overlay.createNode())
  })

  test("should append node on appendChild", () => {
    const child = createMockWidget()
    overlay.appendChild(child)
    expect(overlay.node.addOverlay).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createMockWidget()

    overlay.appendChild(child)
    overlay.removeChild(child)

    expect(overlay.node.removeOverlay).toHaveBeenCalledWith(child.node)
  })

  test("should remove all nodes and add them back with addOverlay", () => {
    const child1 = createMockWidget()
    const child2 = createMockWidget()
    const beforeChild = createMockWidget()

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
