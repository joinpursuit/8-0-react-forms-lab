import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form state={this.state}/>
        {/* <section id="result">
          <p>{this.state.result}</p>
        </section> */}
      </main>
    );
  }
}

export default App;
