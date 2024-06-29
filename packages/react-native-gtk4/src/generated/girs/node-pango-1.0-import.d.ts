type Pango10 = typeof import("./node-pango-1.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "Pango", ver?: "1.0"): Pango10
  }
}

export default NodeGtkGi
