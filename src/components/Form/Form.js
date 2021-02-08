import React, { Component } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import classes from './Form.module.css';

export default class Form extends Component {
  state = {
    isSaved: false,
    user: this.props.user,
    value: this.fullName(this.props.user),
  };

  toggleForm = () => {
    if (this.props.activeForm > this.props.number) {
      this.props.nextFormOpen(this.props.number);
      this.setState({
        value: this.props.applicant,
      });
    } else if (this.props.activeForm === this.props.number) {
      if (this.state.isSaved) {
        this.props.nextFormOpen(this.props.previuosForm);
      }
    }
  };

  onChange = (event) => {
    this.setState({ value: event.target.value });
    event.target.classList.add(classes.active);
  };

  fullName(user) {
    return user.surname + ' ' + user.name[0] + '. ' + user.patronymic[0] + '.';
  }

  submitHandler = (event) => {
    this.setState({
      isSaved: true,
    });
    event.preventDefault();
    this.props.setApplicantName(this.state.value);
    if (this.props.previuosForm) {
      this.props.nextFormOpen(this.props.previuosForm);
    } else {
      this.props.setPreviousForm(this.props.number + 1);
      this.props.nextFormOpen(this.props.number + 1);
    }
  };

  render() {
    const { value } = this.state;
    const name = this.fullName(this.state.user);
    const { company } = this.state.user;

    return (
      <div className={classes.Form}>
        <FormHeader
          number={this.props.number}
          isSaved={this.state.isSaved}
          isOpen={this.props.activeForm === this.props.number}
          title={this.props.title}
          onClick={this.toggleForm}
        />

        {this.props.activeForm === this.props.number ? (
          <form onSubmit={this.submitHandler}>
            <label
              className={value === name ? classes.active : classes.inactive}
              htmlFor='1'
            >
              <input
                type='radio'
                name='group1'
                id='1'
                value={name}
                checked={value === name}
                onChange={this.onChange}
              />
              <span></span>
              <div className={classes.text}>
                {name}
                <p>Физическое лицо</p>
              </div>
            </label>

            <label
              className={value === company ? classes.active : classes.inactive}
              htmlFor='2'
            >
              <input
                type='radio'
                name='group1'
                id='2'
                value={company}
                onChange={this.onChange}
                checked={value === company}
              />
              <span></span>
              <div className={classes.text}>
                {company}
                <p>Юридическое лицо</p>
              </div>
            </label>

            <button type='submit'>Продолжить</button>
          </form>
        ) : null}
      </div>
    );
  }
}
