import Gtk from "@girs/node-gtk-4.0"
import PageSetupUnixDialog from "../../src/generated/widgets/PageSetupUnixDialog.js"
import "../../src/overrides/PageSetupUnixDialog.js"

describe("PageSetupUnixDialog overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const activeWindow = new Gtk.Window()
      const application = new Gtk.Application()

      const dialog = new PageSetupUnixDialog(
        {},
        PageSetupUnixDialog.createNode()
      )

      application.getActiveWindow = jest.fn(() => activeWindow)
      dialog.parent = { node: application }

      dialog.commitMount()

      expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
      expect(dialog.node.setModal).toHaveBeenCalledWith(true)
      expect(dialog.node.present).toHaveBeenCalled()
      expect(dialog.node.setTransientFor).toHaveBeenCalledWith(activeWindow)
    })
  })
})
