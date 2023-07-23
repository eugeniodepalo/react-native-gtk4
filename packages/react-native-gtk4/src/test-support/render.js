import { Renderer } from "./render/renderer.js"

const renderer = new Renderer()

export function setupRenderer() {
  renderer.setup()
}

export function render(element) {
  return renderer.render(element)
}
