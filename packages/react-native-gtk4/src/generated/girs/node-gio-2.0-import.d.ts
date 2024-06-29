type Gio20 = typeof import("./node-gio-2.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "Gio", ver?: "2.0"): Gio20
  }
}

export default NodeGtkGi
