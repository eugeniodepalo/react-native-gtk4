import { GirPropertyElement, GirSignalElement } from "@ts-for-gir/lib"
import { camelize } from "../helpers.js"
import { GirProperty } from "./property.js"
import { GirType } from "./type.js"
import { Gir } from "@/gir.js"
import { GirImport } from "./import.js"

export class GirSignal {
  signal: GirSignalElement
  gir: Gir

  constructor(signal: GirSignalElement, gir: Gir) {
    this.signal = signal
    this.gir = gir
  }

  get rawName() {
    return this.signal.$.name
  }

  get name() {
    return camelize(`on_${this.signal.$.name}`)
  }

  get params() {
    return (((this.signal.parameters || [])[0] || {}).parameter || []).map(
      (param) => {
        return new GirProperty(param as GirPropertyElement, this.gir)
      }
    )
  }

  get returnType() {
    const typeName = this.signal["return-value"]?.[0].type?.[0].$.name

    if (!typeName) {
      return null
    }

    return new GirType(typeName, this.gir, this.signal._module?.namespace)
  }

  get imports() {
    const imports: GirImport[] = []

    for (const param of this.params) {
      if (
        param.import_ &&
        !imports.find((i) => i.name === param.import_?.name)
      ) {
        imports.push(param.import_)
      }
    }

    if (
      this.returnType?.import_ &&
      !imports.find((i) => i.name === this.returnType?.import_?.name)
    ) {
      imports.push(this.returnType.import_)
    }

    return imports
  }
}
