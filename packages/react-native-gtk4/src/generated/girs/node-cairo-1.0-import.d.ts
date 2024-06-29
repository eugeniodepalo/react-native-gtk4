type Cairo10 = typeof import("./node-cairo-1.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "cairo", ver?: "1.0"): Cairo10
  }
}

export default NodeGtkGi
