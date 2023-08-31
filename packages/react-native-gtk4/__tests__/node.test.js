import Node from "../src/node.js"
import { Widget, Window } from "../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Node", () => {
  let node

  beforeEach(() => {
    node = new Node()
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
      expect(child.parent).toBe(node)
    })
  })

  describe("removeChild", () => {
    test("should remove", () => {
      const child = {}

      node.appendChild(child)

      node.removeChild(child)

      expect(node.children).not.toContain(child)
      expect(child.parent).toBe(null)
    })

    test("should throw an error when not found", () => {
      expect(() => node.removeChild({})).toThrow(
        "Child to be removed not found in parent"
      )
    })

    test("should unparent widgets", () => {
      const child = new Widget()

      child.node = new Gtk.Widget()

      node.appendChild(child)

      node.removeChild(child)

      expect(child.node.unparent).toHaveBeenCalled()
    })

    test("should destroy windows", () => {
      const child = new Window({})

      child.node = new Gtk.Window()

      node.appendChild(child)

      node.removeChild(child)

      expect(child.node.destroy).toHaveBeenCalled()
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
      expect(child3.parent).toBe(node)
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
