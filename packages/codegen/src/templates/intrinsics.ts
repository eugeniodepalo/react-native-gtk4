import { WidgetClass } from "../index.js"

interface Props {
  widgetClasses: WidgetClass[]
}

export default function ({ widgetClasses }: Props) {
  let ts = ""

  for (const widgetClass of widgetClasses) {
    ts += `export const ${widgetClass.name} = "${widgetClass.name}"\n`
  }

  return ts
}
