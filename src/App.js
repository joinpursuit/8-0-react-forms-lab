import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
constructor(){
  super()
  this.state = {
    displayResult: 0
  }
}

  handleResult = (calculation) => {
    this.setState({
      displayResult: calculation
    })
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleResult={this.handleResult} />
      </main>
    );
  }
}

export default App;
