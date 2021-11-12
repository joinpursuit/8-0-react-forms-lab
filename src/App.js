import {Component} from "react";
import Form from "./Form";
import "./App.css";
import ResultSection from "./ResultSection"

class App extends Component {
  constructor() {
    super()
    this.state = {
      result: ""
    }
  }

  afterSubmit = (result) => {
    this.setState({
      result: result
    })
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form 
          afterSubmit={this.afterSubmit}
        />
        <ResultSection 
          result={this.state.result}
        />
      </main>
    );
  }
}

export default App;
