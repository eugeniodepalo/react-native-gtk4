import { AboutDialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("AboutDialog", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.AboutDialog()
    Gtk.AboutDialog.mockImplementation(() => node)
    widget = new AboutDialog({})
  })

  test("should set artists", () => {
    const newValue = "Some String"
    widget.set("artists", newValue)
    expect(node.setArtists).toHaveBeenCalledWith(newValue)
  })

  test("should set authors", () => {
    const newValue = "Some String"
    widget.set("authors", newValue)
    expect(node.setAuthors).toHaveBeenCalledWith(newValue)
  })

  test("should set comments", () => {
    const newValue = "Some String"
    widget.set("comments", newValue)
    expect(node.setComments).toHaveBeenCalledWith(newValue)
  })

  test("should set copyright", () => {
    const newValue = "Some String"
    widget.set("copyright", newValue)
    expect(node.setCopyright).toHaveBeenCalledWith(newValue)
  })

  test("should set documenters", () => {
    const newValue = "Some String"
    widget.set("documenters", newValue)
    expect(node.setDocumenters).toHaveBeenCalledWith(newValue)
  })

  test("should set license", () => {
    const newValue = "Some String"
    widget.set("license", newValue)
    expect(node.setLicense).toHaveBeenCalledWith(newValue)
  })

  test("should set licenseType", () => {
    const newValue = Gtk.License.UNKNOWN
    widget.set("licenseType", newValue)
    expect(node.setLicenseType).toHaveBeenCalledWith(newValue)
  })

  test("should set logo", () => {
    const newValue = new Gdk.Paintable()
    widget.set("logo", newValue)
    expect(node.setLogo).toHaveBeenCalledWith(newValue)
  })

  test("should set logoIconName", () => {
    const newValue = "Some String"
    widget.set("logoIconName", newValue)
    expect(node.setLogoIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set programName", () => {
    const newValue = "Some String"
    widget.set("programName", newValue)
    expect(node.setProgramName).toHaveBeenCalledWith(newValue)
  })

  test("should set systemInformation", () => {
    const newValue = "Some String"
    widget.set("systemInformation", newValue)
    expect(node.setSystemInformation).toHaveBeenCalledWith(newValue)
  })

  test("should set translatorCredits", () => {
    const newValue = "Some String"
    widget.set("translatorCredits", newValue)
    expect(node.setTranslatorCredits).toHaveBeenCalledWith(newValue)
  })

  test("should set version", () => {
    const newValue = "Some String"
    widget.set("version", newValue)
    expect(node.setVersion).toHaveBeenCalledWith(newValue)
  })

  test("should set website", () => {
    const newValue = "Some String"
    widget.set("website", newValue)
    expect(node.setWebsite).toHaveBeenCalledWith(newValue)
  })

  test("should set websiteLabel", () => {
    const newValue = "Some String"
    widget.set("websiteLabel", newValue)
    expect(node.setWebsiteLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set wrapLicense", () => {
    const newValue = true
    widget.set("wrapLicense", newValue)
    expect(node.setWrapLicense).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivateLink", () => {
    const callback = jest.fn()
    widget.set("onActivateLink", callback)
    const handler = widget.handlers["activate-link"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("activate-link", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyArtists", () => {
    const callback = jest.fn()
    widget.set("onNotifyArtists", callback)
    const handler = widget.handlers["notify::artists"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::artists",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAuthors", () => {
    const callback = jest.fn()
    widget.set("onNotifyAuthors", callback)
    const handler = widget.handlers["notify::authors"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::authors",
      expect.any(Function)
    )
  })

  test("should connect onNotifyComments", () => {
    const callback = jest.fn()
    widget.set("onNotifyComments", callback)
    const handler = widget.handlers["notify::comments"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::comments",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCopyright", () => {
    const callback = jest.fn()
    widget.set("onNotifyCopyright", callback)
    const handler = widget.handlers["notify::copyright"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::copyright",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDocumenters", () => {
    const callback = jest.fn()
    widget.set("onNotifyDocumenters", callback)
    const handler = widget.handlers["notify::documenters"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::documenters",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLicense", () => {
    const callback = jest.fn()
    widget.set("onNotifyLicense", callback)
    const handler = widget.handlers["notify::license"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::license",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLicenseType", () => {
    const callback = jest.fn()
    widget.set("onNotifyLicenseType", callback)
    const handler = widget.handlers["notify::license-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::license-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLogo", () => {
    const callback = jest.fn()
    widget.set("onNotifyLogo", callback)
    const handler = widget.handlers["notify::logo"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::logo", expect.any(Function))
  })

  test("should connect onNotifyLogoIconName", () => {
    const callback = jest.fn()
    widget.set("onNotifyLogoIconName", callback)
    const handler = widget.handlers["notify::logo-icon-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::logo-icon-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyProgramName", () => {
    const callback = jest.fn()
    widget.set("onNotifyProgramName", callback)
    const handler = widget.handlers["notify::program-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::program-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifySystemInformation", () => {
    const callback = jest.fn()
    widget.set("onNotifySystemInformation", callback)
    const handler = widget.handlers["notify::system-information"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::system-information",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTranslatorCredits", () => {
    const callback = jest.fn()
    widget.set("onNotifyTranslatorCredits", callback)
    const handler = widget.handlers["notify::translator-credits"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::translator-credits",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVersion", () => {
    const callback = jest.fn()
    widget.set("onNotifyVersion", callback)
    const handler = widget.handlers["notify::version"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::version",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWebsite", () => {
    const callback = jest.fn()
    widget.set("onNotifyWebsite", callback)
    const handler = widget.handlers["notify::website"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::website",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWebsiteLabel", () => {
    const callback = jest.fn()
    widget.set("onNotifyWebsiteLabel", callback)
    const handler = widget.handlers["notify::website-label"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::website-label",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWrapLicense", () => {
    const callback = jest.fn()
    widget.set("onNotifyWrapLicense", callback)
    const handler = widget.handlers["notify::wrap-license"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::wrap-license",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()
    widget.set("onNotifyAccessibleRole", callback)
    const handler = widget.handlers["notify::accessible-role"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
