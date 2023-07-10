import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ColorButton<T extends Gtk.ColorButton> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ColorButton() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "modal":
        this.node.setModal(newValue)
        break
      case "title":
        this.node.setTitle(newValue)
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "useAlpha":
        this.node.setUseAlpha(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onColorSet":
        if (oldValue) {
          this.node.off("color-set", oldValue)
        }
        if (newValue) {
          this.node.on("color-set", newValue)
        }
        break
      case "onColorActivated":
        if (oldValue) {
          this.node.off("color-activated", oldValue)
        }
        if (newValue) {
          this.node.on("color-activated", newValue)
        }
        break
      default:
        break
    }
  }
}
