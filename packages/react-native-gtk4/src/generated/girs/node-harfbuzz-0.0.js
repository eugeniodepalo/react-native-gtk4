import gi from "node-gtk"
const { require: giRequire } = gi
const HarfBuzz = giRequire("HarfBuzz", "0.0")
export { HarfBuzz }
export default HarfBuzz
