jest.mock("@/generated/girs/node-gtk.js", () => ({
  __esModule: true,
  default: {
    startLoop: jest.fn(),
  },
}))

jest.mock("@/generated/girs/node-gtk-4.0.js")
jest.mock("@/generated/girs/node-gdk-4.0.js")
jest.mock("@/generated/girs/node-gio-2.0.js")
jest.mock("@/generated/girs/node-glib-2.0.js")
jest.mock("@/generated/girs/node-gobject-2.0.js")
jest.mock("@/generated/girs/node-pango-1.0.js")
