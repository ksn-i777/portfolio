import React, {useEffect, useState} from 'react'
import s from './MainSection.module.scss'

export function MainSection() {
  
  const [info, setInfo] = useState<string>('')
  
  return (
    <section id={'main'} className={s.main}>
      <div className={s.main_container}>
        <div className={s.texts_container}>
          <h3 className={s.greetings}>Доброго времени суток!</h3>
          <h1 className={s.introduction}>Я <span className={s.introduction_span}>{info}</span></h1>
          <p className={s.short_description}>Я начинающий front-end разработчик из г.Минск, Беларусь.<br/>
          Я стремлюсь создавать красивые, функциональные и ориентированные на пользователя веб-приложения с помощью тщательно разработанного кода.</p>          
        </div>
        <div className={s.btns_container}>
          <a href='#about' className={s.btn}><span>Обо мне</span></a>
          <a href='#portfolio' className={s.btn}><span>Портфолио</span></a>
          <a href='#contacts' className={s.btn}><span>Контакты</span></a>
        </div>
      </div>
    </section>
  );
}