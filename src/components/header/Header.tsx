import React from 'react';
import s from './Header.module.scss';

export function Header() {
  return (
    <header id={'header'} className={s.header}>
      <nav className={s.nav}>
        <a className={s.link} href="#main">На главную</a>
        <a className={s.link} href="#about">Обо мне</a>
        <a className={s.link} href="#portfolio">Портфолио</a>
        <a className={s.link} href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}