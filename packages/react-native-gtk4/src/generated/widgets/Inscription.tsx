import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Inscription<
  T extends Gtk.Inscription = Gtk.Inscription,
> extends Widget<T> {
  createNode() {
    return new Gtk.Inscription({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "attributes":
        if (this.node.attributes !== newValue) {
          this.node.setAttributes(newValue)
        }
        break
      case "markup":
        if (this.node.markup !== newValue) {
          this.node.setMarkup(newValue)
        }
        break
      case "minChars":
        if (this.node.minChars !== newValue) {
          this.node.setMinChars(newValue)
        }
        break
      case "minLines":
        if (this.node.minLines !== newValue) {
          this.node.setMinLines(newValue)
        }
        break
      case "natChars":
        if (this.node.natChars !== newValue) {
          this.node.setNatChars(newValue)
        }
        break
      case "natLines":
        if (this.node.natLines !== newValue) {
          this.node.setNatLines(newValue)
        }
        break
      case "text":
        if (this.node.text !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "textOverflow":
        if (this.node.textOverflow !== newValue) {
          this.node.setTextOverflow(newValue)
        }
        break
      case "wrapMode":
        if (this.node.wrapMode !== newValue) {
          this.node.setWrapMode(newValue)
        }
        break
      case "xalign":
        if (this.node.xalign !== newValue) {
          this.node.setXalign(newValue)
        }
        break
      case "yalign":
        if (this.node.yalign !== newValue) {
          this.node.setYalign(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
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
    }
  }
}
