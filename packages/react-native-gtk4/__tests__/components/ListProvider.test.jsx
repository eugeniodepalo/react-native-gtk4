/* eslint-disable react/prop-types */

import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"
import useListContext from "../../src/hooks/useListContext.js"

describe("ListProvider", () => {
  let context

  const Component = ({ children } = {}) => {
    context = useListContext()
    return children
  }

  beforeEach(() => {
    setup()
    render(<Component />)

    const ids = []

    context.model.append = jest.fn((id) => {
      ids.push(id)
    })

    context.model.remove = jest.fn((index) => {
      ids.splice(index, 1)
    })

    context.model.getNItems = () => ids.length
    context.model.getString = (index) => ids[index]
  })

  describe("Container", () => {
    test("should render", () => {
      render(
        <Component>
          <ListProvider.Container value={context}>
            <Box />
          </ListProvider.Container>
        </Component>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Component>
          <ListProvider.Container value={context}>
            <Box />
          </ListProvider.Container>
        </Component>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    const id = "foo"
    const value = "bar"

    test("should render", () => {
      render(
        <Component>
          <ListProvider.Container value={context}>
            <Box />
            <ListProvider.Item id={id} value={value} />
          </ListProvider.Container>
        </Component>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Component>
          <ListProvider.Container value={context}>
            <Box />
            <ListProvider.Item id={id} value={value} />
          </ListProvider.Container>
        </Component>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should throw when not in a container", () => {
      expect(() => render(<ListProvider.Item id={id} value={value} />)).toThrow(
        "ListProvider.Item must be used inside a ListProvider.Container"
      )
    })

    test("should append item to model", () => {
      render(
        <Component>
          <ListProvider.Container value={context}>
            <ListProvider.Item id={id} value={value} />
          </ListProvider.Container>
        </Component>
      )

      expect(context.model.append).toHaveBeenCalledWith(id)
    })

    test("should remove item from model when unmounting", async () => {
      render(
        <Component>
          <ListProvider.Container value={context}>
            <ListProvider.Item id={id} value={value} />
          </ListProvider.Container>
        </Component>
      )

      render(null)

      expect(context.model.remove).toHaveBeenCalledWith(0)
    })
  })
})
