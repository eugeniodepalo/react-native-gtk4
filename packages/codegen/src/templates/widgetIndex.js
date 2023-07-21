export default function (gir) {
  let ts = ""

  for (const widgetClass of gir.widgetClasses) {
    ts += `export { default as ${widgetClass.name} } from "./widgets/${widgetClass.name}.js"\n`
  }

  return ts
}
