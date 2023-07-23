import Gtk from "@girs/node-gtk-4.0"

export function createApplication() {
  const application = new Gtk.Application()

  application.getActiveWindow = jest.fn(() => application.activeWindow)

  const setActiveWindow = jest.fn(function () {
    application.activeWindow = this
  })

  const unsetActiveWindow = jest.fn(function () {
    application.activeWindow = null
  })

  Gtk.ApplicationWindow.prototype.show = setActiveWindow
  Gtk.ApplicationWindow.prototype.present = setActiveWindow
  Gtk.ApplicationWindow.prototype.hide = unsetActiveWindow
  Gtk.ApplicationWindow.prototype.destroy = unsetActiveWindow

  return application
}
