import React from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: "",
      operation: "",
      isSubmitted: false,
    };
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      values: value,
    });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    this.setState({
      operation: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
    });
  };

  render() {
    let { values, operation, isSubmitted } = this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          values={values}
          operation={operation}
          handleInputChange={this.handleInputChange}
          handleSelectChange={this.handleSelectChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <section id="result">
          <p>
            {isSubmitted && <Result values={values} operation={operation} />}
          </p>
        </section>
      </main>
    );
  }
}

export default App;
