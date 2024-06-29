type Gtk40 = typeof import("./node-gtk-4.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "Gtk", ver?: "4.0"): Gtk40
  }
}

export default NodeGtkGi
