import gi from "node-gtk"
const { require: giRequire } = gi
const GdkPixbuf = giRequire("GdkPixbuf", "2.0")
export { GdkPixbuf }
export default GdkPixbuf
