import React from "react"
import { render, setupRenderer } from "../../test-support/render.js"
import AboutDialog from "../../src/components/AboutDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"

describe("AboutDialog", () => {
  beforeEach(setupRenderer)

  it("renders correctly", () => {
    render(<ApplicationWindow />)

    const container = render(
      <ApplicationWindow>
        <AboutDialog />
      </ApplicationWindow>
    )

    const window = container.findByType("ApplicationWindow")
    const dialog = container.findByType("AboutDialog")

    expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
    expect(dialog.node.setModal).toHaveBeenCalledWith(true)
    expect(dialog.node.present).toHaveBeenCalled()
    expect(dialog.node.setTransientFor).toHaveBeenCalledWith(window.node)
  })
})
