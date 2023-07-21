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

export class WidgetType {
  constructor(name, gir) {
    this._name = name
    this.gir = gir
  }

  get name() {
    const normalizedTypeName = this._name.includes(".")
      ? this._name
      : `Gtk.${this._name}`

    return typeMap[this._name] || normalizedTypeName
  }

  get isPrimitive() {
    return Boolean(typeMap[this._name])
  }
}
