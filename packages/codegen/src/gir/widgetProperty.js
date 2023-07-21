import { camelize } from "../helpers.js"
import { WidgetImport } from "./widgetImport.js"
import { WidgetType } from "./widgetType.js"

export class WidgetProperty {
  constructor(prop, gir) {
    this.prop = prop
    this.gir = gir
  }

  get isArray() {
    return Boolean(this.prop.array)
  }

  get isOptional() {
    return this.prop.$.nullable !== "0"
  }

  get isConstructOnly() {
    return this.prop.$["construct-only"] === "1"
  }

  get isReadonly() {
    return !(this.prop.$.writable === "1") && !this.setter
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
    return this.prop.$.setter && this.name !== "actionTarget"
      ? camelize(this.prop.$.setter)
      : null
  }

  get type() {
    let typeName

    if (this.isArray) {
      typeName = (this.prop.array || [])[0].type[0].$.name
    } else if (typeof this.prop.type === "string") {
      typeName = this.prop.type
    } else {
      typeName = (this.prop.type || [])[0].$.name
    }

    return new WidgetType(typeName, this.gir)
  }

  get import_() {
    if (this.type.isPrimitive) {
      return null
    }

    return new WidgetImport(this.type, this.gir)
  }
}
