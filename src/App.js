import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      result: '',
    }
  }

  calculate = (arr, operation) => {
    if(!arr.join('').length || arr.join('').match(/[^\d]/g)){
      this.setState({result: 'Invalid input.'})
    } else {
      switch(operation) {
        case 'sum':
          this.setState({result: arr.reduce((a, b) => a + b)})
        break;
        case 'average':
          this.setState({result: arr.reduce((a, b) => a + b)/arr.length})
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
