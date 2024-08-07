import Gtk from "@/generated/girs/node-gtk-4.0.js"
import PrintUnixDialog from "@/generated/widgets/PrintUnixDialog.js"
import "@/overrides/PrintUnixDialog.js"

describe("PrintUnixDialog overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const activeWindow = new Gtk.Window()
      const application = new Gtk.Application()
      const dialog = new PrintUnixDialog(
        {},
        PrintUnixDialog.createNode()
      ) as any

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
