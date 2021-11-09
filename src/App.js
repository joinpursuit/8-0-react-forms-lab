import React from "react";
import Form from "./Form";
import "./App.css";

//Set up global variable or a variable that can be accessed throughout the parent component 
//Can set it up like this or via STATE
let isInvalid = true

class App extends React.Component {
  //Set up constructor and state for parent component
  constructor() {
    super()
    this.state = {
      userInput:"",
      operation: "",
      result: "",
      errorClass: ""
    }
  }
  //set up methods to handle input, selection change and after submit button
  handleInput = (event) => {
    //Capture any changes in the input via STATE and check whether it's valid
    this.setState({
      userInput: event.target.value,
    })
    
    isInvalid = event.target.value === "" || event.target.value.split(",").some((element) => Number.isNaN(Number(element))) //> use .some to determine if some or any of the inputs are invalid or NaN
  }
  
  handleOperationChange = (event) => {
    //Capture any changes in selection or dropdown and save it in STATE
    this.setState({
      operation: event.target.value
    })
  }
  
  afterSubmit = (event) => {
    //Stop the page from automatically refreshing
    event.preventDefault();
    
    //Guard clause
    if (isInvalid) {
      this.setState({
        result: "Invalid input.",
        errorClass: "error"
      })
    } else {
      //update the calculation result based on operation and update STATE
      if (this.state.operation === "sum") {
        this.setState({
          result: this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum)),
          errorClass: ""
        })
      }
      if (this.state.operation === "average") {
        this.setState({
          result: this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum)) / this.state.userInput.split(",").length,
          errorClass: ""
        })
      }
      if (this.state.operation === "mode") {
        //Group and count elements via object, transform to array, then sort to grab the element with the highest count
        const modeList = {}
        this.state.userInput.split(",").forEach((element) => {
          modeList[element] = (modeList[element] || 0) + 1 //> eg. 1,2,2,2,2,5,3 => {1:1, 2:4, 5:1, 3:1}
        })
        const sortMode = Object.entries(modeList).sort((prevValue, currValue) => prevValue[1]-currValue[1]) //> eg. [ [1,1], [2,4], [5,1], [3,1] ] => [ [1,1], [5,1], [3,1], [2,4] ]
        const mode = sortMode[sortMode.length-1][0] //> [2,4] => 2 is the one with the highest count
  
        this.setState({
          result: mode,
          errorClass: ""
        })
      }
      //After determining valid input and calculation, access the parentNode to reset the form tag to clear both input and selection tags
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
