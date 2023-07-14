import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Image<T extends Gtk.Image> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Image() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "iconSize":
        this.node.setIconSize(newValue)
        break
      case "pixelSize":
        this.node.setPixelSize(newValue)
        break
    }
  }
}
