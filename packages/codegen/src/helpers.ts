export function camelize(str: string) {
  return str.replace(/[_-](\w)/g, (_, char) => char.toUpperCase())
}

export function underscore(str: string) {
  return str.replace(/-/g, "_")
}
