import { Gir } from "@/gir.js"

export default function (gir: Gir) {
  let ts = ""

  for (const widgetClass of gir.widgetClasses) {
    ts += `export const ${widgetClass.name} = "${widgetClass.name}"\n`
  }

  return ts
}
