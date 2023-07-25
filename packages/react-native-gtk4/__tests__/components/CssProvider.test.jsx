import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import CssProvider from "../../src/components/CssProvider.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("CssProvider", () => {
  beforeEach(() => {
    setupRenderer()
    Gdk.Display.getDefault.mockReturnValue(new Gdk.Display())
  })

  test("loads the provided CSS file", () => {
    render(<CssProvider path="styles.css" />)

    expect(Gtk.CssProvider).toHaveBeenCalled()

    expect(Gtk.StyleContext.addProviderForDisplay).toHaveBeenCalledWith(
      Gdk.Display.getDefault.mock.results[0].value,
      Gtk.CssProvider.mock.instances[0],
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    )

    expect(Gtk.CssProvider.mock.instances[0].loadFromPath).toHaveBeenCalledWith(
      "styles.css"
    )
  })

  test("removes the CSS provider on unmount", () => {
    render(<CssProvider path="styles.css" />)
    render(null)

    expect(Gtk.StyleContext.removeProviderForDisplay).toHaveBeenCalledWith(
      Gdk.Display.getDefault.mock.results[0].value,
      Gtk.CssProvider.mock.instances[0]
    )
  })

  test("throws if a default display cannot be found", () => {
    Gdk.Display.getDefault.mockReturnValue(null)

    expect(() => {
      render(<CssProvider path="styles.css" />)
    }).toThrow("Could not get default display")

    expect(Gtk.StyleContext.addProviderForDisplay).not.toHaveBeenCalled()

    expect(
      Gtk.CssProvider.mock.instances[0].loadFromPath
    ).not.toHaveBeenCalled()
  })

  test("should render children", () => {
    const container = render(
      <CssProvider path="styles.css">
        <Box />
      </CssProvider>
    )

    expect(container.findByType("Box")).toBeTruthy()
  })
})
