import { GirPropertyElement } from "@ts-for-gir/lib"
import { camelize } from "../helpers.js"
import { GirType } from "./type.js"
import { GirElement } from "./element.js"

export class GirProperty extends GirElement<GirPropertyElement> {
  get isArray() {
    return this.data.type[0].isArray
  }

  get isOptional() {
    return this.data.type[0].nullable || this.data.type[0].optional
  }

  get isConstructOnly() {
    return this._element.$["construct-only"] === "1"
  }

  get isReadonly() {
    return this.data.readonly
  }

  get rawName() {
    return this.data.name || ""
  }

  get name() {
    return camelize(this.rawName)
  }

  get notifyHandlerName() {
    return camelize(`on_notify_${this.rawName}`)
  }

  get getter() {
    return this._element.$.getter ? camelize(this._element.$.getter) : null
  }

  get setter() {
    if (this._element.$.setter === "set_action_target") {
      return "setActionTargetValue"
    }

    return this._element.$.setter ? camelize(this._element.$.setter) : null
  }

  get type() {
    return new GirType(this.data.type[0].type, this._gir)
  }
}
