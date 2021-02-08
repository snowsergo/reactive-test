import React, { Component } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import bell from '../../icons/bell.svg';
import classes from './FormAgree.module.css';

export default class Form extends Component {
  state = {
    isSaved: false,
    Agree1: false,
    Agree2: false,
  };

  submitHadler = (event) => {
    event.preventDefault();
    this.props.onClick();
  };

  onAgree = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
    event.target.classList.add(classes.active);
  };

  render() {
    const { Agree1, Agree2 } = this.state;

    return (
      <div className={classes.Form}>
        <FormHeader
          number={this.props.number}
          title={this.props.title}
          onClick={this.toggleForm}
          isSaved={this.state.isSaved}
          isOpen={this.props.activeForm === this.props.number}
        />
        {this.props.activeForm === this.props.number ? (
          <form onSubmit={this.submitHadler}>
            <p>Требуется ваше согласие по следующим пунктам:</p>
            <ul>
              <li>
                Я подтверждаю, что вся представленная информация является
                достоверной и точной;
              </li>
              <li>
                Я несу ответственность в соответствии с действующим
                законодательством Российской Федерации за предоставление
                заведомо ложных или неполных сведений;
              </li>
              <li>
                Я выражаю свое согласие на необходимое использование и обработку
                своих персональных данных, в том числе в информационных
                системах;
              </li>
              <li>Со сроками оказания государственной услуги ознакомлен.</li>
            </ul>
            <label className={Agree1 ? classes.active : classes.inactive}>
              <input
                className={classes.input}
                type='checkbox'
                name='Agree1'
                onChange={this.onAgree}
                checked={Agree1}
                required
              />
              <div className={classes.text}>
                <p>
                  Я подтверждаю свое согласие со всеми вышеперечисленными
                  пунктами
                </p>
              </div>
            </label>

            <label className={Agree2 ? classes.active : classes.inactive}>
              <input
                type='checkbox'
                name='Agree2'
                onChange={this.onAgree}
                checked={Agree2}
                required
              />
              <div className={classes.text}>
                <p>
                  Я уведомлен о том, что результат будет получен в электронном
                  виде
                </p>
              </div>
            </label>

            <div className={classes.caution}>
              <img height={20} src={bell} alt='bell' />
              <p>
                Пожалуйста, еще раз внимательно проверьте все данные перед
                отправкой
              </p>
            </div>

            <button type='submit'>Продолжить</button>

            <p className={classes.link}>
              Нажимая кнопку «Отправить», вы соглашаетесь с &nbsp;
              <a href='/#'>
                правилами хранения и обработки персональных данных
              </a>
            </p>
          </form>
        ) : null}
      </div>
    );
  }
}
