import Gtk from "@girs/node-gtk-4.0"
import AboutDialog from "../../src/generated/widgets/AboutDialog.js"
import "../../src/overrides/AboutDialog.js"

describe("AboutDialog overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const activeWindow = new Gtk.Window()
      const application = new Gtk.Application()
      const dialog = new AboutDialog({}, AboutDialog.createNode())

      application.getActiveWindow.mockImplementation(() => activeWindow)
      dialog.parent = { node: application }

      dialog.commitMount()

      expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
      expect(dialog.node.setModal).toHaveBeenCalledWith(true)
      expect(dialog.node.present).toHaveBeenCalled()
      expect(dialog.node.setTransientFor).toHaveBeenCalledWith(activeWindow)
    })
  })
})
