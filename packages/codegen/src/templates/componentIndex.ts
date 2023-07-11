import { camelize } from "../helpers.js"
import { WidgetClass } from "../index.js"
import { shouldGenerateComponent } from "./component.js"

interface Props {
  widgetClasses: WidgetClass[]
}

export default function ({ widgetClasses }: Props) {
  let ts = ""

  for (const widgetClass of widgetClasses) {
    if (!shouldGenerateComponent({ widgetClass })) continue
    const name = camelize(widgetClass.name)
    ts += `export { default as ${name} } from "./components/${name}.js"\n`
  }

  return ts
}
