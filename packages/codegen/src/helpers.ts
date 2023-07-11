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
