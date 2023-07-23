import Overlay from "../../src/generated/widgets/Overlay.js"
import { createAnyWidget } from "../../src/test-support/utils.js"
import "../../src/overrides/Overlay.js"

describe("Overlay overrides", () => {
  let overlay

  beforeEach(() => {
    overlay = new Overlay()
  })

  test("should append node on appendChild", () => {
    const child = createAnyWidget()
    overlay.appendChild(child)
    expect(overlay.node.addOverlay).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createAnyWidget()

    overlay.appendChild(child)
    overlay.removeChild(child)

    expect(overlay.node.removeOverlay).toHaveBeenCalledWith(child.node)
  })

  test("should remove all nodes and add them back with addOverlay", () => {
    const child1 = createAnyWidget()
    const child2 = createAnyWidget()
    const beforeChild = createAnyWidget()

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
