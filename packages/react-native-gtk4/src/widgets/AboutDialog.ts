import { Container, Gtk } from "../index.js"
import Window from "./Window.js"

export default class AboutDialog<T extends Gtk.AboutDialog> extends Window<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.AboutDialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "artists":
        this.node.setArtists(newValue)
        break
      case "authors":
        this.node.setAuthors(newValue)
        break
      case "comments":
        this.node.setComments(newValue)
        break
      case "copyright":
        this.node.setCopyright(newValue)
        break
      case "documenters":
        this.node.setDocumenters(newValue)
        break
      case "license":
        this.node.setLicense(newValue)
        break
      case "licenseType":
        this.node.setLicenseType(newValue)
        break
      case "logo":
        this.node.setLogo(newValue)
        break
      case "logoIconName":
        this.node.setLogoIconName(newValue)
        break
      case "programName":
        this.node.setProgramName(newValue)
        break
      case "systemInformation":
        this.node.setSystemInformation(newValue)
        break
      case "translatorCredits":
        this.node.setTranslatorCredits(newValue)
        break
      case "version":
        this.node.setVersion(newValue)
        break
      case "website":
        this.node.setWebsite(newValue)
        break
      case "websiteLabel":
        this.node.setWebsiteLabel(newValue)
        break
      case "wrapLicense":
        this.node.setWrapLicense(newValue)
        break
      case "onActivateLink":
        if (oldValue) {
          this.node.off("activate-link", oldValue)
        }
        if (newValue) {
          this.node.on("activate-link", newValue)
        }
        break
      default:
        break
    }
  }
}
