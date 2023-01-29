import React from "react"
import resumeFile from "../documents/resume.pdf"
import { SectionHeader } from "./other/SectionHeader"
import { EducationExperience } from "./other/EducationExperience"

export const Background = ({ headerTop, darkTheme, languageEN }) => {

  const educationDetails = [
    {
      yearRange: "2022 - 2023",
      titleEN: "Front-end developer",
      titleRU: "Front-end разработчик",
      placeEN: "IT-INCUBATOR, Minsk, Belarus",
      placeRU: "IT-INCUBATOR, Минск, Беларусь",
      descEN: "Obtaining education as an front-end developer",
      descRU: "Получение образования по специальности front-end разработчик",
    },
    {
      yearRange: "2009 - 2015",
      titleEN: "Nuclear and radiation safety engineer",
      titleRU: "Инженер по ядерной и радиационной безопасности",
      placeEN: "A.D.Sakharov ISEU, Minsk, Belarus",
      placeRU: "МГЭУ им.А.Д.Сахарова, Минск, Беларусь",
      descEN: "Obtaining higher education as an engineer in nuclear and radiation safety",
      descRU: "Получение высшего образования по специальности инженер по ядерной и радиационной безопасности",
    },
  ]

  const experienceDetails = [
    {
      yearRange: "11.2020 - 01.2023",
      titleEN: "Head of Technology Design Sector",
      titleRU: "Руководитель сектора проектирования технологий",
      placeEN: "ALC Vitalur",
      placeRU: "ОДО Виталюр",
      descEN: "Development, launch and growth of retail facilities",
      descRU: "Разработка, запуск и развитие торговых объектов",
    },
    {
      yearRange: "03.2019 - 10.2020",
      titleEN: "Head of the sector for the development, launch and development of retail facilities",
      titleRU: "Руководитель сектора разработки, запуска и развития торговых объектов",
      placeEN: "LLC Santa Retail",
      placeRU: "ООО Санта Ритейл",
      descEN: "Development, launch and growth of retail facilities",
      descRU: "Разработка, запуск и развитие торговых объектов. Согласование закупаемого оборудования",
    },
    {
      yearRange: "04.2018 - 02.2019",
      titleEN: "Design engineer",
      titleRU: "Инженер проектировщик",
      placeEN: "CJSC Dobronom",
      placeRU: "ЗАО Доброном",
      descEN: "Design of retail facilities",
      descRU: "Проектирование торговых объектов",
    },
    {
      yearRange: "03.2014 - 03.2018",
      titleEN: "Design engineer",
      titleRU: "Инженер проектировщик",
      placeEN: "LLC RAD-Protection",
      placeRU: "ООО РАД-Защита",
      descEN: "Design of medical and radiation facilities",
      descRU: "Проектирование медицинских и радиационных объектов",
    },
  ]

  /* const skills = [
    {name: "React", percent: 70},
    {name: "Redux", percent: 70},
    {name: "TypeScript", percent: 70},
    {name: "JavaScript", percent: 70},
    {name: "Rest API", percent: 70},
    {name: "TDD", percent: 70},
    {name: "Storybook", percent: 70},
    {name: "Git", percent: 70},
    {name: "Material-UI", percent: 70},
    {name: "HTML/HTML5", percent: 70},
    {name: "CSS/CSS3", percent: 70},
    {name: "SCSS/SASS", percent: 70},
  ] */

  return (
    <section id="resume" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (headerTop ? "" : "px-lg-5")}>

        {languageEN
          ? <SectionHeader darkTheme={darkTheme} section={"Resume"} title={"My background"}/>
          : <SectionHeader darkTheme={darkTheme} section={"Резюме"} title={"Образование и опыт"}/>
        }
        
        <div className="row gx-5">
          <EducationExperience
            darkTheme={darkTheme}
            languageEN={languageEN}
            titleEN={"My Education"}
            titleRU={"Образование"}
            details={educationDetails}
          />
          <EducationExperience
            darkTheme={darkTheme}
            languageEN={languageEN}
            titleEN={"My Experience"}
            titleRU={"Опыт работы"}
            details={experienceDetails}
          />
        </div>

        {/* My Skills start */}
          {/* {languageEN
            ? <h2 className={"text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")}>My Skills</h2>
            :<h2 className={"text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")}>Мои навыки</h2>
          }
          <div className="row gx-5">
            {
              skills.length > 0 && skills.map((skill, index) => (
                <div key={index} className="col-md-6">
                  <p className={" fw-500 text-start mb-2 " + (darkTheme ? "text-light" : "text-dark")}>
                    {skill.name}{" "}
                    <span className="float-end">{skill.percent}%</span>
                  </p>
                  <div className={"progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: skill.percent + "%" }}
                      aria-valuenow={skill.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              ))
            }
          </div> */}
        {/* My Skills end */}

        <div className="text-center mt-5">
          {languageEN
            ?
            <a className="btn btn-outline-secondary rounded-pill shadow-none" href={resumeFile} download>Download CV
              <span className="ms-1"><i className="fas fa-download" /></span>
            </a>
            :
            <a className="btn btn-outline-secondary rounded-pill shadow-none" href={resumeFile} download>Скачать резюме
              <span className="ms-1"><i className="fas fa-download" /></span>
            </a>
          }
        </div>
      </div>
    </section>
  )
}