import { Tooltip as BsTooltip } from "bootstrap"
import React, { useEffect, useRef } from "react"

export const Tooltip = React.memo((p) => {
  
  const childRef = useRef(undefined)

  useEffect(() => {
    const t = new BsTooltip(childRef.current, {
      title: p.text,
      placement: p.placement,
      trigger: "hover",
    })
    return () => t.dispose()
  }, [p.text, p.placement])

  return React.cloneElement(p.children, { ref: childRef })
})