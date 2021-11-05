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

  handleForm = (event) => {
    this.setState({
      [event.target.name]: [event.target.value],
    });
    console.log(this.state);
  };

  calculator = (event) => {
    console.log('placeholder');
  };

  render() {
    const { values, operation, result } = this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleForm={this.handleForm} />
        <section id="result">
          <p>{values}</p>
        </section>
      </main>
    );
  }
}

export default App;
