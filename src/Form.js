import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      inputs: "",
      operation: "",
      calculation: "0"
    }
  }

  calcSum = (arr) => {
    let sum = 0;
    for(let num of arr){
      sum = sum + num;
    }
    return sum
  }

  calcMode = (arr) => {
    let countObj = {};
    for(let num of arr){
      if(countObj[num]){
        countObj[num]++;
      }else{
        countObj[num] = 1;
      }
    }
    let keys = Object.keys(countObj);
    let highestValue = 0;
    let highestKey;
    for(let key of keys){
      if(countObj[key] > highestValue){
        highestValue = countObj[key];
        highestKey = key;
      }
    }
    return highestKey
  }

  handleSubmit = (event) => {
    event.preventDefault();
   let numArr = this.state.inputs.split(",");  //turn input into array of string nums
    let allValid = numArr.every((num) => parseInt(num) && Number(num));  //check if every element is a valid number
    if (!allValid) {
      this.setState({
        calculation: "Invalid input.",
      });
    }else{
    let arr = this.state.inputs.split(",").map((str) => Number(str));
    let result = 0;
    switch (this.state.operation) {
      case "sum":
        result = this.calcSum(arr);
        console.log("sum", result);
        break;
      case "average":
        result = this.calcSum(arr) / arr.length;
        console.log("avg", result);
        break;
      case "mode":
        result = this.calcMode(arr);
        console.log("mode", result);
        break;
      default:
        break;
    }
    this.setState({
      calculation: result
    })}
  }

  handleInputs = (event) => {

    this.setState({
      inputs: event.target.value
    });
    console.log("changed input");
  }

  handleOperations = (event) => {
    this.setState({
      operation: event.target.value
    })
    console.log("changed operations");
  }

  // this.props.handleResult(calculation);

  render() {
    return (<>
      <form onSubmit={this.handleSubmit}>
        <input 
        id="values" 
        name="values" 
        type="text" 
        value={this.state.inputs} 
        onInput={this.handleInputs} />
        <select id="operation" name="operation" onChange={this.handleOperations} >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
      <p>{ this.state.calculation }</p>
    </section>
    </>
    );
  }
}
export default Form