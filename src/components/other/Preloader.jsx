import React from "react"

export const PreLoader = React.memo(() => {
  return (
    <div className="preloader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
})