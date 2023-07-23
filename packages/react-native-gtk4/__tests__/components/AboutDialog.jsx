import React from "react"
import { render, setupRenderer } from "../../test-support/render.js"
import AboutDialog from "../../src/components/AboutDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"

describe("AboutDialog", () => {
  beforeEach(setupRenderer)

  it("renders correctly", () => {
    render(<ApplicationWindow />)

    const [window] = render(
      <ApplicationWindow>
        <AboutDialog />
      </ApplicationWindow>
    )

    const [{ node }] = window.children

    expect(node.setDestroyWithParent).toHaveBeenCalledWith(true)
    expect(node.setModal).toHaveBeenCalledWith(true)
    expect(node.present).toHaveBeenCalled()
    expect(node.setTransientFor).toHaveBeenCalledWith(window.node)
  })
})
