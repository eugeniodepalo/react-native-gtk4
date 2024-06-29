import { GirInterfaceElement } from "@ts-for-gir/lib"
import { GirProperty } from "./property.js"
import { GirSignal } from "./signal.js"
import { GirType } from "./type.js"
import { Gir } from "@/gir.js"

export class GirInterface {
  interface_: GirInterfaceElement
  gir: Gir

  constructor(interface_: GirInterfaceElement, gir: Gir) {
    this.interface_ = interface_
    this.gir = gir
  }

  get type() {
    return new GirType(
      this.interface_.$.name,
      this.gir,
      this.interface_._module?.namespace
    )
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
