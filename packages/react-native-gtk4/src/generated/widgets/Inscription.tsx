import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Inscription<T extends Gtk.Inscription> extends Widget<T> {
  createNode() {
    return new Gtk.Inscription(this.props.text) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "attributes":
        this.node.setAttributes(newValue)
        break
      case "markup":
        this.node.setMarkup(newValue)
        break
      case "minChars":
        this.node.setMinChars(newValue)
        break
      case "minLines":
        this.node.setMinLines(newValue)
        break
      case "natChars":
        this.node.setNatChars(newValue)
        break
      case "natLines":
        this.node.setNatLines(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "textOverflow":
        this.node.setTextOverflow(newValue)
        break
      case "wrapMode":
        this.node.setWrapMode(newValue)
        break
      case "xalign":
        this.node.setXalign(newValue)
        break
      case "yalign":
        this.node.setYalign(newValue)
        break
    }
  }
}
