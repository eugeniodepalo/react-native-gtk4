import { GirPropertyElement } from "@ts-for-gir/lib"
import { camelize } from "../helpers.js"
import { GirImport } from "./import.js"
import { GirType } from "./type.js"
import { Gir } from "@/gir.js"

export class GirProperty {
  prop: GirPropertyElement
  gir: Gir

  constructor(prop: GirPropertyElement, gir: Gir) {
    this.prop = prop
    this.gir = gir
  }

  get isArray() {
    return Boolean(this.prop.array)
  }

  get isOptional() {
    return true
  }

  get isConstructOnly() {
    return this.prop.$["construct-only"] === "1"
  }

  get isReadonly() {
    return this.prop.$.writable !== "1"
  }

  get rawName() {
    return this.prop.$.name
  }

  get name() {
    return camelize(this.rawName)
  }

  get notifyHandlerName() {
    return camelize(`on_notify_${this.rawName}`)
  }

  get getter() {
    return this.prop.$.getter ? camelize(this.prop.$.getter) : null
  }

  get setter() {
    return this.prop.$.setter ? camelize(this.prop.$.setter) : null
  }

  get type() {
    let typeName: string | undefined

    if (this.isArray) {
      typeName = (this.prop.array || [])[0].type?.[0].$.name
    } else if (typeof this.prop.type === "string") {
      typeName = this.prop.type
    } else {
      typeName = (this.prop.type || [])[0].$.name
    }

    if (!typeName) {
      return null
    }

    return new GirType(typeName, this.gir, this.prop._module?.namespace)
  }

  get import_() {
    return this.type?.import_
  }
}
