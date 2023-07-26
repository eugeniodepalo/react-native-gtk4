import Gtk from "@girs/node-gtk-4.0"
import AboutDialog from "../../src/generated/widgets/AboutDialog.js"
import "../../src/overrides/AboutDialog.js"

describe("AboutDialog overrides", () => {
  test("should present node on commitMount", () => {
    const activeWindow = new Gtk.Window()

    const dialog = new AboutDialog(
      {},
      {
        application: Object.assign(Object.create(Gtk.Application.prototype), {
          getActiveWindow: jest.fn(() => activeWindow),
        }),
      }
    )

    dialog.commitMount()

    expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
    expect(dialog.node.setModal).toHaveBeenCalledWith(true)
    expect(dialog.node.present).toHaveBeenCalled()
    expect(dialog.node.setTransientFor).toHaveBeenCalledWith(activeWindow)
  })
})
