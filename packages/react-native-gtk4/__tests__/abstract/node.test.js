import { createMockNode } from "../../src/test-support/utils.js"

describe("AbstractNode", () => {
  let node

  beforeEach(() => {
    node = createMockNode()
  })

  test("initializes with empty children", () => {
    expect(node.children).toEqual([])
  })

  test("can append a child", () => {
    const child = createMockNode()
    node.appendChild(child)
    expect(node.children).toContain(child)
  })

  test("can remove a child", () => {
    const child = createMockNode()

    node.appendChild(child)
    node.removeChild(child)

    expect(node.children).not.toContain(child)
  })

  test("throws an error when removing a non-existent child", () => {
    const child = createMockNode()
    expect(() => node.removeChild(child)).toThrow("Removed child not found")
  })

  test("can insert a child before another", () => {
    const child1 = createMockNode()
    const child2 = createMockNode()

    node.appendChild(child1)
    node.insertBefore(child2, child1)

    expect(node.children[0]).toBe(child2)
  })

  test("throws an error when inserting before a non-existent child", () => {
    const child1 = createMockNode()
    const child2 = createMockNode()

    expect(() => node.insertBefore(child1, child2)).toThrow(
      "Before child not found"
    )
  })
})
