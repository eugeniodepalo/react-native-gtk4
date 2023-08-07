import React from "react"
import { render, setup } from "../../src/test-support/index.js"
import useListContext from "../../src/hooks/useListContext.js"
import Gtk from "@girs/node-gtk-4.0"

describe("useListContext", () => {
  let list

  beforeEach(setup)

  const Component = function () {
    list = useListContext()
    return null
  }

  test("should return list context", () => {
    render(<Component />)

    expect(list).toMatchObject({
      itemsRef: { current: {} },
      setItems: expect.any(Function),
      model: expect.any(Gtk.StringList),
    })
  })

  test("should memoize list context", () => {
    render(<Component />)

    const list1 = list

    render(<Component />)

    const list2 = list

    expect(list1).toBe(list2)
  })
})
