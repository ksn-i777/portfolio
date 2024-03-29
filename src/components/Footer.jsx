import React from "react"

export const Footer = React.memo(({ headerTop, darkTheme, languageEN, handleNavClick }) => {
  return (
    <footer id="footer" className={(darkTheme ? "footer-dark bg-dark-2" : "bg-light")}>
      <div className={"container " + (headerTop ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">{languageEN ? "Copyright © 2023" : "Авторские права © 2023"}{" "}
              <a
                href="#main"
                className="fw-500"
                onClick={(e) => {e.preventDefault(); handleNavClick("main")}}
              >
                {languageEN ? "Serg Hmurovich" : "Хмурович Сергей"}
              </a>
              .
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <span className="nav-link">{languageEN ? "All Rights Reserved." : "Все права защищены."}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
})