import React from 'react';
import s from './Contacts.module.css';

export function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.container}>
        <h2 className={s.h2}>Контакты</h2>
        <form className={s.form}>
          <input type="text" />
          <input type="text" />
          <textarea></textarea>
        </form>
      </div>           
    </div>
  );
}