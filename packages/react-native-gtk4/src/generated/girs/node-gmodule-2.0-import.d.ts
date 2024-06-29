type GModule20 = typeof import("./node-gmodule-2.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "GModule", ver?: "2.0"): GModule20
  }
}

export default NodeGtkGi
