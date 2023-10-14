import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false
    };
  }

  timeSince(date) {
    let today = new Date();
    let otherDate = new Date(date);
    let difference = Math.abs(today - otherDate);

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let years = Math.floor(days / 365);

    return years;
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className='App'>
        <Form>
          <h1>Age Calculator</h1>
          <h4>Enter your date of birth</h4>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <div>
            <Button className='custom-button' onClick={() => this.changeBirthday()}>
              Calculate Age
            </Button>
          </div>
          {this.state.showStats ? (
            <div className='fade age-stats'>
              <h3>You are {this.timeSince(this.state.birthday)} years old</h3>
            </div>
          ) : (
            <div />
          )}
        </Form>
      </div>
    );
  }
}

export default App;
