export class GirImport {
  constructor(type, gir) {
    this.type = type
    this.gir = gir
  }

  get name() {
    return this.type.name.split(".")[0]
  }

  get moduleName() {
    switch (this.name) {
      case "Gtk":
        return "@girs/node-gtk-4.0"
      case "GLib":
        return "@girs/node-glib-2.0"
      case "GObject":
        return "@girs/node-gobject-2.0"
      case "Gio":
        return "@girs/node-gio-2.0"
      case "Gdk":
        return "@girs/node-gdk-4.0"
      case "Pango":
        return "@girs/node-pango-1.0"
      case "Cairo":
        return "@girs/node-cairo-1.0"
      default:
        throw new Error(`Unknown import name: ${this.name}`)
    }
  }
}
