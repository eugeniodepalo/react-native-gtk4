import FlowBox from "../../src/generated/widgets/FlowBox.js"
import { createMockWidget } from "../../src/test-support/utils.js"
import "../../src/overrides/FlowBox.js"

describe("FlowBox overrides", () => {
  let flowBox

  beforeEach(() => {
    flowBox = new FlowBox()
  })

  test("should append node on appendChild", () => {
    const child = createMockWidget()
    flowBox.appendChild(child)
    expect(flowBox.node.append).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createMockWidget()

    flowBox.appendChild(child)
    flowBox.removeChild(child)

    expect(flowBox.node.remove).toHaveBeenCalledWith(child.node)
  })

  test("should insert node on insertBefore", () => {
    const child1 = createMockWidget()
    const child2 = createMockWidget()
    const beforeChild = createMockWidget()

    flowBox.appendChild(child1)
    flowBox.appendChild(beforeChild)
    flowBox.insertBefore(child2, beforeChild)

    expect(flowBox.node.insert).toHaveBeenCalledWith(child1.node, 0)
  })

  test("should prepend in case beforeChild is the first child", () => {
    const child1 = createMockWidget()
    const child2 = createMockWidget()

    flowBox.appendChild(child1)
    flowBox.insertBefore(child2, child1)

    expect(flowBox.node.prepend).toHaveBeenCalledWith(child2.node)
  })
})
