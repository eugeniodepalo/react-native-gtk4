import { GirModule as BaseGirModule } from "@ts-for-gir/lib"
import { GirClass } from "./class"
import { GirInterface } from "./interface"
import { Gir } from "@/gir"

export class GirModule {
  private _module: BaseGirModule
  private _gir: Gir
  private _classes?: GirClass[]
  private _interfaces?: GirInterface[]

  constructor(module: BaseGirModule, gir: Gir) {
    this._module = module
    this._gir = gir
  }

  init() {
    this._module.init({})
  }

  start() {
    this._module.start([])
  }

  get namespace() {
    return this._module.namespace
  }

  get importName() {
    return this._module.importName
  }

  get ns() {
    return this._module.ns
  }

  get classes() {
    return (this._classes ||= (this.ns.class || []).map(
      (c) => new GirClass(c, this._gir)
    ))
  }

  get interfaces() {
    return (this._interfaces ||= (this.ns.interface || []).map(
      (i) => new GirInterface(i, this._gir)
    ))
  }

  get enumerations() {
    return this.ns.enumeration || []
  }

  get bitfields() {
    return this.ns.bitfield || []
  }
}
