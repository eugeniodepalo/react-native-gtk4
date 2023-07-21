import fs from "fs"
import { Gir } from "./gir.js"
import * as templates from "./templates.js"

function writeGeneratedFile(path, content) {
  fs.writeFileSync(`out/${path}`, content)
}

async function main() {
  const gir = await Gir.parse()

  for (const widgetClass of gir.widgetClasses) {
    writeGeneratedFile(
      `src/generated/widgets/${widgetClass.name}.tsx`,
      templates.widget(widgetClass)
    )

    writeGeneratedFile(
      `__tests__/generated/widgets/${widgetClass.name}.test.js`,
      templates.widgetTest(widgetClass)
    )
  }

  writeGeneratedFile("src/generated/intrinsics.ts", templates.intrinsics(gir))
  writeGeneratedFile("src/generated/jsx.ts", templates.jsx(gir))
  writeGeneratedFile("src/generated/widgets.ts", templates.widgetIndex(gir))
}

main()
