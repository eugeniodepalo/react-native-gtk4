import fs from "fs"
import * as templates from "./templates.js"
import { Gir } from "./gir.js"

const OUT_DIR = process.argv[2]

function writeGeneratedFile(path: string, content: string) {
  fs.writeFileSync(`${OUT_DIR}/${path}`, content)
}

async function main() {
  const gir = await Gir.parse(OUT_DIR)

  for (const widgetClass of gir.widgetClasses) {
    writeGeneratedFile(
      `src/generated/widgets/${widgetClass.name}.tsx`,
      templates.widget(widgetClass)
    )

    writeGeneratedFile(
      `__tests__/generated/widgets/${widgetClass.name}.test.ts`,
      templates.widgetTest(widgetClass, gir)
    )
  }

  writeGeneratedFile("src/generated/intrinsics.ts", templates.intrinsics(gir))
  writeGeneratedFile("src/generated/jsx.ts", templates.jsx(gir))
  writeGeneratedFile("src/generated/widgets.ts", templates.widgetIndex(gir))
}

main()
