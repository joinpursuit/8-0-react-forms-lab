import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: null,
      numbersArray: [],
      result: null,
    };
  }

  handleNumbersChange = (e) => {
    const { value } = e.target;
    this.setState({
      numbersArray: value.split(",").map((num) => {
        return parseInt(num);
      }),
    });
  };

  handleOperationChange = (e) => {
    const { value } = e.target;
    this.setState({
      operation: value,
    });
  };

  handleSubmit = (e) => {
    const { operation, numbersArray } = this.state;

    if (!numbersArray.includes(NaN)) {
      e.target.operation.value = "";
      e.target.values.value = "";
    }

    e.preventDefault();
    if (operation && numbersArray.length > 0) {
      if (operation === "sum") {
        let sumRes = numbersArray.reduce((acc, num) => acc + num, 0);

        this.setState({
          result: sumRes,
        });
      }

      if (operation === "average") {
        let avgRes =
          numbersArray.reduce((acc, num) => acc + num, 0) / numbersArray.length;

        this.setState({
          result: avgRes,
        });
      }

      if (operation === "mode") {
        const hashMap = {};
        numbersArray.forEach((num) => {
          if (!hashMap[num]) {
            hashMap[num] = 0;
          }
          hashMap[num] += 1;
        });

        let modeRes = Object.keys(hashMap).reduce((a, b) =>
          hashMap[a] >= hashMap[b] ? a : b
        );

        this.setState({
          result: modeRes,
        });
      }
    }
  };

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          handleSubmit={this.handleSubmit}
          handleOperation={this.handleOperationChange}
          handleNumbers={this.handleNumbersChange}
          errorClass={!this.state.result ? "error" : ""}
        />
        <section id="result">
          <p>{this.state.result ? this.state.result : "Invalid input."}</p>
        </section>
      </main>
    );
  }
}

export default App;
