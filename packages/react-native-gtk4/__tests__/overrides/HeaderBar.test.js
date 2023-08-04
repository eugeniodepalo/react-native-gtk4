import HeaderBar from "../../src/generated/widgets/HeaderBar.js"
import { createMockWidget } from "../../src/test-support/utils.js"
import "../../src/overrides/HeaderBar.js"

describe("HeaderBar overrides", () => {
  let headerBar

  beforeEach(() => {
    headerBar = new HeaderBar({}, HeaderBar.createNode())
  })

  test("should append node on appendChild", () => {
    const child = createMockWidget()
    headerBar.appendChild(child)
    expect(headerBar.node.packEnd).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createMockWidget()

    headerBar.appendChild(child)
    headerBar.removeChild(child)

    expect(headerBar.node.remove).toHaveBeenCalledWith(child.node)
  })

  test("should remove all nodes and add them back with packEnd", () => {
    const child1 = createMockWidget()
    const child2 = createMockWidget()
    const beforeChild = createMockWidget()

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
