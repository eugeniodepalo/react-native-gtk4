import { Gtk } from "../../index.js"
import Window from "./Window.js"

export default class AboutDialog<
  T extends Gtk.AboutDialog = Gtk.AboutDialog,
> extends Window<T> {
  createNode() {
    return new Gtk.AboutDialog({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "artists":
        if (this.node.artists !== newValue) {
          this.node.setArtists(newValue)
        }
        break
      case "authors":
        if (this.node.authors !== newValue) {
          this.node.setAuthors(newValue)
        }
        break
      case "comments":
        if (this.node.comments !== newValue) {
          this.node.setComments(newValue)
        }
        break
      case "copyright":
        if (this.node.copyright !== newValue) {
          this.node.setCopyright(newValue)
        }
        break
      case "documenters":
        if (this.node.documenters !== newValue) {
          this.node.setDocumenters(newValue)
        }
        break
      case "license":
        if (this.node.license !== newValue) {
          this.node.setLicense(newValue)
        }
        break
      case "licenseType":
        if (this.node.licenseType !== newValue) {
          this.node.setLicenseType(newValue)
        }
        break
      case "logo":
        if (this.node.logo !== newValue) {
          this.node.setLogo(newValue)
        }
        break
      case "logoIconName":
        if (this.node.logoIconName !== newValue) {
          this.node.setLogoIconName(newValue)
        }
        break
      case "programName":
        if (this.node.programName !== newValue) {
          this.node.setProgramName(newValue)
        }
        break
      case "systemInformation":
        if (this.node.systemInformation !== newValue) {
          this.node.setSystemInformation(newValue)
        }
        break
      case "translatorCredits":
        if (this.node.translatorCredits !== newValue) {
          this.node.setTranslatorCredits(newValue)
        }
        break
      case "version":
        if (this.node.version !== newValue) {
          this.node.setVersion(newValue)
        }
        break
      case "website":
        if (this.node.website !== newValue) {
          this.node.setWebsite(newValue)
        }
        break
      case "websiteLabel":
        if (this.node.websiteLabel !== newValue) {
          this.node.setWebsiteLabel(newValue)
        }
        break
      case "wrapLicense":
        if (this.node.wrapLicense !== newValue) {
          this.node.setWrapLicense(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onActivateLink":
        this.setHandler("activate-link", newValue)
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
    }
  }
}
