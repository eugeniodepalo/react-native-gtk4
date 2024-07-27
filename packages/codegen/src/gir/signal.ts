import { GirPropertyElement, GirSignalElement } from "@ts-for-gir/lib"
import { camelize } from "../helpers.js"
import { GirProperty } from "./property.js"
import { GirType } from "./type.js"
import { GirElement } from "./element.js"
import { uniqueBy } from "remeda"

export class GirSignal extends GirElement<GirSignalElement> {
  private _typeDependencies?: GirType[]

  get rawName() {
    return this.data.name
  }

  get name() {
    return camelize(`on_${this.rawName}`)
  }

  get params() {
    return this.data.inParams.map((param) => {
      return new GirProperty(param as GirPropertyElement, this, this._gir)
    })
  }

  get returnType() {
    return new GirType(this.data.returnTypes[0].type, this._gir)
  }

  get typeDependencies() {
    return (this._typeDependencies ||= uniqueBy(
      [
        ...this.params.map((param) => param.type),
        ...(this.returnType ? [this.returnType] : []),
      ].filter((type) => !type.isPrimitive),
      (type) => type.namespace
    ))
  }
}
