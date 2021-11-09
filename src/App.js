import React from "react";
import Form from "./Form";
import "./App.css";

// to change userInput you can use setState OR use this.setState.userInput.value
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form fun={this} />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;

/* STATE: what state do we need?
 * 1. the result - "Invalid input." || Number/sum/average/mode
 * 2. the operation - which operation are we doing?
 * 3. the values - which values are we working with? (contents of text input)
 */

/*
where do we put these?
the result - should live in App because it needs to put that state in result


*/
