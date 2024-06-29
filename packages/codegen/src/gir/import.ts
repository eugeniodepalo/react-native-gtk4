import { Gir } from "@/gir.js"
import { GirType } from "./type.js"

export class GirImport {
  type: GirType
  gir: Gir

  constructor(type: GirType, gir: Gir) {
    this.type = type
    this.gir = gir
  }

  get name() {
    return this.type.name.split(".")[0]
  }

  get moduleName() {
    switch (this.name) {
      case "Gtk":
        return "@/generated/girs/node-gtk-4.0.js"
      case "GLib":
        return "@/generated/girs/node-glib-2.0.js"
      case "GObject":
        return "@/generated/girs/node-gobject-2.0.js"
      case "Gio":
        return "@/generated/girs/node-gio-2.0.js"
      case "Gdk":
        return "@/generated/girs/node-gdk-4.0.js"
      case "Pango":
        return "@/generated/girs/node-pango-1.0.js"
      case "Cairo":
        return "@/generated/girs/node-cairo-1.0.js"
      default:
        throw new Error(`Unknown import name: ${this.name}`)
    }
  }
}
