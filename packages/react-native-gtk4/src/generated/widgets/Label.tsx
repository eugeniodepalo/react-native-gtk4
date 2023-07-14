import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Label<T extends Gtk.Label> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Label(props.str) as T
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
      case "onActivateCurrentLink":
        if (oldValue) {
          this.node.off("activate-current-link", oldValue)
        }
        if (newValue) {
          this.node.on("activate-current-link", newValue)
        }
        break
      case "onActivateLink":
        if (oldValue) {
          this.node.off("activate-link", oldValue)
        }
        if (newValue) {
          this.node.on("activate-link", newValue)
        }
        break
      case "onCopyClipboard":
        if (oldValue) {
          this.node.off("copy-clipboard", oldValue)
        }
        if (newValue) {
          this.node.on("copy-clipboard", newValue)
        }
        break
      case "onMoveCursor":
        if (oldValue) {
          this.node.off("move-cursor", oldValue)
        }
        if (newValue) {
          this.node.on("move-cursor", newValue)
        }
        break
    }
  }
}
