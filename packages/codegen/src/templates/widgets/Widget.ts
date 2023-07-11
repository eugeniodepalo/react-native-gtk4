import { WidgetClass } from "../../index.js"
import { generateWidgetFile } from "../widget.js"

interface Props {
  widgetClass: WidgetClass
}

export default function ({ widgetClass }: Props) {
  let importSection = ""

  importSection += `import { Container, Gtk } from "../../index.js"\n`
  importSection += `import BaseWidget from "../../widget.js"\n`

  return generateWidgetFile({
    widgetClass,
    importSection,
    parentClass: "BaseWidget",
  })
}
