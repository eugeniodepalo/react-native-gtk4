import FlowBox from "../../src/generated/widgets/FlowBox.js"
import "../../src/overrides/FlowBox.js"

describe("FlowBox overrides", () => {
  let flowBox

  beforeEach(() => {
    flowBox = new FlowBox({}, FlowBox.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} }

      flowBox.appendChild(child)

      expect(flowBox.node.append).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} }

      flowBox.appendChild(child)
      child.node.parent = flowBox.node

      flowBox.removeChild(child)

      expect(flowBox.node.remove).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should insert node", () => {
      const child1 = { node: {} }
      const child2 = { node: {} }
      const beforeChild = { node: {} }

      flowBox.appendChild(child1)
      flowBox.appendChild(beforeChild)

      flowBox.insertBefore(child2, beforeChild)

      expect(flowBox.node.insert).toHaveBeenCalledWith(child1.node, 0)
    })

    test("should prepend when it's the first child", () => {
      const child1 = { node: {} }
      const child2 = { node: {} }

      flowBox.appendChild(child1)

      flowBox.insertBefore(child2, child1)

      expect(flowBox.node.prepend).toHaveBeenCalledWith(child2.node)
    })
  })
})
