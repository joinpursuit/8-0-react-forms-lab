import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: ""
    }
  }

  handleInput = (event) => {
    event.preventDefault();

    if (event.target.value === "") {
      this.setState({
        result: "Invalid input."
      })
    }
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleInput={this.handleInput} result={this.state.result}/>
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
