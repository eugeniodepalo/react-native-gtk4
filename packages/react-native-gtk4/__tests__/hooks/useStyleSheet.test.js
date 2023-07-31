import React from "react"
import useStyleSheet, {
  useInlineStyleSheet,
} from "../../src/hooks/useStyleSheet.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

jest.mock("react")

describe("useStyleSheet", () => {
  beforeEach(() => {
    Gdk.Display.getDefault.mockReturnValue(new Gdk.Display())
    React.useMemo = jest.fn((fn) => fn())
  })

  test("should load the provided CSS file", () => {
    useStyleSheet("styles.css")

    for (const call of React.useEffect.mock.calls) {
      call[0]()
    }

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

  test("should remove the CSS provider on unmount", () => {
    useStyleSheet("styles.css")

    for (const call of React.useEffect.mock.calls) {
      call[0]()?.()
    }

    expect(Gtk.StyleContext.removeProviderForDisplay).toHaveBeenCalledWith(
      Gdk.Display.getDefault.mock.results[0].value,
      Gtk.CssProvider.mock.instances[0]
    )
  })

  test("should throw if a default display cannot be found", () => {
    Gdk.Display.getDefault.mockReturnValue(null)

    expect(() => {
      useStyleSheet("styles.css")

      for (const call of React.useEffect.mock.calls) {
        call[0]()
      }
    }).toThrow("Could not get default display")

    expect(Gtk.StyleContext.addProviderForDisplay).not.toHaveBeenCalled()

    expect(
      Gtk.CssProvider.mock.instances[0].loadFromPath
    ).not.toHaveBeenCalled()
  })

  test("should allow string content", () => {
    jest.spyOn(Buffer, "from")

    useInlineStyleSheet(".box { background-color: red; }")

    for (const call of React.useEffect.mock.calls) {
      call[0]()
    }

    expect(Gtk.CssProvider).toHaveBeenCalled()

    expect(Gtk.StyleContext.addProviderForDisplay).toHaveBeenCalledWith(
      Gdk.Display.getDefault.mock.results[0].value,
      Gtk.CssProvider.mock.instances[0],
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    )

    expect(Buffer.from).toHaveBeenCalledWith(".box { background-color: red; }")

    const bytes = Buffer.from.mock.results[0].value

    expect(Gtk.CssProvider.mock.instances[0].loadFromData).toHaveBeenCalledWith(
      bytes,
      -1
    )
  })
})
