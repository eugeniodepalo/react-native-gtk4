import { camelize } from "../helpers.js"
import { GirProperty } from "./property.js"
import { GirType } from "./type.js"

export class GirSignal {
  constructor(signal, gir) {
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
        return new GirProperty(param, this.gir)
      }
    )
  }

  get returnType() {
    return new GirType(this.signal["return-value"][0].type[0].$.name)
  }

  get imports() {
    const imports = []

    for (const param of this.params) {
      if (
        param._import &&
        !imports.find((i) => i.name === param.import_.name)
      ) {
        imports.push(param.import_)
      }
    }

    if (
      this.returnType.import_ &&
      !imports.find((i) => i.name === this.returnType.import_.name)
    ) {
      imports.push(this.returnType.import_)
    }

    return imports
  }
}
