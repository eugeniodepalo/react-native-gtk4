import { Gir } from "@/gir.js"
import { GirType } from "../gir/type.js"
import { underscore } from "../helpers.js"
import { GirProperty } from "@/gir/property.js"
import { GirClass } from "@/gir/class.js"

const primitiveTestValues = {
  string: '"Some String"',
  boolean: "true",
  number: "1",
}

function getEnumerationTestValues(gir: Gir) {
  const testValues: Record<string, string> = {}

  for (const enumeration of gir.enumerations) {
    if (!enumeration._module) {
      continue
    }

    const qualifiedName = `${enumeration._module.namespace}.${enumeration.$.name}`
    const type = new GirType(qualifiedName, gir)
    const member = enumeration.member?.[0].$.name.toUpperCase()
    testValues[type.name] = `${type.name}.${member}`
  }

  return testValues
}

function getBitfieldTestValues(gir: Gir) {
  const testValues: Record<string, string> = {}

  for (const bitfield of gir.bitfields) {
    if (!bitfield._module) {
      continue
    }

    const qualifiedName = `${bitfield._module.namespace}.${bitfield.$.name}`
    const type = new GirType(qualifiedName, gir)
    const member = bitfield.member[0].$.name.toUpperCase()
    testValues[type.name] = `${type.name}.${member}`
  }

  return testValues
}

function getClassTestValues(gir: Gir) {
  const testValues: Record<string, string> = {}

  const otherTestValues: Record<string, string> = {
    ...primitiveTestValues,
  }

  for (const widgetClass of gir.widgetClasses) {
    testValues[widgetClass.type.name] = `new ${widgetClass.type.name}(`

    const nonOptionalConstructOnlyProps = widgetClass.constructOnlyProps.filter(
      (prop) => !prop.isOptional
    )

    if (nonOptionalConstructOnlyProps.length > 0) {
      testValues[widgetClass.type.name] += "{"

      for (const prop of nonOptionalConstructOnlyProps) {
        if (!prop.type) {
          continue
        }

        testValues[widgetClass.type.name] +=
          `${prop.name}: ${otherTestValues[prop.type.name]}, `
      }

      testValues[widgetClass.type.name] += "}"
    }

    testValues[widgetClass.type.name] += ")"
  }

  return testValues
}

function getTestValue(prop: GirProperty, gir: Gir) {
  const testValues: Record<string, string> = {
    ...primitiveTestValues,
    ...getClassTestValues(gir),
    ...getEnumerationTestValues(gir),
    ...getBitfieldTestValues(gir),
  }

  if (!prop.type) {
    return null
  }

  return testValues[prop.type.name]
}

