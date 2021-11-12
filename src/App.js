import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      numStr: "",
      result: 0
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.handleCalculation();
  }

  handleOperation = (e) => {
    this.setState({
      operator: e.target.value,
    })
  }

  handleNumbers = (e) => {
    this.setState({
      numStr: e.target.value,
    })
  }

  handleCalculation = () => {
    let numArr = this.state.numStr.split(",").map((num)=> Number(num));
    switch (this.state.operator) {
      case "sum": this.setState({result: this.handleSum(numArr)}); break;
      case "average": this.setState({result: this.handleAvg(numArr)}); break;
      case "mode": this.setState({result: this.handleMode(numArr)}); break;
      default: this.setState({result: "Invalid input."});
    }
  }

  handleSum = (numbers) => {
    let total = 0;
    for(let num of numbers) {
      total += num;
    }
    return total;
  }

  handleAvg = (numbers) => {
    let total = this.handleSum(numbers);
    return total / numbers.length;
  }

  handleMode = (numbers) => {
    let obj = {};
    let largestValue = - 1;
    let largestKey = -1;
    for(let num of numbers) {
      if(obj[num]) obj[num] += 1;
      else obj[num] = 1;
    }
    Object.keys(obj).forEach(k => {
      let v = obj[k];
      if(v > largestValue) {
        largestValue = v;
        largestKey = k;
      }
    })
    return largestKey;
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleFormSubmit={this.handleFormSubmit} 
              handleOperation = {this.handleOperation} 
              operator = {this.state.operator}
              numbersArr = {this.state.numbersArr} 
              handleNumbers = {this.handleNumbers} 
        />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
