import Gtk from "@girs/node-gtk-4.0"
import PrintUnixDialog from "../../src/generated/widgets/PrintUnixDialog.js"
import "../../src/overrides/PrintUnixDialog.js"

describe("PrintUnixDialog overrides", () => {
  test("should present node on commitMount", () => {
    const activeWindow = new Gtk.Window()

    const dialog = new PrintUnixDialog(
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
