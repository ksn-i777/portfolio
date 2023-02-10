import React, { useEffect, useRef, useState } from "react"
import Isotope from "isotope-layout"
import { ProjectDetailsModal } from "./ProjectDetailsModal"
import { SectionHeader } from "./other/SectionHeader"

export const Portfolio = React.memo(({ headerTop, darkTheme, languageEN }) => {
  // init one ref to store the future isotope object
  const isotope = useRef()
  // store the filter keyword in a state
  const filterKey = "*"
  const [imagesLoaded, setimagesLoaded] = useState(0)
  const [selectedProjectDetails, setSelectedProjectDetails] = useState()

  const projectsData = [
    {
      titleEN: "Expecting:)",
      titleRU: "Ожидается:)",
      projectInfoEN: "",
      projectInfoRU: "",
      technologies: "",
      url: {
        name: "",
        link: "",
      },
      thumbImage: "images/projects/expecting.jpg",
      sliderImages: [],
    },
    {
      titleEN: "Cards",
      titleRU: "Карточки",
      projectInfoEN: "Word learning application",
      projectInfoRU: "Приложение для изучения слов",
      technologies: "React, Redux Toolkit, TS, Axios, Formik, MUI, SASS",
      url: {
        name: "cards",
        link: "",
      },
      thumbImage: "images/projects/cards.jpg",
      sliderImages: [],
    },
    {
      titleEN: "Todolist",
      titleRU: "Тудулист",
      projectInfoEN: "Task manager",
      projectInfoRU: "Менеджер списка дел",
      technologies: "React, Redux Toolkit, TS, Axios, Formik, MUI, TDD",
      url: {
        name: "todolist",
        link: "",
      },
      thumbImage: "images/projects/todolist.jpg",
      sliderImages: [],
    },
    {
      titleEN: "Social network",
      titleRU: "Социальная сеть",
      projectInfoEN: "Online platform for dating, communication, creating social relationships between people",
      projectInfoRU: "Онлайн платформа для знакомств, общения, создания социальных отношений между людьми",
      technologies: "React, Redux, TS, Axios, Redux-form",
      url: {
        name: "social network",
        link: "https://ksn-i777.github.io/social-network/#/profile/26782",
      },
      thumbImage: "images/projects/socialnetwork.jpg",
      sliderImages: [],
    },
  ]

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    })

    // cleanup
    return () => {
      isotope.current.destroy()
    }
  }, [])

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` })
    }
  }, [filterKey, imagesLoaded])

  return (
    <>
      <section id="portfolio" className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}>
        <div className={"container " + (headerTop ? "" : "px-lg-5")}>
          <SectionHeader
            darkTheme={darkTheme}
            section={languageEN ? "Portfolio" : "Портфолио"}
            title={languageEN ? "My works" : "Мои работы"}
          />
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 && projectsData.map((project, index) => (
                <div className={"col-sm-6 col-lg-6 filter-item"} key={index}>
                  <div className="portfolio-box rounded">
                    <div className="portfolio-img rounded">
                      <img
                        onLoad={() => {setimagesLoaded(imagesLoaded + 1)}}
                        className="img-fluid d-block portfolio-image"
                        src={project.thumbImage}
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="popup-ajax stretched-link"
                          href=" "
                          onClick={() => {setSelectedProjectDetails(projectsData[index])}}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        > </a>
                        <div className="portfolio-overlay-details">
                          <h5 className="text-white fw-400">{languageEN ? project.titleEN : project.titleRU}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal projectDetails={selectedProjectDetails} darkTheme={darkTheme} languageEN={languageEN}/>
      </div>
    </>
  )
})