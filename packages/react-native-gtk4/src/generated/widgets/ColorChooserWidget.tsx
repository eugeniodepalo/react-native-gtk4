import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ColorChooserWidget<
  T extends Gtk.ColorChooserWidget,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ColorChooserWidget() as T
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
    }
  }
}
