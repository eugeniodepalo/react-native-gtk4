export function camelize(str) {
  return str.replace(/[_-](\w)/g, (_, char) => char.toUpperCase())
}

export function underscore(str) {
  return str.replace(/-/g, "_")
}
