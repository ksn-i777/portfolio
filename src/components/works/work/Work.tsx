import React from 'react';
import s from './Work.module.css';
import { WorkType } from './../../../App' 

export function Work(props: WorkType) {

  const backgroundImg = {
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${props.backgroundImg})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  return (
    <div className={s.work}>
      <div style={backgroundImg}>
        <button>Смотреть</button>
      </div>
      <p className={s.title}>{props.title}</p>
      <p className={s.description}>{props.description}</p>  
    </div>
  );
}