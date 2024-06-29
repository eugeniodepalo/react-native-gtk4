type Gsk40 = typeof import("./node-gsk-4.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "Gsk", ver?: "4.0"): Gsk40
  }
}

export default NodeGtkGi
