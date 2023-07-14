import { camelize } from "../helpers.js"
import { WidgetClass } from "../index.js"

interface Props {
  widgetClasses: WidgetClass[]
}

export default function ({ widgetClasses }: Props) {
  let ts = ""

  for (const widgetClass of widgetClasses) {
    const name = camelize(widgetClass.name)
    ts += `export { default as ${name} } from "./widgets/${name}.js"\n`
  }

  return ts
}