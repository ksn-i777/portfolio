import React from 'react';
import s from './Skills.module.css';
import {SkillType} from './../../App'
import { Skill } from './skill/Skill';

type SkillsPropsType = {
  skillsData: Array<SkillType>
}

export function Skills(props: SkillsPropsType) {

  const skills = props.skillsData.map(sk => <Skill key={sk.id} id={sk.id} title={sk.title} description={sk.description} img={sk.img}/>)

  return (
    <div className={s.skills}>
      <div className={s.container}>
        <h2 className={s.h2}>Мои скиллы</h2>
        <div className={s.skillsBox}>{skills}</div>        
      </div>           
    </div>
  );
}