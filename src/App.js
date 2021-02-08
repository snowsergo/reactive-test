import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Form from './components/Form/Form';
import FormData from './components/FormData/FormData';
import FormAgree from './components/FormAgree/FormAgree';
import Success from './components/Success/Success';
import user from './constants/user';

class App extends Component {
  state = {
    activeForm: 1,
    previuosForm: '',
    user: user,
    applicant: '',
    applicantData: '',
    isSucces: false,
  };

  confirm = () => {
    this.setState({
      isSuccess: true,
    });
    console.log(
      'Заявитель: ',
      this.state.applicant,
      'Данные пользователя: ',
      this.state.applicantData
    );
  };

  nextFormOpen = (value) => {
    this.setState({
      activeForm: value,
    });
  };

  setPreviousForm = (value) => {
    this.setState({
      previuosForm: value,
    });
  };

  setApplicantData = (applicantData) => {
    this.setState({
      applicantData,
    });
  };
  setApplicantName = (applicant) => {
    this.setState({
      applicant,
    });
  };

  render() {
    return (
      <Layout>
        <Header user={this.state.user}></Header>
        <main style={{ paddingBottom: '290px' }}>
          <Intro></Intro>
          <hr style={{ marginLeft: '160px', marginRight: '160px'}}/>

          {this.state.isSuccess ? (
            <Success title='Заявление принято'></Success>
          ) : (
            <div>
              <Form
                activeForm={this.state.activeForm}
                title='Выбор заявителя'
                user={this.state.user}
                number={1}
                nextFormOpen={this.nextFormOpen}
                setPreviousForm={this.setPreviousForm}
                previuosForm={this.state.previuosForm}
                setApplicantName={this.setApplicantName}
                applicant={this.state.applicant}
              ></Form>
              <FormData
                activeForm={this.state.activeForm}
                title='Данные пользователя'
                user={this.state.user}
                number={2}
                nextFormOpen={this.nextFormOpen}
                setPreviousForm={this.setPreviousForm}
                previousForm={this.state.previuosForm}
                setApplicantData={this.setApplicantData}
                applicantData={this.state.applicantData}
              ></FormData>
              <FormAgree
                activeForm={this.state.activeForm}
                onClose={this.allFormClosing}
                title='Согласие'
                number={3}
                onClick={this.confirm}
              ></FormAgree>
            </div>
          )}
        </main>
      </Layout>
    );
  }
}

export default App;
