import ListBox from "@/generated/widgets/ListBox.js"
import "@/overrides/ListBox.js"

describe("ListBox overrides", () => {
  let listBox: ListBox

  beforeEach(() => {
    listBox = new ListBox({}, ListBox.createNode())
  })

  describe("appendChild", () => {
    test("should append node", () => {
      const child = { node: {} } as any

      listBox.appendChild(child)

      expect(listBox.node.append).toHaveBeenCalledWith(child.node)
    })
  })

  describe("removeChild", () => {
    test("should remove node", () => {
      const child = { node: {} } as any

      listBox.appendChild(child)
      child.node.parent = listBox.node

      listBox.removeChild(child)

      expect(listBox.node.remove).toHaveBeenCalledWith(child.node)
    })
  })

  describe("insertBefore", () => {
    test("should insert node", () => {
      const child1 = { node: {} } as any
      const child2 = { node: {} } as any
      const beforeChild = { node: {} } as any

      listBox.appendChild(child1)
      listBox.appendChild(beforeChild)
      listBox.insertBefore(child2, beforeChild)

      expect(listBox.node.insert).toHaveBeenCalledWith(child1.node, 0)
    })

    test("should prepend in case it's the first child", () => {
      const child1 = { node: {} } as any
      const child2 = { node: {} } as any

      listBox.appendChild(child1)
      listBox.insertBefore(child2, child1)

      expect(listBox.node.prepend).toHaveBeenCalledWith(child2.node)
    })
  })
})
