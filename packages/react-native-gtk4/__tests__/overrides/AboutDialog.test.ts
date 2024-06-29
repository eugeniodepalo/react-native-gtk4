import Gtk from "@/generated/girs/node-gtk-4.0.js"
import AboutDialog from "@/generated/widgets/AboutDialog.js"
import "@/overrides/AboutDialog.js"

describe("AboutDialog overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const activeWindow = new Gtk.Window()
      const application = new Gtk.Application() as jest.Mocked<Gtk.Application>
      const dialog = new AboutDialog({}, AboutDialog.createNode())

      application.getActiveWindow.mockImplementation(() => activeWindow)
      dialog.parent = { node: application } as any

      dialog.commitMount()

      expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
      expect(dialog.node.setModal).toHaveBeenCalledWith(true)
      expect(dialog.node.present).toHaveBeenCalled()
      expect(dialog.node.setTransientFor).toHaveBeenCalledWith(activeWindow)
    })
  })
})
