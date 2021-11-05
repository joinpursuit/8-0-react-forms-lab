import React from "react";
import Form from "./Form";
import "./App.css";

let isInvalid = true
let modeList = []

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput:"",
      operation: "",
      result: ""
    }
  }

  handleInput = (event) => {
    //Set the userInput globally 
    this.setState({
      userInput: event.target.value
    })
      
    isInvalid = event.target.value === "" || event.target.value.split(",").some((element) => Number.isNaN(Number(element))) 
    // console.log(this.state.userInput)
    // console.log(isInvalid)
  }
  
  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value
    })
  }
  
  afterSubmit = (event) => {
    event.preventDefault();
    
    console.log(isInvalid)    
    if (isInvalid) {
      this.setState({
        result: "Invalid input."
      })
    } else {
      if (this.state.operation === "sum") {
        this.setState({
          result: this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum))
        })
      }
      if (this.state.operation === "average") {
        this.setState({
          result: this.state.userInput.split(",").length / this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum))
        })
      }
      if (this.state.operation === "mode") {
        this.state.userInput.split(",").forEach((element) => {
          modeList[element] = modeList[element] || 0 
          modeList[element] += 1
        })
        const newList = Object.entries(modeList)
        const mode = newList.reduce((prevValue, currValue) => {
          return (prevValue[1] - currValue[1] ? currValue[0] : prevValue[0])
        })

        this.setState({
          result: mode
        })
      }
    }
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form afterSubmit={this.afterSubmit} handleOperationChange={this.handleOperationChange} handleInput={this.handleInput} userInput={this.state.userInput} operation={this.state.operation} result={this.state.result}/>
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
