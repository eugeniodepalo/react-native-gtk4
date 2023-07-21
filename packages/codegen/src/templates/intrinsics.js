export default function (gir) {
  let ts = ""

  for (const widgetClass of gir.widgetClasses) {
    ts += `export const ${widgetClass.name} = "${widgetClass.name}"\n`
  }

  return ts
}
