import React from "react"

export const EducationExperience = React.memo(({ darkTheme, languageEN, titleEN, titleRU, details }) => {
  return (
    <div className="col-md-6">
      <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>{languageEN ? titleEN : titleRU}</h2>
      {
        details.length > 0 && details.map((value, index) => (
        <div key={index} className={"bg-white  rounded p-4 mb-4 " + (darkTheme ? "bg-dark" : "bg-white border")}>
          <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
          <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>{languageEN ? value.titleEN : value.titleRU}</h3>
          <p className={darkTheme ? "text-primary" : "text-danger"}>{languageEN ? value.placeEN : value.placeRU}</p>
          <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>{languageEN ? value.descEN : value.descRU}</p>
        </div>))
      }
    </div>
  )
})