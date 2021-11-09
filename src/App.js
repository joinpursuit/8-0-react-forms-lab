import React from "react";
import Form from "./Components/Form";
import "./App.css";
import Sum from "./Components/Sum"
import Average from "./Components/Average";
import Mode from "./Components/Mode";
import Difference from "./Components/Difference";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      result: '',
    }
    this.components = {
      Sum,
      Average,
      Mode,
      Difference,
    }
  }

  calculate = (arr, operation, isValid) => {
    if(!isValid){
      this.setState({result: 'Invalid input.'})
    } else {
      const Component = this.components[operation[0].toUpperCase() + operation.slice(1)]
      this.setState({result: <Component array={arr}/>})
    }
  }


  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form calculate={this.calculate}/>
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
