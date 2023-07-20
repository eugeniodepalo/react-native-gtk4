import { AboutDialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("AboutDialog", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.AboutDialog.mockImplementation(() => node)
    node = new Gtk.AboutDialog()
    widget = new AboutDialog({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set artists", () => {
    const newValue = "New String"
    widget.set("artists", newValue)
    expect(node.setArtists).toHaveBeenCalledWith(newValue)
  })

  test("should set authors", () => {
    const newValue = "New String"
    widget.set("authors", newValue)
    expect(node.setAuthors).toHaveBeenCalledWith(newValue)
  })

  test("should set comments", () => {
    const newValue = "New String"
    widget.set("comments", newValue)
    expect(node.setComments).toHaveBeenCalledWith(newValue)
  })

  test("should set copyright", () => {
    const newValue = "New String"
    widget.set("copyright", newValue)
    expect(node.setCopyright).toHaveBeenCalledWith(newValue)
  })

  test("should set documenters", () => {
    const newValue = "New String"
    widget.set("documenters", newValue)
    expect(node.setDocumenters).toHaveBeenCalledWith(newValue)
  })

  test("should set license", () => {
    const newValue = "New String"
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
    const newValue = "New String"
    widget.set("logoIconName", newValue)
    expect(node.setLogoIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set programName", () => {
    const newValue = "New String"
    widget.set("programName", newValue)
    expect(node.setProgramName).toHaveBeenCalledWith(newValue)
  })

  test("should set systemInformation", () => {
    const newValue = "New String"
    widget.set("systemInformation", newValue)
    expect(node.setSystemInformation).toHaveBeenCalledWith(newValue)
  })

  test("should set translatorCredits", () => {
    const newValue = "New String"
    widget.set("translatorCredits", newValue)
    expect(node.setTranslatorCredits).toHaveBeenCalledWith(newValue)
  })

  test("should set version", () => {
    const newValue = "New String"
    widget.set("version", newValue)
    expect(node.setVersion).toHaveBeenCalledWith(newValue)
  })

  test("should set website", () => {
    const newValue = "New String"
    widget.set("website", newValue)
    expect(node.setWebsite).toHaveBeenCalledWith(newValue)
  })

  test("should set websiteLabel", () => {
    const newValue = "New String"
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
})
