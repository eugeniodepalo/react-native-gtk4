import { GirProperty } from "./property.js"
import { GirSignal } from "./signal.js"
import { GirType } from "./type.js"

export class GirInterface {
  constructor(interface_, gir) {
    this.interface_ = interface_
    this.gir = gir
  }

  get type() {
    return new GirType(this.interface_.$.name, this.gir)
  }

  get props() {
    return (this.interface_.property || []).map(
      (property) => new GirProperty(property, this.gir)
    )
  }

  get signals() {
    return (this.interface_["glib:signal"] || []).map(
      (signal) => new GirSignal(signal, this.gir)
    )
  }
}
