type GObject20 = typeof import("./node-gobject-2.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "GObject", ver?: "2.0"): GObject20
  }
}

export default NodeGtkGi
