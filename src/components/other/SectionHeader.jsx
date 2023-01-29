import React from "react"

export const SectionHeader = ({section, title, darkTheme}) => {
  return (
    <div className="position-relative d-flex text-center mb-5">
      <h2 className={"text-24  text-uppercase fw-600 w-100 mb-0 " + (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")}>
        {section}
      </h2>
      <p className={"text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " + (darkTheme ? "text-white" : "text-dark")}>
        {title}
        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"/>
      </p>
    </div>
  )
}