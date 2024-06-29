type PangoCairo10 = typeof import("./node-pangocairo-1.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "PangoCairo", ver?: "1.0"): PangoCairo10
  }
}

export default NodeGtkGi
