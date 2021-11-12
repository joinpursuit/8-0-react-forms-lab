import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state ={
      input: "",
      operation: "",
    }
  }

  handleInputBox =(event)=> {
    this.setState ({
      input: event.target.value
    })
  }

  handleOperationChange =(event)=>{
    this.setState({
      operation: event.target.value
    })
  }

  calcSum =(arr)=>{
    let sum = 0;
    for(let num of arr){
      sum += num;
    }
    return sum;
  }

  calcMode = (arr) => {
    let countObj = {};
    for(let num of arr) {
      //countObj[num] = (countOjb[num] || 0) + 1;
      if(countObj[num]) {
        countObj[num] += 1;
      } else {
        countObj[num] = 1;
      }
    }

    let keys = Object.keys(countObj);
    let hightValue = 0;
    let hightestKey;
    for(let key of keys){
      if(countObj[key] > hightValue) {
        hightValue = countObj[key];
        hightestKey = key;
      }
    }
    return hightestKey;
  }
  
  handleValidation = (numArr) => {
    let flag = true;
    if(this.state.input=== ""){
      flag = false
    }
    for(let num of numArr) {
      if(isNaN(num)) {
        flag = false;
      }
    }
    return flag;
  }

  handleSubmit =(event)=>{
    event.preventDefault();
    let newArr = this.state.input.split(",");
    let numArr = newArr.map(str => Number(str));
    let isValid = this.handleValidation(numArr);

    if(this.state.operation === "") {
      this.props.handleChangeResult("Invalid operation.");
      return;
    }

    if(!isValid) {
      this.props.handleChangeResult("Invalid input.");
      return;
    }

    let result = 0;
    switch (this.state.operation) {
      case "sum":
        result = this.calcSum(numArr); 
        break;
      case "average":
        result = this.calcSum(numArr)/numArr.length;
      break;
      case "mode":
        result = this.calcMode(numArr)
      break;
    
      default:
        break;
    }
   this.props.handleChangeResult(result);
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="values" name="values" type="text" value={this.state.input} onInput={this.handleInputBox}/>
        <select id="operation" name="operation" value={this.state.operation} onChange={this.handleOperationChange}>
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
