export function camelize(str: string) {
  return str.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
}

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

export const importModuleNames = {
  Gtk: "@girs/node-gtk-4.0",
  Gdk: "@girs/node-gdk-4.0",
  Gio: "@girs/node-gio-2.0",
  GLib: "@girs/node-glib-2.0",
  GObject: "@girs/node-gobject-2.0",
  Pango: "@girs/node-pango-1.0",
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
