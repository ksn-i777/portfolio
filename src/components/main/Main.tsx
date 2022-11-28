import React from 'react';
import s from './Main.module.css';

export function Main() {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <h1 className={s.h1}>Привет!<br/>Меня зовут Сергей.<br/>Я front-end разработчик.</h1>
        <img className={s.photo} src="#" alt="main_photo" />
      </div>
    </div>
  );
}