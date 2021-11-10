import React from "react";
import "./Form.css";

// -------------Helper Functions-------------
const isInvalid = require("./isInvalid");
const sum = require("./sumOperation");
const average = require("./averageOperation");
const mode = require("./modeOperation");

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput:"",
      operation: "",
      errorClass: ""
    }
  }
  
  //set up methods to handle input, selection change and after submit button
  handleInput = (event) => {
    //Capture any changes in the input via STATE and check whether it's valid
    this.setState({
      userInput: event.target.value,
    })
  }
  
  handleOperationChange = (event) => {
    //Capture any changes in selection or dropdown and save it in STATE
    this.setState({
      operation: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    //Stop the page from automatically refreshing
    event.preventDefault();
    
    //Guard clause if input is invalid
    if (isInvalid(this.state.userInput)) {
      this.setState({
        errorClass: "error"
      })
      this.props.afterSubmit("Invalid input.")
    } else {
      //update STATE errorClass if operation is used and access prop that calls the App method to update result based on operation
      this.setState({
        errorClass: ""
      })
      switch (this.state.operation) {      
        case "sum" :
          this.props.afterSubmit(sum(this.state.userInput));
          break;
        case "average" :
          this.props.afterSubmit(average(this.state.userInput));
          break;
        case "mode" : 
          this.props.afterSubmit(mode(this.state.userInput));
          break;
        default: 
          //update STATE errorClass if no operation selected 
          this.setState({
            errorClass: "error"
          });
          this.props.afterSubmit("Invalid input.")
      }
      //After determining valid input and calculation, access the parentNode to reset the form tag to clear both input and selection tags 
      //OR manually clear the values via STATE using tag names and values to set the STATE
      event.target.parentNode.reset();
    }
  }

  render() {
    return (
      <form>
        <input onChange={this.handleInput} id="values" name="values" type="text" className={this.state.errorClass} />
        <select onChange={this.handleOperationChange} id="operation" name="operation" className={this.state.errorClass} >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={this.handleSubmit} type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
