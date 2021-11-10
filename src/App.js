import React from "react";
import "./App.css";
import Form from "./Form";
import ResultSection from "./ResultSection";

class App extends React.Component {
  //Set up constructor and state for parent component
  //Think about what each component receives and handles, then set up the props and methods in the components that handles them. Also consider using extra files to set up helper functions for sum, average, mode. 
  constructor() {
    super()
    this.state = {
      result: "",
    }
  }
  //Have the Form component call this function after submitting to update the STATE of result
  afterSubmit = (result) => {
    this.setState({
      result: result
    })
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form afterSubmit={this.afterSubmit} />
        <ResultSection result={this.state.result} />
      </main>
    );
  }
}

export default App;
