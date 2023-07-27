import { Renderer } from "./render/renderer.js"

const renderer = new Renderer()

export function setup(...args) {
  renderer.setup(...args)
}

export function render(...args) {
  return renderer.render(...args)
}

export function findBy(...args) {
  return renderer.findBy(...args)
}

export function findAllBy(...args) {
  return renderer.findAllBy(...args)
}

export function fireEvent(...args) {
  return renderer.fireEvent(...args)
}
