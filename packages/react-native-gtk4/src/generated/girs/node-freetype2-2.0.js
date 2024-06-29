import gi from "node-gtk"
const { require: giRequire } = gi
const freetype2 = giRequire("freetype2", "2.0")
export { freetype2 }
export default freetype2
