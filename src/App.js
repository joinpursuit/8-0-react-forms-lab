import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      userInput: "",
      feature: "",
      result: "",
    }
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  handleFeature = (event) => {
    this.setState ({
      feature: event.target.value,
    })
  }

  isValid = (event) => {
    event.preventDefault()

    const isValid = this.state.userInput != "" && this.state.userInput.split(",").every((each) => !isNaN(each))
    
    !isValid ?
      this.setState({
        result: "Invalid input."
      }) : this.cal()
  }

cal = (event) => {

 if (this.state.feature === "sum") {
   let sum = 0;
   let array = this.state.userInput.split(",")

    for (let i = 0; i < array.length; i++) {
    sum +=  Number(array[i]);
    }
   this.setState({
    result: sum,
  })
 }
  
 if (this.state.feature === "average") {
  let sum = 0;
  let array = this.state.userInput.split(",")

  for (let i = 0; i < array.length; i++) {
  sum +=  Number(array[i]) / array.length;
  }

  this.setState({
    result: sum,
  })
 }

 if (this.state.feature === "mode") {

  let obj = {};
  let array = this.state.userInput.split(",")

  array.forEach((each) => obj[each] ? obj[each] ++ : obj[each] = 1)
  console.log( Object.entries(obj))
  let answer = Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
   // [[1,2], [2,3], [3,4]]
    // [3,4] [2,3] [1,2]
  this.setState({
    result: answer,
  })
 }

}


  
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form 
        state = {this.state}
        isValid = {this.isValid}
        handleInput = {this.handleInput}
        cal = {this.cal}
        handleFeature = {this.handleFeature}
        />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
       
      </main>
    );
  }
}

export default App;
