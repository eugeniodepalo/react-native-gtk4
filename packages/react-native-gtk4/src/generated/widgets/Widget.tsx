import { Gtk } from "../../index.js"
import BaseWidget from "../../widget.js"

export default class Widget<T extends Gtk.Widget> extends BaseWidget<T> {
  createNode() {
    return new Gtk.Widget() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "canFocus":
        this.node.setCanFocus(newValue)
        break
      case "canTarget":
        this.node.setCanTarget(newValue)
        break
      case "cssClasses":
        this.node.setCssClasses(newValue)
        break
      case "cursor":
        this.node.setCursor(newValue)
        break
      case "focusOnClick":
        this.node.setFocusOnClick(newValue)
        break
      case "focusable":
        this.node.setFocusable(newValue)
        break
      case "halign":
        this.node.setHalign(newValue)
        break
      case "hasTooltip":
        this.node.setHasTooltip(newValue)
        break
      case "heightRequest":
        this.node.heightRequest = newValue
        break
      case "hexpand":
        this.node.setHexpand(newValue)
        break
      case "hexpandSet":
        this.node.setHexpandSet(newValue)
        break
      case "layoutManager":
        this.node.setLayoutManager(newValue)
        break
      case "marginBottom":
        this.node.setMarginBottom(newValue)
        break
      case "marginEnd":
        this.node.setMarginEnd(newValue)
        break
      case "marginStart":
        this.node.setMarginStart(newValue)
        break
      case "marginTop":
        this.node.setMarginTop(newValue)
        break
      case "name":
        this.node.setName(newValue)
        break
      case "opacity":
        this.node.setOpacity(newValue)
        break
      case "overflow":
        this.node.setOverflow(newValue)
        break
      case "receivesDefault":
        this.node.setReceivesDefault(newValue)
        break
      case "sensitive":
        this.node.setSensitive(newValue)
        break
      case "tooltipMarkup":
        this.node.setTooltipMarkup(newValue)
        break
      case "tooltipText":
        this.node.setTooltipText(newValue)
        break
      case "valign":
        this.node.setValign(newValue)
        break
      case "vexpand":
        this.node.setVexpand(newValue)
        break
      case "vexpandSet":
        this.node.setVexpandSet(newValue)
        break
      case "visible":
        this.node.setVisible(newValue)
        break
      case "widthRequest":
        this.node.widthRequest = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onDestroy":
        if (oldValue) {
          this.node.off("destroy", oldValue)
        }
        if (newValue) {
          this.node.on("destroy", newValue)
        }
        break
      case "onDirectionChanged":
        if (oldValue) {
          this.node.off("direction-changed", oldValue)
        }
        if (newValue) {
          this.node.on("direction-changed", newValue)
        }
        break
      case "onHide":
        if (oldValue) {
          this.node.off("hide", oldValue)
        }
        if (newValue) {
          this.node.on("hide", newValue)
        }
        break
      case "onKeynavFailed":
        if (oldValue) {
          this.node.off("keynav-failed", oldValue)
        }
        if (newValue) {
          this.node.on("keynav-failed", newValue)
        }
        break
      case "onMap":
        if (oldValue) {
          this.node.off("map", oldValue)
        }
        if (newValue) {
          this.node.on("map", newValue)
        }
        break
      case "onMnemonicActivate":
        if (oldValue) {
          this.node.off("mnemonic-activate", oldValue)
        }
        if (newValue) {
          this.node.on("mnemonic-activate", newValue)
        }
        break
      case "onMoveFocus":
        if (oldValue) {
          this.node.off("move-focus", oldValue)
        }
        if (newValue) {
          this.node.on("move-focus", newValue)
        }
        break
      case "onQueryTooltip":
        if (oldValue) {
          this.node.off("query-tooltip", oldValue)
        }
        if (newValue) {
          this.node.on("query-tooltip", newValue)
        }
        break
      case "onRealize":
        if (oldValue) {
          this.node.off("realize", oldValue)
        }
        if (newValue) {
          this.node.on("realize", newValue)
        }
        break
      case "onShow":
        if (oldValue) {
          this.node.off("show", oldValue)
        }
        if (newValue) {
          this.node.on("show", newValue)
        }
        break
      case "onStateFlagsChanged":
        if (oldValue) {
          this.node.off("state-flags-changed", oldValue)
        }
        if (newValue) {
          this.node.on("state-flags-changed", newValue)
        }
        break
      case "onUnmap":
        if (oldValue) {
          this.node.off("unmap", oldValue)
        }
        if (newValue) {
          this.node.on("unmap", newValue)
        }
        break
      case "onUnrealize":
        if (oldValue) {
          this.node.off("unrealize", oldValue)
        }
        if (newValue) {
          this.node.on("unrealize", newValue)
        }
        break
    }
  }
}
