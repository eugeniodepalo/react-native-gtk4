import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class FontDialogButton<
  T extends Gtk.FontDialogButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.FontDialogButton(this.props.dialog) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        this.node.setDialog(newValue)
        break
      case "fontDesc":
        this.node.setFontDesc(newValue)
        break
      case "fontFeatures":
        this.node.setFontFeatures(newValue)
        break
      case "language":
        this.node.setLanguage(newValue)
        break
      case "level":
        this.node.setLevel(newValue)
        break
      case "useFont":
        this.node.setUseFont(newValue)
        break
      case "useSize":
        this.node.setUseSize(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
