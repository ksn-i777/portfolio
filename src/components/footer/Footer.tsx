import React from 'react';
import s from './Footer.module.css';

export function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <h2 className={s.h2}>Сергей</h2>
        <div className={s.social}>
          <a href="#">К1</a>
          <a href="#">К2</a>
          <a href="#">К3</a>
          <a href="#">К4</a>
        </div>
        <span className={s.span}>Все права защищены</span>
      </div>           
    </div>
  );
}