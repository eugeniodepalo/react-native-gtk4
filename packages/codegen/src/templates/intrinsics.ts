import { WidgetClass } from "../index.js"
import { shouldGenerateComponent } from "./component.js"

interface Props {
  widgetClasses: WidgetClass[]
}

export default function ({ widgetClasses }: Props) {
  let ts = ""

  for (const widgetClass of widgetClasses) {
    if (shouldGenerateComponent({ widgetClass })) {
      continue
    }
    ts += `export const ${widgetClass.name} = "${widgetClass.name}"\n`
  }

  return ts
}
