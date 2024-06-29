import gi from "node-gtk"
const { require: giRequire } = gi
const cairo = giRequire("cairo", "1.0")
export { cairo }
export default cairo
