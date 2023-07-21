import Gtk from "@girs/node-gtk-4.0"
import BaseWidget from "../../widget.js"

export default class Widget<
  T extends Gtk.Widget = Gtk.Widget,
> extends BaseWidget<T> {
  createNode() {
    return new Gtk.Widget({
      cssName: this.props.cssName,
    }) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "canFocus":
        if (this.node.getCanFocus() !== newValue) {
          this.node.setCanFocus(newValue)
        }
        break
      case "canTarget":
        if (this.node.getCanTarget() !== newValue) {
          this.node.setCanTarget(newValue)
        }
        break
      case "cssClasses":
        if (this.node.getCssClasses() !== newValue) {
          this.node.setCssClasses(newValue)
        }
        break
      case "cursor":
        if (this.node.getCursor() !== newValue) {
          this.node.setCursor(newValue)
        }
        break
      case "focusOnClick":
        if (this.node.getFocusOnClick() !== newValue) {
          this.node.setFocusOnClick(newValue)
        }
        break
      case "focusable":
        if (this.node.getFocusable() !== newValue) {
          this.node.setFocusable(newValue)
        }
        break
      case "halign":
        if (this.node.getHalign() !== newValue) {
          this.node.setHalign(newValue)
        }
        break
      case "hasTooltip":
        if (this.node.getHasTooltip() !== newValue) {
          this.node.setHasTooltip(newValue)
        }
        break
      case "heightRequest":
        if (this.node.heightRequest !== newValue) {
          this.node.heightRequest = newValue
        }
        break
      case "hexpand":
        if (this.node.getHexpand() !== newValue) {
          this.node.setHexpand(newValue)
        }
        break
      case "hexpandSet":
        if (this.node.getHexpandSet() !== newValue) {
          this.node.setHexpandSet(newValue)
        }
        break
      case "layoutManager":
        if (this.node.getLayoutManager() !== newValue) {
          this.node.setLayoutManager(newValue)
        }
        break
      case "marginBottom":
        if (this.node.getMarginBottom() !== newValue) {
          this.node.setMarginBottom(newValue)
        }
        break
      case "marginEnd":
        if (this.node.getMarginEnd() !== newValue) {
          this.node.setMarginEnd(newValue)
        }
        break
      case "marginStart":
        if (this.node.getMarginStart() !== newValue) {
          this.node.setMarginStart(newValue)
        }
        break
      case "marginTop":
        if (this.node.getMarginTop() !== newValue) {
          this.node.setMarginTop(newValue)
        }
        break
      case "name":
        if (this.node.getName() !== newValue) {
          this.node.setName(newValue)
        }
        break
      case "opacity":
        if (this.node.getOpacity() !== newValue) {
          this.node.setOpacity(newValue)
        }
        break
      case "overflow":
        if (this.node.getOverflow() !== newValue) {
          this.node.setOverflow(newValue)
        }
        break
      case "receivesDefault":
        if (this.node.getReceivesDefault() !== newValue) {
          this.node.setReceivesDefault(newValue)
        }
        break
      case "sensitive":
        if (this.node.getSensitive() !== newValue) {
          this.node.setSensitive(newValue)
        }
        break
      case "tooltipMarkup":
        if (this.node.getTooltipMarkup() !== newValue) {
          this.node.setTooltipMarkup(newValue)
        }
        break
      case "tooltipText":
        if (this.node.getTooltipText() !== newValue) {
          this.node.setTooltipText(newValue)
        }
        break
      case "valign":
        if (this.node.getValign() !== newValue) {
          this.node.setValign(newValue)
        }
        break
      case "vexpand":
        if (this.node.getVexpand() !== newValue) {
          this.node.setVexpand(newValue)
        }
        break
      case "vexpandSet":
        if (this.node.getVexpandSet() !== newValue) {
          this.node.setVexpandSet(newValue)
        }
        break
      case "visible":
        if (this.node.getVisible() !== newValue) {
          this.node.setVisible(newValue)
        }
        break
      case "widthRequest":
        if (this.node.widthRequest !== newValue) {
          this.node.widthRequest = newValue
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
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
      case "onNotifyCanFocus":
        this.setHandler("notify::can-focus", newValue)
        break
      case "onNotifyCanTarget":
        this.setHandler("notify::can-target", newValue)
        break
      case "onNotifyCssClasses":
        this.setHandler("notify::css-classes", newValue)
        break
      case "onNotifyCssName":
        this.setHandler("notify::css-name", newValue)
        break
      case "onNotifyCursor":
        this.setHandler("notify::cursor", newValue)
        break
      case "onNotifyFocusOnClick":
        this.setHandler("notify::focus-on-click", newValue)
        break
      case "onNotifyFocusable":
        this.setHandler("notify::focusable", newValue)
        break
      case "onNotifyHalign":
        this.setHandler("notify::halign", newValue)
        break
      case "onNotifyHasDefault":
        this.setHandler("notify::has-default", newValue)
        break
      case "onNotifyHasFocus":
        this.setHandler("notify::has-focus", newValue)
        break
      case "onNotifyHasTooltip":
        this.setHandler("notify::has-tooltip", newValue)
        break
      case "onNotifyHeightRequest":
        this.setHandler("notify::height-request", newValue)
        break
      case "onNotifyHexpand":
        this.setHandler("notify::hexpand", newValue)
        break
      case "onNotifyHexpandSet":
        this.setHandler("notify::hexpand-set", newValue)
        break
      case "onNotifyLayoutManager":
        this.setHandler("notify::layout-manager", newValue)
        break
      case "onNotifyMarginBottom":
        this.setHandler("notify::margin-bottom", newValue)
        break
      case "onNotifyMarginEnd":
        this.setHandler("notify::margin-end", newValue)
        break
      case "onNotifyMarginStart":
        this.setHandler("notify::margin-start", newValue)
        break
      case "onNotifyMarginTop":
        this.setHandler("notify::margin-top", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyOpacity":
        this.setHandler("notify::opacity", newValue)
        break
      case "onNotifyOverflow":
        this.setHandler("notify::overflow", newValue)
        break
      case "onNotifyParent":
        this.setHandler("notify::parent", newValue)
        break
      case "onNotifyReceivesDefault":
        this.setHandler("notify::receives-default", newValue)
        break
      case "onNotifyRoot":
        this.setHandler("notify::root", newValue)
        break
      case "onNotifyScaleFactor":
        this.setHandler("notify::scale-factor", newValue)
        break
      case "onNotifySensitive":
        this.setHandler("notify::sensitive", newValue)
        break
      case "onNotifyTooltipMarkup":
        this.setHandler("notify::tooltip-markup", newValue)
        break
      case "onNotifyTooltipText":
        this.setHandler("notify::tooltip-text", newValue)
        break
      case "onNotifyValign":
        this.setHandler("notify::valign", newValue)
        break
      case "onNotifyVexpand":
        this.setHandler("notify::vexpand", newValue)
        break
      case "onNotifyVexpandSet":
        this.setHandler("notify::vexpand-set", newValue)
        break
      case "onNotifyVisible":
        this.setHandler("notify::visible", newValue)
        break
      case "onNotifyWidthRequest":
        this.setHandler("notify::width-request", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
