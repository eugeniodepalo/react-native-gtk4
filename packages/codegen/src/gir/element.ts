import { Gir } from "@/gir"
import { GirAnyElement } from "@ts-for-gir/lib"
import { GirType } from "./type"
import { GirModule } from "./module"

export abstract class GirElement<T extends GirAnyElement> {
  protected _element: T
  protected _gir: Gir

  constructor(element: T, gir: Gir) {
    this._element = element
    this._gir = gir
  }

  get qualifiedName() {
    return this._element._fullSymName || ""
  }

  get name() {
    return this._element.$.name || ""
  }

  get element() {
    return this._element
  }

  get module() {
    if (!this._element._module) {
      throw new Error(`No module found for ${this.qualifiedName}`)
    }

    return new GirModule(this._element._module, this._gir)
  }

  get data(): NonNullable<T["_tsData"]> {
    if (!this._element._tsData) {
      throw new Error(`No tsData found for ${this.qualifiedName}`)
    }

    return this._element._tsData
  }

  get type() {
    return new GirType(this.qualifiedName, this._gir)
  }
}
