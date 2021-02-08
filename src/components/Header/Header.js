import React from 'react';
import classes from './Header.module.css';
import emblem from '../../icons/emblem.svg';
import userIcon from '../../icons/user.svg';
const Header = (props) => {
  const user =
    props.user.surname +
    ' ' +
    props.user.name[0] +
    '. ' +
    props.user.patronymic[0] +
    '.';

  return (
    <div className={classes.Header}>
      <div className={classes.logo}>
        <img height={56} src={emblem} alt='emblem' />
        <p>Услуги и сервисы Пермского края</p>
      </div>

      <div className={classes.Auth}>
        <img height={20} src={userIcon} alt='user' />
        <p>{user}</p>
        <button>Выйти</button>{' '}
      </div>
    </div>
  );
};

export default Header;
