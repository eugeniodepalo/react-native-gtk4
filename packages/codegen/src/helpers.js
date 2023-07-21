export function camelize(str) {
  return str.replace(/[_-](\w)/g, (_, char) => char.toUpperCase())
}
