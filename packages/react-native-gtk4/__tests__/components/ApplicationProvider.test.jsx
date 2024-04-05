import React from "react"
import { render, setup, findBy } from "../../test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import ApplicationProvider, {
  withApplicationContext,
} from "../../src/components/ApplicationProvider.js"
import Gtk from "@girs/node-gtk-4.0"
import useApplication from "../../src/hooks/useApplication.js"

beforeEach(setup)

describe("ApplicationProvider", () => {
  test("should render", () => {
    render(
      <ApplicationProvider value={null}>
        <Box />
      </ApplicationProvider>
    )

    const box = findBy({ type: "Box" })

    expect(box.node).toBeInstanceOf(Gtk.Box)
  })
})

describe("withApplicationContext", () => {
  test("should render", () => {
    const context = {}
    let application

    const Component = () => {
      application = useApplication()
    }

    render(withApplicationContext(<Component />, context))

    expect(application).toBe(context)
  })
})
