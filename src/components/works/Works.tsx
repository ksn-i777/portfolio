import React from 'react';
import s from './Works.module.css';
import { WorkType } from './../../App';
import { Work } from './work/Work'

type WorksPropsType = {
  worksData: Array<WorkType>
}

export function Works(props: WorksPropsType) {

  const works = props.worksData.map(w => <Work key={w.id} id={w.id} title={w.title} description={w.description} backgroundImg={w.backgroundImg} url={w.url}/>)
  return (
    <div className={s.works}>
      <div className={s.container}>
        <h2 className={s.h2}>Мои работы</h2>
        <div className={s.worksBox}>{works}</div>        
      </div>           
    </div>
  );
}