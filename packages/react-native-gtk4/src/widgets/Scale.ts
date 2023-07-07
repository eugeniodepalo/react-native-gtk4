import { Container, Gtk } from "../index.js"
import Range from "./Range.js"

export default class Scale extends Range {
  createNode(container: Container) {
    return new Gtk.Scale()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "digits":
        this.node.setDigits(newValue)
        break
      case "drawValue":
        this.node.setDrawValue(newValue)
        break
      case "hasOrigin":
        this.node.setHasOrigin(newValue)
        break
      case "valuePos":
        this.node.setValuePos(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
