import { GirEnumeration } from "../gir.js"
import { camelize, fromCtype } from "../helpers.js"
import { WidgetClass, WidgetClassProperty } from "../index.js"

interface Props {
  widgetClass: WidgetClass
  enumerations: GirEnumeration[]
}

const primitiveValues = {
  boolean: "true",
  string: '"New String"',
  number: "42",
  "string[]": '["New String"]',
}

function generateTestPropValue(
  prop: WidgetClassProperty,
  enumerations: GirEnumeration[]
) {
  const { type } = prop
  const enumeration = enumerations.find((e) => e.$.name === type)
  const propType = fromCtype(type)

  if (enumeration) {
    return `${fromCtype(
      enumeration.$.name
    )}.${enumeration.member[0].$.name.toUpperCase()}`
  }

  if (propType.includes(".")) {
    return `new ${propType}()`
  }

  return primitiveValues[propType as keyof typeof primitiveValues]
}

export default function ({ widgetClass, enumerations }: Props) {
  const { name, props } = widgetClass
  const type = fromCtype(name)

  const requiredImports = new Set<string>()

  for (const { type, writable } of props) {
    const importName = fromCtype(type)
    if (importName.includes(".") && writable) {
      requiredImports.add(importName.split(".")[0])
    }
  }

  let ts = `import { ${name} } from "../../../src/generated/widgets.js"\n`
  ts += `import { \n`

  for (const importName of requiredImports) {
    ts += `${importName}, `
  }

  const constructOnlyProps = props.filter((prop) => prop.constructOnly)

  ts += `} from "../../../src/index.js"\n`
  ts += `\n`
  ts += `describe("${name}", () => {\n`
  ts += `  let widget\n`
  ts += `  let node\n`
  ts += `\n`
  ts += `  beforeEach(() => {\n`
  ts += `    ${type}.mockImplementation(() => node)\n`
  ts += `    node = new ${type}()\n`
  ts += `    widget = new ${name}({})\n`
  ts += `  })\n`
  ts += `\n`
  ts += `  test("should create node", () => {\n`
  ts += `    expect(widget.node).toBe(node)\n`
  ts += `  })\n`
  ts += `\n`

  if (constructOnlyProps.length > 0) {
    ts += `test("should set construct only props", () => {\n`

    for (const prop of constructOnlyProps) {
      ts += `const ${camelize(prop.name)} = ${generateTestPropValue(
        prop,
        enumerations
      )}\n`
    }

    ts += `new ${name}({\n`

    for (const prop of constructOnlyProps) {
      ts += `${camelize(prop.name)},\n`
    }

    ts += `  })\n`
    ts += `\n`
    ts += `expect(${type}).toHaveBeenCalledWith({\n`

    for (const prop of constructOnlyProps) {
      ts += `${camelize(prop.name)},\n`
    }

    ts += `  })\n`
    ts += `})\n`
    ts += `\n`
  }

  const settableProps = props.filter(
    (prop) => prop.writable && !prop.constructOnly && prop.name !== "child"
  )

  for (const prop of settableProps) {
    const { name: propName, setter } = prop

    ts += `test("should set ${camelize(propName)}", () => {\n`
    ts += `  const newValue = ${generateTestPropValue(prop, enumerations)}\n`
    ts += `  widget.set("${camelize(propName)}", newValue)\n`

    if (setter) {
      ts += `expect(node.${camelize(setter)}).toHaveBeenCalledWith(newValue)\n`
    } else {
      ts += `expect(node.${camelize(propName)}).toBe(newValue)\n`
    }

    ts += `  })\n`
    ts += `\n`
  }

  ts += `})\n`

  return ts
}
