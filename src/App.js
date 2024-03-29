import "./App.scss"
import React, { useEffect, useState, useCallback } from "react"
import { commonConfig } from "./config/commonConfig"
import { PreLoader } from "./components/other/Preloader"
import { HeaderTop } from "./components/HeaderTop"
import { HeaderLeft } from "./components/HeaderLeft"
import { Main } from "./components/Main"
import { AboutMe } from "./components/AboutMe"
import { Skills } from "./components/Skills"
import { Resume } from "./components/Resume"
import { Portfolio } from "./components/Portfolio"
import { Contacts } from "./components/Contacts"
import { Footer } from "./components/Footer"

import { Tooltip } from "./components/other/Tooltip"

export function App() {

  const headerTop = commonConfig.headerTop
  const [darkTheme, setDarkTheme] = useState(true)
  const [languageEN, setLanguageEN] = useState(true)

  const handleNavClick = useCallback((section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" })
  }, [])

  const [scrollTopVisible, setScrollTopVisible] = useState(false)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false)
    }, 1000)
    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [])

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top")
    if (scrollTopBtn) {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        setScrollTopVisible(true)
      } else {
        setScrollTopVisible(false)
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop)
  }

  return (
    <>
      <div style={{ position: "relative" }} className={headerTop ? "" : "side-header"}>

        {isLoading && <PreLoader/>}

        <div id="main-wrapper">

          {headerTop
            ? <HeaderTop languageEN={languageEN} setLanguageEN={setLanguageEN} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            : <HeaderLeft languageEN={languageEN}/>
          }

          <div id="content" role="main">
            <Main languageEN={languageEN} handleNavClick={handleNavClick}/>
            <AboutMe headerTop={headerTop} darkTheme={darkTheme} languageEN={languageEN}/>
            <Skills headerTop={headerTop} darkTheme={darkTheme} languageEN={languageEN}/>
            <Resume headerTop={headerTop} darkTheme={darkTheme} languageEN={languageEN}/>
            <Portfolio headerTop={headerTop} darkTheme={darkTheme} languageEN={languageEN}/>
            <Contacts headerTop={headerTop} darkTheme={darkTheme} languageEN={languageEN}/>
          </div>
          
          <Footer headerTop={headerTop} darkTheme={darkTheme} languageEN={languageEN} handleNavClick={handleNavClick}/>

        </div>

        {/* back to top */}
        <Tooltip text={languageEN ? "Back to top" : "Вернуться на главную"} placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
      </div>
    </>
  )
}