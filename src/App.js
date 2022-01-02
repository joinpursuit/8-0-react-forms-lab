import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    input: "",
    error: "",
  };
} 

  numInput = ( entry, error ) => {
    this.setState({
    input: entry,
    error: error
  });
}

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form numInput= { this.numInput } />
        <section id="result">
        <p>{ this.state.input }</p>
        <p>{ this.state.error }</p>
        </section>
      </main>
    );
  }
}

export default App;
