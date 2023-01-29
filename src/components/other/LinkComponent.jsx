import React from "react"
import { Link } from "react-scroll"

export const LinkComponent = ({title, to, setIsNavModalClose}) => {
  return (
    <li className="nav-item">
      <Link
        smooth
        duration={500}
        style={{ cursor: "pointer" }}
        spy
        activeClass="active"
        className="nav-link"
        to={to}
        onClick={(e) => {e.preventDefault(); setIsNavModalClose(true)}}
      >
        {title}
      </Link>
    </li>
  )
}