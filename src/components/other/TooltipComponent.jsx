import React from "react"
import { Tooltip } from "./Tooltip"

export const TooltipComponent = React.memo(({ title, href, iClassname }) => {
  return (
    <li className={`social-icons-${title}`}>
      <Tooltip text={title} placement="top">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <i className={iClassname} />
        </a>
      </Tooltip>
    </li>
  )
})