import gi from "node-gtk"
const { require: giRequire } = gi
const PangoCairo = giRequire("PangoCairo", "1.0")
export { PangoCairo }
export default PangoCairo
