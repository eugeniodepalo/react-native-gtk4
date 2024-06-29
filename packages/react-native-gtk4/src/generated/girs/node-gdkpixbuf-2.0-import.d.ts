type GdkPixbuf20 = typeof import("./node-gdkpixbuf-2.0.js").default

declare global {
  interface NodeGtkGi {
    require(ns: "GdkPixbuf", ver?: "2.0"): GdkPixbuf20
  }
}

export default NodeGtkGi
