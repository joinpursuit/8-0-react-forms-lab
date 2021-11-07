import React from "react";
import Form from "./Form"; //app is a parent of form
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      operation: '',
      result: '',
    };
  }
  //user input
  handleInput = (event) => {
    this.setState({
      userInput: event.target.value, //
    })
    
  }
  
  //add separate method to handle operations
  handleOperations= (event) => {
    this.setState({
      operation: event.target.value
    })
  }
  //form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const invalidInput = this.state.userInput === '' || this.state.userInput.split(",").some((element) => isNaN(element));
    //invalid input if the value is empty or if it's not a number...
    if (invalidInput) {
      this.setState({
        result: "Invalid input.",
      })
    } 
  };
  //checking for invalid inputs.//

  // handleOperations = (event) => {
  //   if(this.state.operation === 'sum') {
  //     this.setState({
  //       userInput: event.target.value,
  //       result: this.state.userInput.split(",").reduce((prevValue, currValue) => prevValue + currValue)
  //     })
  // //     this.state.userInput.reduce()
  // //   } else if (this.state.operation === 'average') {
  // //     this.setState({
  // //       // userInput: event.target.value,
  // //       // result: emojify(event.target.value),
  // //     })
  // //   } else if (this.state.operation === 'mode') {
  // //     this.setState({
  // //       userInput: event.target.value,
  // //       result: event.target.value,
  // //     })
  //   }
    
  // }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleInput={this.handleInput} handleOperations={this.handleOperations} handleSubmit={this.handleSubmit}/>
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}
//added props to form

export default App;
