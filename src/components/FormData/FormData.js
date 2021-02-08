import React, { Component } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import classes from './FormData.module.css';

export default class Form extends Component {
  state = {
    isSaved: false,
    user: this.props.user,
  };

  toggleForm = () => {
    if (
      this.props.activeForm > this.props.number ||
      (this.props.activeForm < this.props.number && this.state.isSaved)
    ) {
      this.props.nextFormOpen(this.props.number);
      this.setState({
        user: this.props.applicantData,
      });
    } else if (
      this.props.activeForm === this.props.number &&
      this.state.isSaved
    ) {
      this.props.nextFormOpen(this.props.previousForm);
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      isSaved: true,
    });
    this.props.setPreviousForm(this.props.number + 1);
    this.props.nextFormOpen(this.props.number + 1);
    this.props.setApplicantData(this.state.user);
  };

  changeHandler = (target) => {
    this.setState({
      user: { ...this.state.user, [target.name]: target.value },
    });
  };

  render() {
    return (
      <div className={classes.Form}>
        <FormHeader
          isSaved={this.state.isSaved}
          isOpen={this.props.activeForm === this.props.number}
          number={this.props.number}
          title={this.props.title}
          onClick={this.toggleForm}
        />

        {this.props.activeForm === this.props.number ? (
          <form onSubmit={this.submitHandler}>
            <label>Фамилия</label>
            <input
              name='surname'
              value={this.state.user.surname}
              onChange={(event) => this.changeHandler(event.target)}
              required
            ></input>
            <label>Имя</label>
            <input
              name='name'
              value={this.state.user.name}
              onChange={(event) => this.changeHandler(event.target)}
              required
            ></input>
            <label>Отчество</label>
            <input
              name='patronymic'
              value={this.state.user.patronymic}
              onChange={(event) => this.changeHandler(event.target)}
              required
            ></input>
            <label>Электронная почта</label>
            <input
              name='email'
              value={this.state.user.email}
              onChange={(event) => this.changeHandler(event.target)}
              required
            ></input>
            <label>Телефон</label>
            <input
              name='phone'
              value={this.state.user.phone}
              onChange={(event) => this.changeHandler(event.target)}
              required
            ></input>
            <p>Документ, удостоверяющий личность</p>
            <label>Документ</label>
            <input
              name='type'
              value={this.state.user.type}
              onChange={(event) => this.changeHandler(event.target)}
              required
            ></input>

            <div className={classes.serial}>
              <div>
                <label>Серия</label>
                <input
                  name='serial'
                  className={classes.subnumber}
                  value={this.state.user.serial}
                  onChange={(event) => this.changeHandler(event.target)}
                  required
                ></input>
              </div>
              <div>
                <label className={classes.number}>Номер</label>
                <input
                  name='number'
                  value={this.state.user.number}
                  onChange={(event) => this.changeHandler(event.target)}
                  required
                ></input>
              </div>
            </div>

            <label>Когда выдан</label>

            <div className={classes.date}>
              <div>
                <p>День</p>
                <input
                  name='day'
                  className={classes.day}
                  value={this.state.user.day}
                  onChange={(event) => this.changeHandler(event.target)}
                  required
                ></input>
              </div>
              <div>
                <p>Месяц</p>
                <input
                  className={classes.day}
                  name='month'
                  value={this.state.user.month}
                  onChange={(event) => this.changeHandler(event.target)}
                  required
                ></input>
              </div>
              <div>
                <p>Год</p>
                <input
                  name='year'
                  className={classes.year}
                  value={this.state.user.year}
                  onChange={(event) => this.changeHandler(event.target)}
                  required
                ></input>
              </div>
            </div>

            <button type='submit'>Продолжить</button>
          </form>
        ) : null}
      </div>
    );
  }
}
