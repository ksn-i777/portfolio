import React from "react"
import { SectionHeader } from "./other/SectionHeader"

export const Skills = React.memo(({ headerTop, darkTheme, languageEN }) => {

  const skills = [
    {
      name: "React",
      descEN: "A JavaScript library for building user interfaces",
      descRU: "JavaScript-библиотека для создания пользовательских интерфейсов", 
      icon: "fab fa-react"
    },
    {
      name: "Redux",
      descEN: "A predictable state container for JavaScript applications",
      descRU: "Менеджер контроля состояний JavaScript-приложений",
      icon: "fa-solid fa-r"
    },
    {
      name: "TypeScript",
      descEN: "Is a strongly typed programming language that builds on JavaScript",
      descRU: "Cтрого типизированный язык программирования, основанный на JavaScript",
      icon: "fa-solid fa-t"
    },
    {
      name: "JavaScript",
      descEN: "A programming language for describing the behavior of elements on a page in a browser",
      descRU: "Язык программирования для описания поведения элементов на странице в браузере",
      icon: "fa-brands fa-square-js"
    },
    {
      name: "Rest API",
      descEN: "Interface for interacting with a software application for secure information exchange",
      descRU: "Интерфейс взаимодействия с программным приложением для безопасного обмена информацией",
      icon: "fa-solid fa-network-wired"
    },
    {
      name: "TDD",
      descEN: "Development of a software application through testing",
      descRU: "Разработка программного приложения через тестирование",
      icon: "fa-solid fa-list-check"
    },
    {
      name: "Storybook",
      descEN: "Environment for developing a library of UI components",
      descRU: "Окружение для разработки библиотеки UI компонент",
      icon: "fa-solid fa-s"
    },
    {
      name: "Git",
      descEN: "Application version control system",
      descRU: "Cистема управления версиями приложений",
      icon: "fa-brands fa-git-alt"
    },
    {
      name: "Material-UI",
      descEN: "Library of components for the user interface",
      descRU: "Библиотека компонент для пользовательского интерфейса",
      icon: "fas fa-pencil-ruler"
    },
    {
      name: "HTML/HTML5",
      descEN: "Document hypertext markup language for viewing web pages in a browser",
      descRU: "Язык гипертекстовой разметки документов для просмотра веб-страниц в браузере",
      icon: "fa-brands fa-html5"
    },
    {
      name: "CSS/CSS3",
      descEN: "Style description language for documents (web pages) in a browser",
      descRU: "Язык описания стилей документов (веб-страниц) в браузере",
      icon: "fa-brands fa-css3-alt"
    },
    {
      name: "SCSS/SASS",
      descEN: "A CSS-based metalanguage designed to simplify cascading style sheet files",
      descRU: "Метаязык на основе CSS, предназначенный для упрощения файлов каскадных таблиц стилей",
      icon: "fa-brands fa-sass"
    },
  ]

  return (
    <section id="skills" className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}>
      <div className={"container " + (headerTop ? "" : "px-lg-5")}>
        <SectionHeader
          darkTheme={darkTheme}
          section={languageEN ? "Skills" : "Навыки"}
          title={languageEN ? "What i can" : "Чем я владею"}
        />
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {skills.length > 0 &&
                skills.map((skill, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div className={"featured-box-icon text-primary  shadow-sm rounded " + (darkTheme ? "bg-dark-1" : "bg-white")}>
                        <i className={skill.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {skill.name}
                      </h3>
                      <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                        {languageEN ? skill.descEN : skill.descRU}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})