import React from 'react';
import s from './Skill.module.css';
import {SkillType} from './../../../App'

export function Skill(props: SkillType) {
  return (
    <div className={s.skill}>
      <img className={s.img} src={props.img} alt="skill_img"/>
      <h3 className={s.title}>{props.title}</h3>
      <p className={s.description}>{props.description}</p>      
    </div>
  );
}