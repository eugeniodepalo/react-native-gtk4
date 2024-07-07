import { Gir } from "@/gir.js"
import { Import } from "./import"

const primitiveTypes = ["string", "boolean", "number", "void", "any"]

export class GirType {
  _name: string
  _gir: Gir

  constructor(name: string, gir: Gir) {
    this._name = name
    this._gir = gir
  }

  get name() {
    return this._name
  }

  get namespace() {
    return this.name.split(".")[0]
  }

  get module() {
    return this._gir.findModuleByNamespace(this.namespace)
  }

  get import_(): Import {
    return {
      moduleName: `@/generated/girs/${this.module.importName}.js`,
      name: this.namespace,
    }
  }

  get isPrimitive() {
    return primitiveTypes.includes(this._name)
  }
}
