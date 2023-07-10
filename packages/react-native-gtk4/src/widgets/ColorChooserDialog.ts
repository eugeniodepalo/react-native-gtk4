import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class ColorChooserDialog<
  T extends Gtk.ColorChooserDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ColorChooserDialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "useAlpha":
        this.node.setUseAlpha(newValue)
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
