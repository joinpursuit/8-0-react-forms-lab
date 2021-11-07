import React from "react";
import Form from "./Components/Form";
import Sum from "./Components/Sum"
import "./App.css";
import Average from "./Components/Average";


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
        case 'average':
          this.setState({result: <Average array={arr}/>})
        break;
        case 'mode':
          const obj = {}
          arr.forEach(el => obj[el] = ++obj[el] || 1)

          let mode;
          for(const key in obj){
            if(obj[key] > obj[mode] || !obj[mode]){
              mode = key
            }
          }
          this.setState({result: mode})
        break;
        default:
          this.setState({result: 'Invalid input.'})
      }
    }
  }


  render() {
    // console.log(this.state.result)
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
