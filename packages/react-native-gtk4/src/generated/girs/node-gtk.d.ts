/* eslint-disable @typescript-eslint/triple-slash-reference */

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
import "./node-ambient.d.ts"

declare global {
  interface NodeGtkGi {
    startLoop(): void
    registerClass(object: any): void
    require(ns: string, ver?: string): any
  }
}

declare const gi: NodeGtkGi

export default gi
