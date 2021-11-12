import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      operation: "",
      errorClass: ""
    } 
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    }) 
  }

  handleOperation = (event) => {
    this.setState({
      operation: event.target.value
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    function isInvalid (userInput) {
      // Return true if userInput is an empty string or not a number 
      // case 1: userInput is an "" === ""
      // case 2: userInput is a "a, b" => ["a", "b"] => Number("a") => Number.isNaN(NaN) === true

      if (userInput === "") {
        return true
      } 

      const isInvalid = () => {
        userInput.split(",").some((element) => {
          Number.isNaN(Number(element))
        })
      }
      
      if (isInvalid) {
        return true
      }
    }
      
    const {userInput} = this.state

    if (isInvalid(userInput)) {
      this.setState({
        errorClass: "error"
      })
      this.props.afterSubmit("Invalid input.")
    } else {
      this.setState({
        errorClass: ""
      })
    }

    if (this.state.operation === "sum") {
      this.props.afterSubmit(
        this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum))
      );
    }

    if (this.state.operation === "average") {
      this.props.afterSubmit(
        this.state.userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum)) / this.state.userInput.split(",").length 
      )
    }

    if (this.state.operation === "mode") {
      
      function mode (userInput) {
        //Group and count elements via object, transform to array, then sort to grab the element with the highest count

        const modeList = {};

        userInput.split(",").forEach((element) => {
          if (modeList[element]) {
            modeList[element]++
          } else {
            modeList[element] = 1;
          }
        });
        //> eg. 1,2,2,2,2,5,3 => {1:1, 2:4, 5:1, 3:1}
        
        const sortMode = Object.entries(modeList).sort(           (prevValue, currValue) =>  prevValue[1] - currValue[1] 
        ); 
        //> eg. [ [1,1], [2,4], [5,1], [3,1] ] => 
        //      [ [1,1], [5,1], [3,1], [2,4] ]

        return sortMode[sortMode.length - 1][0]; 
        //> [2,4] => 2 is the one with the highest count
      }
      
      const {userInput} = this.state

      this.props.afterSubmit(
        mode(userInput)
      )
    }
  }

  render() {
    return (
      <form>
        <input 
          id="values" 
          name="values" 
          type="text" 
          onChange={this.handleInput}
          className={this.state.errorClass}
        />
        <select 
          id="operation" 
          name="operation"
          onChange={this.handleOperation}
          className={this.state.errorClass}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button 
          type="submit"
          onClick={this.handleSubmit}
        >
          Calculate
        </button>
      </form>
    );
  }
}

export default Form;
