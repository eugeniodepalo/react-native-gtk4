type Freetype220 = typeof import("./node-freetype2-2.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "freetype2", ver?: "2.0"): Freetype220
  }
}

export default NodeGtkGi
