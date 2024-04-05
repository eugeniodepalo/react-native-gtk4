jest.mock("@girs/node-gtk", () => ({
  __esModule: true,
  default: {
    startLoop: jest.fn(),
  },
}))

jest.mock("@girs/node-gtk-4.0")
jest.mock("@girs/node-gdk-4.0")
jest.mock("@girs/node-gio-2.0")
jest.mock("@girs/node-glib-2.0")
jest.mock("@girs/node-gobject-2.0")
jest.mock("@girs/node-pango-1.0")
