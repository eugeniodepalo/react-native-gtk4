import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Renderer from "./renderer.js"

const renderer = new Renderer()

export function setup(...args: Parameters<typeof renderer.setup>) {
  renderer.setup(...args)
}

export function render(...args: Parameters<typeof renderer.render>) {
  return renderer.render(...args)
}

export function findBy<T extends Gtk.Widget>(
  ...args: Parameters<typeof renderer.findBy>
) {
  return renderer.findBy<T>(...args)
}

export function findAllBy<T extends Gtk.Widget>(
  ...args: Parameters<typeof renderer.findAllBy>
) {
  return renderer.findAllBy<T>(...args)
}

export function fireEvent(...args: Parameters<typeof renderer.fireEvent>) {
  return renderer.fireEvent(...args)
}
