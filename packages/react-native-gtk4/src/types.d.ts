import Gio from "@girs/node-gio-2.0"

declare module "@girs/node-gtk-4.0" {
  namespace Gtk {
    interface FileDialog {
      open(
        parent: Window | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback
      ): void
      openMultiple(
        parent: Window | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback
      ): void
      selectFolder(
        parent: Window | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback
      ): void
      selectMultipleFolders(
        parent: Window | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback
      ): void
      save(
        parent: Window | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback
      ): void
    }
  }
}

export {}
