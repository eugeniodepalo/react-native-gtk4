import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Inscription<
  T extends Gtk.Inscription = Gtk.Inscription,
> extends Widget<T> {
  createNode() {
    return new Gtk.Inscription({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "attributes":
        if (this.node.getAttributes() !== newValue) {
          this.node.setAttributes(newValue)
        }
        break
      case "markup":
        if (this.node.markup !== newValue) {
          this.node.setMarkup(newValue)
        }
        break
      case "minChars":
        if (this.node.getMinChars() !== newValue) {
          this.node.setMinChars(newValue)
        }
        break
      case "minLines":
        if (this.node.getMinLines() !== newValue) {
          this.node.setMinLines(newValue)
        }
        break
      case "natChars":
        if (this.node.getNatChars() !== newValue) {
          this.node.setNatChars(newValue)
        }
        break
      case "natLines":
        if (this.node.getNatLines() !== newValue) {
          this.node.setNatLines(newValue)
        }
        break
      case "text":
        if (this.node.getText() !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "textOverflow":
        if (this.node.getTextOverflow() !== newValue) {
          this.node.setTextOverflow(newValue)
        }
        break
      case "wrapMode":
        if (this.node.getWrapMode() !== newValue) {
          this.node.setWrapMode(newValue)
        }
        break
      case "xalign":
        if (this.node.getXalign() !== newValue) {
          this.node.setXalign(newValue)
        }
        break
      case "yalign":
        if (this.node.getYalign() !== newValue) {
          this.node.setYalign(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue)
        break
      case "onNotifyMarkup":
        this.setHandler("notify::markup", newValue)
        break
      case "onNotifyMinChars":
        this.setHandler("notify::min-chars", newValue)
        break
      case "onNotifyMinLines":
        this.setHandler("notify::min-lines", newValue)
        break
      case "onNotifyNatChars":
        this.setHandler("notify::nat-chars", newValue)
        break
      case "onNotifyNatLines":
        this.setHandler("notify::nat-lines", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyTextOverflow":
        this.setHandler("notify::text-overflow", newValue)
        break
      case "onNotifyWrapMode":
        this.setHandler("notify::wrap-mode", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
