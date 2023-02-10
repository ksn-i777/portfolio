import React from "react"
import cvEN from "../documents/cvEN.pdf"
import cvRU from "../documents/cvRU.pdf"
import { SectionHeader } from "./other/SectionHeader"
import { AboutTextEN } from "./other/AboutTextEN"
import { AboutTextRU } from "./other/AboutTextRU"

export const AboutMe = React.memo(({ headerTop, darkTheme, languageEN }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (headerTop ? "" : "px-lg-5")}>
        <SectionHeader
          darkTheme={darkTheme}
          section={languageEN ? "About me" : "Обо мне"}
          title={languageEN ? "Know me better" : "Узнайте меня получше"}
        />
        <div className="row gy-5">
          {languageEN ? <AboutTextEN darkTheme={darkTheme}/> : <AboutTextRU darkTheme={darkTheme}/>}

          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className={"list-style-2 " + (darkTheme ? "list-style-light text-light" : "")}>
                <li>
                  <span className="fw-600 me-2">{languageEN ? "Name:" : "Имя:"}</span>
                  <span className="text-primary">{languageEN ? "Sergey Hmurovich" : "Сергей Хмурович"}</span>
                </li>
                <li>
                  <span className="fw-600 me-2">{languageEN ? "Email:" : "Электронная почта:"}</span>
                  <a href="mailto:ksn_i777@mail.ru">ksn_i777@mail.ru</a>
                </li>
                <li>
                  <span className="fw-600 me-2">{languageEN ? "Age:" : "Возраст:"}</span>
                  <span className="text-primary">31</span>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">{languageEN ? "From:" : "Проживание:"}</span>
                  <span className="text-primary">{languageEN ? "Minsk, Belarus" : "Минск, Беларусь"}</span>
                </li>
              </ul>
              <a href={languageEN ? cvEN : cvRU} download className="btn btn-primary rounded-pill">{languageEN ? "Download CV" : "Скачать резюме"}</a>
            </div>
          </div>
        </div>

        {/* projects rewards counting start */}
          {/* <div className={"brands-grid separator-border mt-5 " + (darkTheme ? "separator-border-light" : "")}>
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className={"text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")}><span>10</span>+</h4>
                  <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Years Experiance</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className={"text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")}><span>250</span>+</h4>
                  <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className={"text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")}><span>650</span>+</h4>
                  <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Projects Done</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className={"text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")}><span>38</span></h4>
                  <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Get Awards</p>
                </div>
              </div>
            </div>
          </div> */}
        {/* projects rewards counting end */}
        
      </div>
    </section>
  )
})