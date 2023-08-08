import React from "react"
import { render, setup } from "../../src/test-support/index.js"
import useList from "../../src/hooks/useList.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"

describe("useList", () => {
  let list

  beforeEach(setup)

  const Component = function () {
    list = useList()
    return null
  }

  test("should return list context", () => {
    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    expect(list).toMatchObject({
      items: [],
      setItems: expect.any(Function),
      model: expect.any(Gtk.StringList),
    })
  })
})
