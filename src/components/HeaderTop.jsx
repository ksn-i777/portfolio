import React from "react"
import { useState } from "react"
import { LinkComponent } from "./other/LinkComponent"
import { TooltipComponent } from "./other/TooltipComponent"

export const HeaderTop = React.memo(({ languageEN, setLanguageEN, darkTheme, setDarkTheme }) => {

  const [stickyHeader, setStickyHeader] = useState(false)
  const [isNavModalClose, setIsNavModalClose] = useState(true)

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu")
    if (header) {
      if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        setStickyHeader(true)
      } else {
        setStickyHeader(false)
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop)
  }

  return (
    <header id="header" className="sticky-top-slide">
      <nav className={"primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0 sticky-top " + (stickyHeader ? "sticky-on" : "")}>
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2 app-style-settings">
            <span className="setting-item" onClick={() => {setLanguageEN(!languageEN)}}>{languageEN ? 'EN' : 'РУ'}</span>
            <span className="setting-line">|</span>
            {languageEN
              ? <span className="setting-item" onClick={() => {setDarkTheme(!darkTheme)}}>{darkTheme ? 'DARK' : 'LIGHT'}</span>
              : <span className="setting-item" onClick={() => {setDarkTheme(!darkTheme)}}>{darkTheme ? 'ТЕМН' : 'СВЕТ'}</span>
            }
          </div>
          <div className="col col-lg-8 navbar-accordion settings">
            <button
              onClick={(e) => {setIsNavModalClose(!isNavModalClose)}}
              className={isNavModalClose ? "navbar-toggler ms-auto" : "navbar-toggler ms-auto show"}
              id="navbar-toggler"
              type="button"
            >
              <span/><span/><span/>
            </button>
            <div id="header-nav" className={isNavModalClose ? "collapse navbar-collapse justify-content-center " : "show navbar-collapse justify-content-center"}>
              <ul className="navbar-nav">
                <LinkComponent title={languageEN ? "Main" : "Главная"} to={'main'} setIsNavModalClose={setIsNavModalClose}/>
                <LinkComponent title={languageEN ? "About" : "Обо мне"} to={'about'} setIsNavModalClose={setIsNavModalClose}/>
                <LinkComponent title={languageEN ? "Skills" : "Навыки"} to={'skills'} setIsNavModalClose={setIsNavModalClose}/>
                <LinkComponent title={languageEN ? "Resume" : "Резюме"} to={'resume'} setIsNavModalClose={setIsNavModalClose}/>
                <LinkComponent title={languageEN ? "Portfolio" : "Портфолио"} to={'portfolio'} setIsNavModalClose={setIsNavModalClose}/>
                <LinkComponent title={languageEN ? "Contacts" : "Контакты"} to={'contacts'} setIsNavModalClose={setIsNavModalClose}/>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end">
            <ul className="social-icons social-icons-light">
              <TooltipComponent title={'linkedin'} href={"https://www.linkedin.com/in/ksn-i777/"} iClassname={"fa-brands fa-linkedin"}/>
              <TooltipComponent title={'github'} href={"https://github.com/ksn-i777"} iClassname={"fa-brands fa-github"}/>
              <TooltipComponent title={'codewars'} href={"https://www.codewars.com/users/ksn-i777"} iClassname={"fa-solid fa-code"}/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
})