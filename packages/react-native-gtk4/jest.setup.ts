import { Gtk } from "./src/index.js"

global.beforeEach(() => {
  Gtk.init()
})
