import React from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import { Box } from "@/generated/intrinsics.js"
import ApplicationProvider, {
  ApplicationContext,
  withApplicationContext,
} from "@/components/ApplicationProvider.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import useApplication from "@/hooks/useApplication.js"

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
    const context = {} as ApplicationContext
    let application

    const Component = () => {
      application = useApplication()
      return null
    }

    render(withApplicationContext(<Component />, context))

    expect(application).toBe(context)
  })
})
