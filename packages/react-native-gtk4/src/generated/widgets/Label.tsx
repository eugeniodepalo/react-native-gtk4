import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Label<T extends Gtk.Label = Gtk.Label> extends Widget<T> {
  createNode() {
    return new Gtk.Label({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "attributes":
        if (this.node.attributes !== newValue) {
          this.node.setAttributes(newValue)
        }
        break
      case "ellipsize":
        if (this.node.ellipsize !== newValue) {
          this.node.setEllipsize(newValue)
        }
        break
      case "extraMenu":
        if (this.node.extraMenu !== newValue) {
          this.node.setExtraMenu(newValue)
        }
        break
      case "justify":
        if (this.node.justify !== newValue) {
          this.node.setJustify(newValue)
        }
        break
      case "label":
        if (this.node.label !== newValue) {
          this.node.setLabel(newValue)
        }
        break
      case "lines":
        if (this.node.lines !== newValue) {
          this.node.setLines(newValue)
        }
        break
      case "maxWidthChars":
        if (this.node.maxWidthChars !== newValue) {
          this.node.setMaxWidthChars(newValue)
        }
        break
      case "mnemonicWidget":
        if (this.node.mnemonicWidget !== newValue) {
          this.node.setMnemonicWidget(newValue)
        }
        break
      case "naturalWrapMode":
        if (this.node.naturalWrapMode !== newValue) {
          this.node.setNaturalWrapMode(newValue)
        }
        break
      case "selectable":
        if (this.node.selectable !== newValue) {
          this.node.setSelectable(newValue)
        }
        break
      case "singleLineMode":
        if (this.node.singleLineMode !== newValue) {
          this.node.setSingleLineMode(newValue)
        }
        break
      case "tabs":
        if (this.node.tabs !== newValue) {
          this.node.setTabs(newValue)
        }
        break
      case "useMarkup":
        if (this.node.useMarkup !== newValue) {
          this.node.setUseMarkup(newValue)
        }
        break
      case "useUnderline":
        if (this.node.useUnderline !== newValue) {
          this.node.setUseUnderline(newValue)
        }
        break
      case "widthChars":
        if (this.node.widthChars !== newValue) {
          this.node.setWidthChars(newValue)
        }
        break
      case "wrap":
        if (this.node.wrap !== newValue) {
          this.node.setWrap(newValue)
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
    }
  }
}
