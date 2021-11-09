import React from "react";
import Form from "./Form";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      error: "",
    };
  }
  afterSubmit = (submited, error) => {
    this.setState({
      result: submited,
      error: error,
    });
  };
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form afterSubmit={this.afterSubmit} />
        <section id="result">
          <p>{this.state.result}</p>
          <p>{this.state.error}</p>
        </section>
      </main>
    );
  }
}
export default App;
