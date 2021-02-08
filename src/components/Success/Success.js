import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import classes from './Success.module.css';

const Success = (props) => {
  return (
    <div className={classes.Form}>
      <FormHeader title={props.title} isSaved={true} isOpen={false} />

      <form>
        <p>
          Номер заявления <strong>RU-1234567</strong>. Максимальный срок
          предоставления услуги — 20 рабочих дней. Следите за статусом заявления
          в &nbsp; <a href='/#'>Личном кабинете</a>.
        </p>
        <p>
          Если у вас остались вопросы по оказанию услуги, пожалуйста,
          обращайтесь по телефону +7 (342) 123-45-67.
        </p>

        <div className={classes.buttons}>
          <button type='button'>Вернуться в каталог</button>
          <button type='button'>Перейти в личный кабинет</button>
        </div>
      </form>
    </div>
  );
};

export default Success;
