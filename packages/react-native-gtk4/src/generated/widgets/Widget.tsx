import { Gtk } from "../../index.js"
import BaseWidget from "../../widget.js"

export default class Widget<T extends Gtk.Widget> extends BaseWidget<T> {
  createNode() {
    return new Gtk.Widget({ cssName: this.props.cssName }) as T
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
        this.setHandler("destroy", newValue)
        break
      case "onDirectionChanged":
        this.setHandler("direction-changed", newValue)
        break
      case "onHide":
        this.setHandler("hide", newValue)
        break
      case "onKeynavFailed":
        this.setHandler("keynav-failed", newValue)
        break
      case "onMap":
        this.setHandler("map", newValue)
        break
      case "onMnemonicActivate":
        this.setHandler("mnemonic-activate", newValue)
        break
      case "onMoveFocus":
        this.setHandler("move-focus", newValue)
        break
      case "onQueryTooltip":
        this.setHandler("query-tooltip", newValue)
        break
      case "onRealize":
        this.setHandler("realize", newValue)
        break
      case "onShow":
        this.setHandler("show", newValue)
        break
      case "onStateFlagsChanged":
        this.setHandler("state-flags-changed", newValue)
        break
      case "onUnmap":
        this.setHandler("unmap", newValue)
        break
      case "onUnrealize":
        this.setHandler("unrealize", newValue)
        break
    }
  }
}
