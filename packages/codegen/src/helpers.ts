import { GirProperty } from "./gir.js"

export function camelize(str: string) {
  return str.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
}

export function underscore(str: string) {
  return str.replace("-", "_")
}

const typeMap = {
  utf8: "string",
  gboolean: "boolean",
  guint: "number",
  gint: "number",
  gdouble: "number",
  gfloat: "number",
  filename: "string",
  "utf8[]": "string[]",
  "GObject.Object": "any",
}

export function fromCtype(ctype: string) {
  const mappedType = typeMap[ctype as keyof typeof typeMap]
  if (mappedType) {
    return mappedType
  }
  if (ctype.includes(".")) {
    return ctype
  }
  return `Gtk.${ctype}`
}

export function isPropNullable(prop: GirProperty, enums: string[]) {
  if (prop.array) {
    return true
  }

  const type = fromCtype(prop.type[0].$.name)

  if (["string", "number", "boolean", "Gtk.Widget"].includes(type)) {
    return true
  }

  if (
    [
      "cursor",
      "layout_manager",
      "root",
      "display",
      "action_target",
      "transient_for",
    ].includes(underscore(prop.$.name))
  ) {
    return true
  }

  if (enums.includes(prop.type[0].$.name)) {
    return true
  }

  const {
    nullable,
    "allow-none": allowNone,
    "default-value": defaultValue,
  } = prop.$

  return !!(nullable === "1" || allowNone === "1" || defaultValue)
}
