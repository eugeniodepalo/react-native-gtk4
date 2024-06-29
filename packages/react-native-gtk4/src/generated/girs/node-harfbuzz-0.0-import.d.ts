type HarfBuzz00 = typeof import("./node-harfbuzz-0.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "HarfBuzz", ver?: "0.0"): HarfBuzz00
  }
}

export default NodeGtkGi
