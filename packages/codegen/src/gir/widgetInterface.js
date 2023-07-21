import { WidgetProperty } from "./widgetProperty.js"
import { WidgetSignal } from "./widgetSignal.js"

export class WidgetInterface {
  constructor(interface_, gir) {
    this.interface_ = interface_
    this.gir = gir
  }

  get props() {
    return (this.interface_.property || []).map(
      (property) => new WidgetProperty(property, this.gir)
    )
  }

  get signals() {
    return (this.interface_["glib:signal"] || []).map(
      (signal) => new WidgetSignal(signal, this.gir)
    )
  }
}
