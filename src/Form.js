import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput:"",
      mathOperation: "",
      array: [1,3,5,7,8,9,10,6]
    };
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  }

  handleSelectInput = (e) => {
    this.setState({
      mathOperation: e.target.value,
    });
  }

  isValid = () => {
   if(userInput === inValid){
     alert(`Invalid`)
   }
   //change userInput into a valid array array 
  }

  calculator = (math, array) => {
    const {userInput, mathOperation} = this.state;
    if(math === "sum" ){

      return array.reduce((previousVal, currentVal) => previousVal + currentVal);

    } else if (math === "average"){
        
      let sum = array.reduce((a,b)=> a+b);
      let average = sum/array.length;
      return average;

    } else if (math === "mode"){

      let modes = [];
      let count = {};
      let number = 0;
      let mostInstances = 0;

      let numbers = array.slice(0)

      for (i=0; i<numbers.length; i+=1){
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > mostInstances) {
          mostInstances = count[number];
        }
      }

      for(i in count){
        if(count.hasOwnProperty(i)){
          if(count[i] === mostInstances){
            modes.push(Number(i));
          }
        }
      }
      return modes;
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {userInput, mathOperation} = this.state;
    this.calculator((mathOperation, userInput))
    alert("form has been submitted")
  }

  render() {
    const {userInput, mathOperation} = this.state;
    console.log(this.calculator)
    console.log(userInput)
    return (
      <form onSubmit={this.handleFormSubmit}>

        <input 
          id="values" 
          name="values" 
          type="text" 
          value={userInput}
          onChange={this.handleUserInput}
        />

        <select id="operation" name="operation" value={mathOperation} onChange={this.handleSelectInput}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>

        <button type="submit">Calculate</button>

      </form>
    );
  }
}

export default Form;

    //mode of [1, 20, 3, 20, 4, 20] = [20]
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]