import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { MainSection } from './components/MainSection/MainSection'
/* 
import { Skills } from './components/skills/Skills'
import { Works } from './components/works/Works'
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer' */

export type SkillType = {
  id: string
  title: string
  description: string
  img: string
}
export type SkillsType = Array<SkillType>

export type WorkType = {
  id: string
  title: string
  description: string
  backgroundImg: string
  url: string
}
export type WorksType = Array<WorkType>

/* const skillsData:SkillsType = [
  {id: '1', title: 'Навык 1', description: 'Подробное описание навыка 1', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},
  {id: '2', title: 'Навык 2', description: 'Подробное описание навыка 2', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},
  {id: '3', title: 'Навык 3', description: 'Подробное описание навыка 3', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},
]
const worksData:WorksType = [
  {id: '1', title: 'Название проекта 1', description: 'Краткое описание проекта 1', backgroundImg: 'https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-image2.jpg', url: ''},
  {id: '2', title: 'Название проекта 2', description: 'Краткое описание проекта 2', backgroundImg: 'https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-image2.jpg', url: ''},
  {id: '3', title: 'Название проекта 3', description: 'Краткое описание проекта 3', backgroundImg: 'https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-image2.jpg', url: ''},
] */

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
      {/* 
      <Skills skillsData={skillsData}/>
      <Works worksData={worksData}/>
      <Contacts/>
      <Footer/> */}
    </div>
  );
}

export default App;
