import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Label<T extends Gtk.Label> extends Widget<T> {
  createNode() {
    return new Gtk.Label({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "attributes":
        this.node.setAttributes(newValue)
        break
      case "ellipsize":
        this.node.setEllipsize(newValue)
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "justify":
        this.node.setJustify(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "lines":
        this.node.setLines(newValue)
        break
      case "maxWidthChars":
        this.node.setMaxWidthChars(newValue)
        break
      case "mnemonicWidget":
        this.node.setMnemonicWidget(newValue)
        break
      case "naturalWrapMode":
        this.node.setNaturalWrapMode(newValue)
        break
      case "selectable":
        this.node.setSelectable(newValue)
        break
      case "singleLineMode":
        this.node.setSingleLineMode(newValue)
        break
      case "tabs":
        this.node.setTabs(newValue)
        break
      case "useMarkup":
        this.node.setUseMarkup(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "widthChars":
        this.node.setWidthChars(newValue)
        break
      case "wrap":
        this.node.setWrap(newValue)
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
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivateCurrentLink":
        this.setHandler("activate-current-link", newValue)
        break
      case "onActivateLink":
        this.setHandler("activate-link", newValue)
        break
      case "onCopyClipboard":
        this.setHandler("copy-clipboard", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
    }
  }
}
