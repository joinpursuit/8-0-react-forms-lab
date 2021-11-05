import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { result: '' };
    this.getResult = this.getResult.bind(this);
  }

  getResult(input) {
    this.setState({ result: input });
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form getResult={this.getResult} />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
