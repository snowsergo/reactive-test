import React from 'react';
import classes from './FormHeader.module.css';
import check from '../../icons/check.svg';

const FormHeader = (props) => {
  return (
    <div className={classes.FormHeader} onClick={props.onClick}>
      <div
        className={
          props.isOpen? classes.status: (props.isSaved ? classes.active :classes.inactive)
        }
      >
        {props.isSaved ? (
          <img height={32} src={check} alt='check' />
        ) : (
          props.number
        )}
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default FormHeader;
