type GLib20 = typeof import("./node-glib-2.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "GLib", ver?: "2.0"): GLib20
  }
}

export default NodeGtkGi
