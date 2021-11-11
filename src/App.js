import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      numStr: "",
      result: 0
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.handleCalculation();
  }

  handleOperation = (e) => {
    this.setState({
      operator: e.target.value,
    })
  }

  handleNumbers = (e) => {
    this.setState({
      numStr: e.target.value,
    })

    // let nums = e.target.value;
    // console.log(nums);
    // let numsSplit = nums.split(",");
    // let arr = [];
    // for(let num of numsSplit) {
    //   if(num !== "") {
    //     arr.push(Number(num));
    //   }
    // }
    // this.setState({
    //   numArr: arr,
    // })
    // console.log(this.state.numArr);
    // difference in last element with/without "," why?;
    // console.log(numsSplit); //shows last num w/o ",";
    // console.log(this.state.numArr); // doesn't show last num, need "," to show last num;

    
  }

  handleSum = (numbers) => {
    let total = 0;
    for(let num of numbers) {
      total += num;
    }
    return total;
  }

  handleCalculation = () => {
    let numArr = this.state.numStr.split(",").map((num)=> {
      return Number(num);  
    });
    console.log(numArr);

    if(this.state.operator === "sum") {
      console.log("trigger")
      this.setState({
        result: this.handleSum(numArr)
      })
    }
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleFormSubmit={this.handleFormSubmit} 
              handleOperation = {this.handleOperation} 
              operator = {this.state.operator}
              numbersArr = {this.state.numbersArr} 
              handleNumbers = {this.handleNumbers} 
              />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
