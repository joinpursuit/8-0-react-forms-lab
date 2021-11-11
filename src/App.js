import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      hasFormError: false,
    };
  }

  printResult = (result) => {
    this.setState({ result: result });
    //console.log(values)
  };
  render() {
    let error = "";
    if (this.state.hasFormError) {
      error = "Invalid input";
    }

    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          hasFormError={this.state.hasFormError}
          afterSubmit={this.printResult}
        />
        <section id="result">
          <p>{this.state.result}</p>
          <p>{error}</p>
        </section>
      </main>
    );
  }
}

export default App;
