import React, { useState } from "react"
import { Link } from "react-scroll"
import { LinkComponent } from "./other/LinkComponent"
import { TooltipComponent } from "./other/TooltipComponent"

export const HeaderLeft = ({ languageEN, handleNavClick }) => {

  const [isNavModalClose, setIsNavModalClose] = useState(true)
  
  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="main"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {e.preventDefault(); setIsNavModalClose(true)}}
          >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img title={languageEN ? "I'm Serg" : "Я Сергей"} src="images/profile.jpg" className="img-fluid rounded-pill d-block" alt="profile"/>
            </span>
            {languageEN
              ? <h1 className="text-5 text-white text-center mb-0 d-lg-block">Serg Hmurovich</h1>
              : <h1 className="text-5 text-white text-center mb-0 d-lg-block">Хмурович Сергей</h1>
            }
          </Link>
          {/* Logo End */}
          <div id="header-nav" className={isNavModalClose ? "collapse navbar-collapse w-100 my-lg-auto " : "show navbar-collapse w-100 my-lg-auto"}>
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              {languageEN
                ? <LinkComponent title="Main" to={'main'} setIsNavModalClose={setIsNavModalClose}/>
                : <LinkComponent title="Главная" to={'main'} setIsNavModalClose={setIsNavModalClose}/>
              }
              {languageEN
                ? <LinkComponent title="About" to={'about'} setIsNavModalClose={setIsNavModalClose}/>
                : <LinkComponent title="Обо мне" to={'about'} setIsNavModalClose={setIsNavModalClose}/>
              }
              {languageEN
                ? <LinkComponent title="Skills" to={'skills'} setIsNavModalClose={setIsNavModalClose}/>
                : <LinkComponent title="Навыки" to={'skills'} setIsNavModalClose={setIsNavModalClose}/>
              }
              {languageEN
                ? <LinkComponent title="Resume" to={'resume'} setIsNavModalClose={setIsNavModalClose}/>
                : <LinkComponent title="Резюме" to={'resume'} setIsNavModalClose={setIsNavModalClose}/>
              }
              {languageEN
                ? <LinkComponent title="Portfolio" to={'portfolio'} setIsNavModalClose={setIsNavModalClose}/>
                : <LinkComponent title="Портфолио" to={'portfolio'} setIsNavModalClose={setIsNavModalClose}/>
              }
              {languageEN
                ? <LinkComponent title="Contacts" to={'contacts'} setIsNavModalClose={setIsNavModalClose}/>
                : <LinkComponent title="Контакты" to={'contacts'} setIsNavModalClose={setIsNavModalClose}/>
              }
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            <TooltipComponent title={'linkedin'} href={"https://www.linkedin.com/in/ksn-i777/"} iClassname={"fa-brands fa-linkedin"}/>
            <TooltipComponent title={'github'} href={"https://github.com/ksn-i777"} iClassname={"fa-brands fa-github"}/>
            <TooltipComponent title={'codewars'} href={"https://www.codewars.com/users/ksn-i777"} iClassname={"fa-solid fa-code"}/>
          </ul>
          <button
            onClick={(e) => {setIsNavModalClose(!isNavModalClose)}}
            className={isNavModalClose ? "navbar-toggler" : "navbar-toggler show"}
            id="navbar-toggler"
            type="button"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>
    </header>
  )
}