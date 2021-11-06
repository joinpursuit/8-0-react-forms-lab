import React from "react";
import Form from "./Form";
import "./App.css";

let isInvalid = true
const modeList = []

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput:"",
      operation: "",
      result: "",
      errorClass: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value,
    })
      
    isInvalid = event.target.value === "" || event.target.value.split(",").some((element) => Number.isNaN(Number(element))) 
  }
  
  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value
    })
  }
  
  afterSubmit = (event) => {
    event.preventDefault();
    
    if (isInvalid) {
      this.setState({
        result: "Invalid input.",
        errorClass: "error"
      })
    } else {
      if (this.state.operation === "sum") {
        this.setState({
          result: this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum)),
          errorClass: ""
        })
      }
      if (this.state.operation === "average") {
        this.setState({
          result: this.state.userInput.split(",").length / this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum)),
          errorClass: ""
        })
      }
      if (this.state.operation === "mode") {
        this.state.userInput.split(",").forEach((element) => {
          modeList[element] = (modeList[element] || 0) + 1 
        })
        const mode = Object.entries(modeList).reduce((prevValue, currValue) => {
          return (prevValue[1] - currValue[1] ? currValue[0] : prevValue[0])
        })

        this.setState({
          result: mode,
          errorClass: ""
        })
      }
      event.target.parentNode.reset();
    }
  }

  render() {
    const { userInput, result, errorClass } = this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form afterSubmit={this.afterSubmit} handleOperationChange={this.handleOperationChange} handleInput={this.handleInput} userInput={userInput} errorClass={errorClass} />
        <section id="result">
          <p>{result}</p>
        </section>
      </main>
    );
  }
}

export default App;
