import { WidgetClass } from "../../index.js"
import { generateJsxElement, generateJsxElementProps } from "../jsx.js"

interface Props {
  widgetClass: WidgetClass
  enums: string[]
}

export default function ({ widgetClass, enums }: Props) {
  let propsSection = generateJsxElementProps(widgetClass, enums)

  propsSection += `children?: React.ReactNode\n`

  return generateJsxElement({
    widgetClass,
    enums,
    propsSection,
  })
}
