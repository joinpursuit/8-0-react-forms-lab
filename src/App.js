import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0
    }
  }

  handleChangedResult= (result) => {
    this.setState({
      result: result
    })
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
       <br></br>
        <Form handleChangedResult={this.handleChangedResult}/>
        <section id="result">
          <p></p>
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
