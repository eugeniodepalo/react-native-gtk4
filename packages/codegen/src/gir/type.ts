import { Gir } from "@/gir.js"
import { GirImport } from "./import.js"

const typeMap = {
  utf8: "string",
  gboolean: "boolean",
  guint: "number",
  gint: "number",
  gdouble: "number",
  gfloat: "number",
  filename: "string",
  none: "void",
  "utf8[]": "string[]",
}

export class GirType {
  _name: string
  gir: Gir
  namespace: string

  constructor(name: string, gir: Gir, namespace: string = "Gtk") {
    this._name = name
    this.gir = gir
    this.namespace = namespace
  }

  get name() {
    const normalizedTypeName = this._name.includes(".")
      ? this._name
      : `${this.namespace}.${this._name}`

    return typeMap[this._name as keyof typeof typeMap] || normalizedTypeName
  }

  get isPrimitive() {
    return Boolean(typeMap[this._name as keyof typeof typeMap])
  }

  get import_() {
    if (this.isPrimitive) {
      return null
    }

    return new GirImport(this, this.gir)
  }
}
