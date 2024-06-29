type Gdk40 = typeof import("./node-gdk-4.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "Gdk", ver?: "4.0"): Gdk40
  }
}

export default NodeGtkGi
