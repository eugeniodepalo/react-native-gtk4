import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Label<T extends Gtk.Label = Gtk.Label> extends Widget<T> {
  static createNode() {
    return new Gtk.Label({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "attributes":
        if (this.node.getAttributes() !== newValue) {
          this.node.setAttributes(newValue)
        }
        break
      case "ellipsize":
        if (this.node.getEllipsize() !== newValue) {
          this.node.setEllipsize(newValue)
        }
        break
      case "extraMenu":
        if (this.node.getExtraMenu() !== newValue) {
          this.node.setExtraMenu(newValue)
        }
        break
      case "justify":
        if (this.node.getJustify() !== newValue) {
          this.node.setJustify(newValue)
        }
        break
      case "label":
        if (this.node.getLabel() !== newValue) {
          this.node.setLabel(newValue)
        }
        break
      case "lines":
        if (this.node.getLines() !== newValue) {
          this.node.setLines(newValue)
        }
        break
      case "maxWidthChars":
        if (this.node.getMaxWidthChars() !== newValue) {
          this.node.setMaxWidthChars(newValue)
        }
        break
      case "mnemonicWidget":
        if (this.node.getMnemonicWidget() !== newValue) {
          this.node.setMnemonicWidget(newValue)
        }
        break
      case "naturalWrapMode":
        if (this.node.getNaturalWrapMode() !== newValue) {
          this.node.setNaturalWrapMode(newValue)
        }
        break
      case "selectable":
        if (this.node.getSelectable() !== newValue) {
          this.node.setSelectable(newValue)
        }
        break
      case "singleLineMode":
        if (this.node.getSingleLineMode() !== newValue) {
          this.node.setSingleLineMode(newValue)
        }
        break
      case "tabs":
        if (this.node.getTabs() !== newValue) {
          this.node.setTabs(newValue)
        }
        break
      case "useMarkup":
        if (this.node.getUseMarkup() !== newValue) {
          this.node.setUseMarkup(newValue)
        }
        break
      case "useUnderline":
        if (this.node.getUseUnderline() !== newValue) {
          this.node.setUseUnderline(newValue)
        }
        break
      case "widthChars":
        if (this.node.getWidthChars() !== newValue) {
          this.node.setWidthChars(newValue)
        }
        break
      case "wrap":
        if (this.node.getWrap() !== newValue) {
          this.node.setWrap(newValue)
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
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue)
        break
      case "onNotifyEllipsize":
        this.setHandler("notify::ellipsize", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extra-menu", newValue)
        break
      case "onNotifyJustify":
        this.setHandler("notify::justify", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyLines":
        this.setHandler("notify::lines", newValue)
        break
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::max-width-chars", newValue)
        break
      case "onNotifyMnemonicKeyval":
        this.setHandler("notify::mnemonic-keyval", newValue)
        break
      case "onNotifyMnemonicWidget":
        this.setHandler("notify::mnemonic-widget", newValue)
        break
      case "onNotifyNaturalWrapMode":
        this.setHandler("notify::natural-wrap-mode", newValue)
        break
      case "onNotifySelectable":
        this.setHandler("notify::selectable", newValue)
        break
      case "onNotifySingleLineMode":
        this.setHandler("notify::single-line-mode", newValue)
        break
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue)
        break
      case "onNotifyUseMarkup":
        this.setHandler("notify::use-markup", newValue)
        break
      case "onNotifyUseUnderline":
        this.setHandler("notify::use-underline", newValue)
        break
      case "onNotifyWidthChars":
        this.setHandler("notify::width-chars", newValue)
        break
      case "onNotifyWrap":
        this.setHandler("notify::wrap", newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
