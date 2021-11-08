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
  }

  calculate = (arr, operation, isValid) => {
    if(!isValid){
      this.setState({result: 'Invalid input.'})
    } else {
      switch(operation) {
        case 'sum':
          this.setState({result: <Sum array={arr}/>})
        break;
        case 'difference':
          this.setState({result: <Difference array={arr}/>})
        break;
        case 'average':
          this.setState({result: <Average array={arr}/>})
        break;
        case 'mode':
          this.setState({result: <Mode array={arr}/>})
        break;
        default:
          this.setState({result: `${operation} is under construction..`})
        break;
      }
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