export default function (widgetClass: GirClass, gir: Gir) {
  let ts = ""

  ts += `import { ${widgetClass.name} } from "@/generated/widgets.js"\n`

  for (const type of widgetClass.typeDependencies) {
    ts += `import ${type.import_.name} from "${type.import_.moduleName}"\n`
  }

  ts += "\n"
  ts += `describe("${widgetClass.name}", () => {\n`
  ts += `  let widget: ${widgetClass.name}\n`
  ts += "\n"
  ts += "  beforeEach(() => {\n"
  ts += `    widget = new ${widgetClass.name}({}, ${widgetClass.name}.createNode(`

  if (widgetClass.constructOnlyProps.length > 0) {
    ts += "{"

    for (const prop of widgetClass.constructOnlyProps) {
      ts += `${prop.name}: ${getTestValue(prop, gir)}, `
    }

    ts += "}"
  }

  ts += "    ))\n"
  ts += "  })\n"
  ts += "\n"

  if (widgetClass.constructOnlyProps.length > 0) {
    ts += "test('should set construct only props', () => {\n"
    ts += "  const props = {\n"

    for (const prop of widgetClass.constructOnlyProps) {
      ts += `    ${prop.name}: ${getTestValue(prop, gir)},\n`
    }

    ts += "  }\n"
    ts += "\n"

    ts +=
      "  new " +
      widgetClass.name +
      "(props, " +
      widgetClass.name +
      ".createNode(props))\n"

    const expectedProps = widgetClass.constructOnlyProps.reduce(
      (acc, prop) => {
        acc[underscore(prop.rawName)] = `props.${prop.name}`
        return acc
      },
      {} as Record<string, string>
    )

    ts += "\n"
    ts += `  expect(${widgetClass.type.name}).toHaveBeenCalledWith({`

    for (const expectedProp in expectedProps) {
      ts += `${expectedProp}: ${expectedProps[expectedProp]}, `
    }

    ts += "  })\n"
    ts += "})\n"
    ts += "\n"
  }

  for (const prop of widgetClass.settableProps) {
    ts += `  test("should set ${prop.name}", () => {\n`
    ts += `    const newValue = ${getTestValue(prop, gir)}\n`
    ts += `    widget.set("${prop.name}", newValue)\n`

    if (prop.setter) {
      ts += `    expect(widget.node.${prop.setter}).toHaveBeenCalledWith(newValue)\n`
    } else {
      ts += `    expect(widget.node.${prop.name}).toBe(newValue)\n`
    }

    ts += "  })\n"
    ts += "\n"
  }

  for (const signal of widgetClass.signals) {
    ts += `  test("should connect ${signal.name}", () => {\n`
    ts += `    const callback = jest.fn()\n`
    ts += `\n`
    ts += `    widget.set("${signal.name}", callback)\n`
    ts += `\n`
    ts += `    const handler = widget.handlers["${signal.rawName}"]\n`
    ts += `    expect(handler).toBeDefined()\n`
    ts += `    handler()\n`
    ts += `    expect(widget.node.on).toHaveBeenCalledWith("${signal.rawName}", expect.any(Function))\n`
    ts += `    expect(callback).toHaveBeenCalled()\n`
    ts += "  })\n"
    ts += "\n"
  }

  for (const prop of widgetClass.props) {
    ts += `  test("should connect ${prop.notifyHandlerName}", () => {\n`
    ts += `    const callback = jest.fn()\n`
    ts += `\n`
    ts += `    widget.set("${prop.notifyHandlerName}", callback)\n`
    ts += `\n`
    ts += `    const handler = widget.handlers["notify::${prop.rawName}"]\n`
    ts += `    expect(handler).toBeDefined()\n`
    ts += `    handler()\n`
    ts += `    expect(callback).toHaveBeenCalled()\n`
    ts += `    expect(widget.node.on).toHaveBeenCalledWith("notify::${prop.rawName}", expect.any(Function))\n`
    ts += "  })\n"
    ts += "\n"
  }

  if (widgetClass.isContainer) {
    ts += "  test('should append child', () => {\n"
    ts += `    const child = new ${widgetClass.name}({}, ${widgetClass.name}.createNode())\n`
    ts += "    widget.appendChild(child)\n"
    ts += "    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)\n"
    ts += "  })\n"
    ts += "\n"

    ts += "  test('should remove child', () => {\n"
    ts += `    const child = new ${widgetClass.name}({}, ${widgetClass.name}.createNode())\n`
    ts += "    widget.appendChild(child)\n"
    ts += "    widget.removeChild(child)\n"
    ts += "    expect(widget.node.setChild).toHaveBeenCalledWith(null)\n"
    ts += "  })\n"

    ts += "  test('should insert child before', () => {\n"
    ts += `    const child = new ${widgetClass.name}({}, ${widgetClass.name}.createNode())\n`
    ts += `    const sibling = new ${widgetClass.name}({}, ${widgetClass.name}.createNode())\n`
    ts += "    widget.appendChild(child)\n"
    ts += "    widget.insertBefore(sibling, child)\n"
    ts +=
      "    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)\n"
    ts += "  })\n"
  }

  ts += "})\n"

  return ts
}
