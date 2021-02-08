import React from 'react';
import classes from './Intro.module.css';
import eagle from '../../icons/eagle.svg';
const Intro = () => {
  return (
    <div className={classes.Intro}>
      <div className={classes.text}>
        <h1>Выдача градостроительного плана земельного участка</h1>
        <p>
          Градостроительный план земельного участка выдается в целях обеспечения
          субъектов градостроительной деятельности информацией, необходимой для
          архитектурно-строительного проектирования, строительства,
          реконструкции объектов капитального строительства в границах
          земельного участка.
        </p>
      </div>
      <div className={classes.label}>
        <img height={64} src={eagle} alt='eafle' />
        <h2>Услугу предоставляет</h2>
        <p>Орган местного самоуправления</p>
      </div>
    </div>
  );
};

export default Intro;
