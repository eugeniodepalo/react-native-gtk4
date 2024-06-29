type Graphene10 = typeof import("./node-graphene-1.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "Graphene", ver?: "1.0"): Graphene10
  }
}

export default NodeGtkGi
