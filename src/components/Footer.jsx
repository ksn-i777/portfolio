import React from "react"

export const Footer = ({ headerTop, darkTheme, languageEN, handleNavClick }) => {
  return (
    <footer id="footer" className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}>
      <div className={"container " + (headerTop ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">

            {languageEN
              ?
              <p className="mb-3 mb-lg-0">Copyright © 2023{" "}
                <a
                  href="#main"
                  className="fw-500"
                  onClick={(e) => {e.preventDefault(); handleNavClick("main")}}
                >
                  Serg Hmurovich
                </a>
                .
              </p>
              :
              <p className="mb-3 mb-lg-0">Авторские права © 2023{" "}
                <a
                  href="#main"
                  className="fw-500"
                  onClick={(e) => {e.preventDefault(); handleNavClick("main")}}
                >
                  Хмурович Сергей
                </a>
                .
              </p>
            }
          </div>

          <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                {languageEN
                  ? <a className="nav-link">All Rights Reserved.</a>
                  : <a className="nav-link">Все права защищены.</a>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}