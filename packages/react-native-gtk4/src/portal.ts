import { ReactPortal } from "react"
import { useApplication } from "./hooks.js"
import { PRIVATE_CONTAINER_KEY } from "./components/ApplicationProvider.js"

export const REACT_PORTAL_TYPE = Symbol.for("react.portal")

function createPortalImpl(
  children: React.ReactNode,
  containerInfo: any,
  implementation: any,
  key = null
): ReactPortal {
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : "" + key,
    children,
    containerInfo,
    implementation,
  } as unknown as ReactPortal
}

export function createPortal(
  children: React.ReactNode,
  key = null
): ReactPortal {
  return createPortalImpl(
    children,
    useApplication()[PRIVATE_CONTAINER_KEY],
    null,
    key
  )
}
