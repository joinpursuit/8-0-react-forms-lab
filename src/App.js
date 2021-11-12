import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      result:0,
      mathOperation: "",
    }
  }

  handleUserInput = (e) => {
    this.setState({
      userInput:e.target.value ,
    });
  }

  handleSelectInput = (e) => {
    this.setState({
      mathOperation: e.target.value,
    });
  }

  calculator = () => {
    const {userInput, mathOperation} = this.state;
    let input = userInput.split(',').map((num)=>{
      return Number(num)
    })
    
    if(mathOperation === "sum"){
      this.setState({
        result: input.reduce((previousVal, currentVal) => previousVal + currentVal)
      })

    } else if (mathOperation === "average"){
      let sum = input.reduce((a,b)=> a+b);
      let average = sum/input.length;
        this.setState({
          result: average,
        })

    } else if (mathOperation === "mode"){
      let modes = [];
      let count = {};
      let number = 0;
      let mostInstances = 0;

      let numbers = input.slice(0)

      for (let i=0; i<numbers.length; i+=1){
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > mostInstances) {
          mostInstances = count[number];
        }
      }

      for(let i in count){
        if(count.hasOwnProperty(i)){
          if(count[i] === mostInstances){
            modes.push(Number(i));
          }
        }
      }
      this.setState({
        result:modes,
      })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {userInput, mathOperation} = this.state;
    this.calculator(mathOperation, userInput)
  }

  render() {

    return (
      <main>
      
        <p>Enter each number in the array, separated by a ','</p>
        
        <section id="result">
          <Form 
            handleFormSubmit={this.handleFormSubmit}
            handleUserInput={this.handleUserInput} 
            handleSelectInput={this.handleSelectInput} 
            userInput={this.state.userInput}
            mathOperation={this.state.mathOperation}
          />
          <p> {this.state.result} </p>
        </section>
      </main>
    );
  };
};

export default App;
