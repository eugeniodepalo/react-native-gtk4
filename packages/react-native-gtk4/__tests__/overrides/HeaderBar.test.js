import HeaderBar from "../../src/generated/widgets/HeaderBar.js"
import { createAnyWidget } from "../../src/test-support/utils.js"
import "../../src/overrides/HeaderBar.js"

describe("HeaderBar overrides", () => {
  let headerBar

  beforeEach(() => {
    headerBar = new HeaderBar()
  })

  test("should append node on appendChild", () => {
    const child = createAnyWidget()
    headerBar.appendChild(child)
    expect(headerBar.node.packEnd).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createAnyWidget()

    headerBar.appendChild(child)
    headerBar.removeChild(child)

    expect(headerBar.node.remove).toHaveBeenCalledWith(child.node)
  })

  test("should remove all nodes and add them back with packEnd", () => {
    const child1 = createAnyWidget()
    const child2 = createAnyWidget()
    const beforeChild = createAnyWidget()

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
