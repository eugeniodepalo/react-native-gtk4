import AbstractNode from "../../src/abstract/node.js"

describe("AbstractNode", () => {
  let node

  beforeEach(() => {
    node = new (class extends AbstractNode {})()
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect(node.children).toEqual([])
    })
  })

  describe("appendChild", () => {
    test("should append", () => {
      const child = {}

      node.appendChild(child)

      expect(node.children).toContain(child)
    })
  })

  describe("removeChild", () => {
    test("should remove", () => {
      const child = {}

      node.appendChild(child)

      node.removeChild(child)

      expect(node.children).not.toContain(child)
    })

    test("should throw an error when not found", () => {
      expect(() => node.removeChild({})).toThrow(
        "Child to be removed not found in parent"
      )
    })
  })

  describe("insertBefore", () => {
    test("should insert before another", () => {
      const child1 = {}
      const child2 = {}
      const child3 = {}

      node.appendChild(child1)
      node.appendChild(child2)

      node.insertBefore(child3, child2)

      expect(node.children).toEqual([child1, child3, child2])
    })

    test("should throw an error when not found", () => {
      const child1 = {}
      const child2 = {}

      expect(() => node.insertBefore(child1, child2)).toThrow(
        "Node before which to insert child not found in parent"
      )
    })
  })
})
