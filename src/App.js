import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: '',
      operation: '',
      result: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const valid = this.state.values.length
      ? this.state.values.split(',').every((e) => !isNaN(e))
      : false;

    if (valid) {
      event.target.reset();
      event.target.values.classList.remove('error');
      event.target.operation.classList.remove('error');
      this.calc();
    } else {
      event.target.values.className = 'error';
      event.target.operation.className = 'error';
      this.setState({
        result: 'Invalid input.',
      });
    }
  };

  handleForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calc = () => {
    const { values, operation } = this.state;
    let answer;
    switch (operation) {
      case 'sum':
        answer = values
          .split(',')
          .reduce((acc, val) => Number(acc) + Number(val));
        break;

      case 'average':
        answer =
          values.split(',').reduce((acc, val) => Number(acc) + Number(val)) /
          values.split(',').length;
        break;

      case 'mode':
        const acc = {};
        values
          .split(',')
          .forEach((curr) => (acc[curr] ? ++acc[curr] : (acc[curr] = 1)));
        console.log(acc);
        answer = Object.entries(acc).sort((a, b) => b[1] - a[1])[0][0];
        break;
    }
    this.setState({
      result: answer,
    });
  };

  render() {
    const { result } = this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleForm={this.handleForm} handleSubmit={this.handleSubmit} />
        <section id="result">
          <p>{result}</p>
        </section>
      </main>
    );
  }
}

export default App;
