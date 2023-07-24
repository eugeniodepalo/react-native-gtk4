import ListBox from "../../src/generated/widgets/ListBox.js"
import { createMockWidget } from "../../src/test-support/utils.js"
import "../../src/overrides/ListBox.js"

describe("ListBox overrides", () => {
  let listBox

  beforeEach(() => {
    listBox = new ListBox()
  })

  test("should append node on appendChild", () => {
    const child = createMockWidget()
    listBox.appendChild(child)
    expect(listBox.node.append).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createMockWidget()

    listBox.appendChild(child)
    listBox.removeChild(child)

    expect(listBox.node.remove).toHaveBeenCalledWith(child.node)
  })

  test("should insert node on insertBefore", () => {
    const child1 = createMockWidget()
    const child2 = createMockWidget()
    const beforeChild = createMockWidget()

    listBox.appendChild(child1)
    listBox.appendChild(beforeChild)
    listBox.insertBefore(child2, beforeChild)

    expect(listBox.node.insert).toHaveBeenCalledWith(child1.node, 0)
  })

  test("should prepend in case beforeChild is the first child", () => {
    const child1 = createMockWidget()
    const child2 = createMockWidget()

    listBox.appendChild(child1)
    listBox.insertBefore(child2, child1)

    expect(listBox.node.prepend).toHaveBeenCalledWith(child2.node)
  })
})
