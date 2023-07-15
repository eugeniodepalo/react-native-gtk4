import { Gtk } from "../../index.js"
import Window from "./Window.js"

export default class AboutDialog<T extends Gtk.AboutDialog> extends Window<T> {
  createNode() {
    return new Gtk.AboutDialog({}) as T
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
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyArtists":
        this.setHandler("notify::artists", newValue)
        break
      case "onNotifyAuthors":
        this.setHandler("notify::authors", newValue)
        break
      case "onNotifyComments":
        this.setHandler("notify::comments", newValue)
        break
      case "onNotifyCopyright":
        this.setHandler("notify::copyright", newValue)
        break
      case "onNotifyDocumenters":
        this.setHandler("notify::documenters", newValue)
        break
      case "onNotifyLicense":
        this.setHandler("notify::license", newValue)
        break
      case "onNotifyLicenseType":
        this.setHandler("notify::license-type", newValue)
        break
      case "onNotifyLogo":
        this.setHandler("notify::logo", newValue)
        break
      case "onNotifyLogoIconName":
        this.setHandler("notify::logo-icon-name", newValue)
        break
      case "onNotifyProgramName":
        this.setHandler("notify::program-name", newValue)
        break
      case "onNotifySystemInformation":
        this.setHandler("notify::system-information", newValue)
        break
      case "onNotifyTranslatorCredits":
        this.setHandler("notify::translator-credits", newValue)
        break
      case "onNotifyVersion":
        this.setHandler("notify::version", newValue)
        break
      case "onNotifyWebsite":
        this.setHandler("notify::website", newValue)
        break
      case "onNotifyWebsiteLabel":
        this.setHandler("notify::website-label", newValue)
        break
      case "onNotifyWrapLicense":
        this.setHandler("notify::wrap-license", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onActivateLink":
        this.setHandler("activate-link", newValue)
        break
    }
  }
}
