import { GirInterfaceElement } from "@ts-for-gir/lib"
import { GirProperty } from "./property.js"
import { GirSignal } from "./signal.js"
import { GirElement } from "./element.js"

export class GirInterface extends GirElement<GirInterfaceElement> {
  private _props?: GirProperty[]
  private _signals?: GirSignal[]

  get props() {
    return (this._props ||= this.data.properties.map(
      (p) => new GirProperty(p, this, this._gir)
    ))
  }

  get signals() {
    return (this._signals ||= this.data.signals.map(
      (s) => new GirSignal(s, this._gir)
    ))
  }
}
