import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {

constructor(){
  super()
  this.state ={
    userInput: "",
    result: 0,
    userSelectOption: '',
  }
}

handleCalculateSubmit=(event)=>{
  event.preventDefault()
 if(this.state.userSelectOption === "sum"){
   this.setState({
     result: this.handleSum(this.state.userInput),
     userInput: this.state.userInput
   })
   
  
 }
 else if(this.state.userSelectOption === "average"){
   this.setState({
    result: this.handleAverage(this.state.userInput),
    userInput: ""
   })
 }
 else if(this.state.userSelectOption === "mode"){
   this.setState({
     result: this.handleMode(this.state.userInput)
   })
 }
 else{
   this.setState({
     result: "Invalid input."
   })
 }


}

handleSelectChange=(event)=>{
  this.setState({
    userSelectOption: event.target.value
  })
}

handleUserInput = (e) => {
  let split = e.target.value.split(',').map((num)=>{
    return Number(num)
  })
  this.setState({
    userInput: split
  })
}

handleSum=(numArr)=>{ 
  let total = numArr.reduce((previousValue,currentValue)=> previousValue+currentValue)
  // this.setState({
  //   result: total
  // })
  return total
}

handleAverage=(numArr)=>{
  return this.handleSum(numArr)/numArr.length
}

handleMode=(arr)=>{
  const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
}

// put math here 

render() {

  // let total = this.state.userInput.reduce((previousValue,currentValue)=> previousValue+currentValue)
  // console.log(total)


// console.log(this.handleSum)
  return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form calculate={this.handleCalculateSubmit} 
        handleUserInput={this.handleUserInput} 
        userInput={this.state.userInput}
        handleSelectChange={this.handleSelectChange}
        />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
