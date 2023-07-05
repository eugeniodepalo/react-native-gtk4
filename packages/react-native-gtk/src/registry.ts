import generatedRegistry from "./generated/registry"
import ApplicationWindow from "./elements/ApplicationWindow"
import Box from "./elements/Box"

const registry = {
  ...generatedRegistry,
  ApplicationWindow,
  Box,
}

export default registry
export type ElementType = keyof typeof registry
