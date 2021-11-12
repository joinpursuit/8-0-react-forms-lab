import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput: [],
      operation: "",
      result: "",
    }
  }

  handleClick = (event) => {
    const { operation, userInput } = this.state
    event.preventDefault();
    switch (operation) {
      case "sum":
        this.handleSumChange(userInput);
        break;
      case "average":
        this.handleAvgChange(userInput);
        break;
      case "mode":
        this.handleModeChange(userInput);
        break;
      default:
        this.handleDefault();
    }
  }

  handleUserInput = (event) => {
    const numsInput = event.target.value.split(",").map((el) => {
      return el;
    })
    this.setState({
      userInput: numsInput,
    });
  }

  handleOperationChange = (event) => {
    const selectedOperator = event.target.value
    this.setState({
      operation: selectedOperator
    })
  }

  handleDefault = () =>{
    this.setState({
      result: "Invalid input.",
    })
}

  handleSumChange = (elArr) =>{
    const numsInput = elArr.reduce((current, previous) => Number(current) + Number(previous))
      this.setState({
        result: numsInput
      })
  }

  handleAvgChange = (elArr) =>{
    const numsInput = elArr.reduce((current, previous) => Number(current) + Number(previous)) / elArr.length
      this.setState({
        result: numsInput,
      })
  }

  handleModeChange = (elArr) =>{

    let obj = {};
    let mode = 1;
    let number = elArr;
    for(let num of number){
      if(!obj[num]){
        obj[num] = 1;
      }else{
        obj[num] += 1;
      }
    }

    for(let num in obj){
      if(obj[num] > mode){
        mode = num;
      }
    }

    this.setState({
      result: mode,
    });
  }

  render() {
    const { userInput, operation, result } = this.state;
    return ( 
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form  
        userInput={userInput} 
        handleUserInput={this.handleUserInput}
        handleClick={this.handleClick}
        operation={operation}
        handleOperationChange={this.handleOperationChange}
        />
        <section id="result">
          <p>{result}</p>
        </section>
      </main>
    );
  }
}

export default App;
