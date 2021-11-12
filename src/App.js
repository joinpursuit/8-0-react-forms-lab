import React from "react";
import Form from "./Form";
import ResultSection from "./Result";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      hasFormError: false,
    };
  }

  printResult = (result) => {
    this.setState({ result: result })
  }

  render() {
    let error = "";
    if (this.state.hasFormError) {
      error = "Invalid Input"
    }

    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form hasFormError={this.state.hasFormError}
          afterSubmit={this.printResult}
        />

        <ResultSection result={this.state.result} />

      </main>
    );
  }
}



export default App;


/*
State
1. The redult - lives in the app
2. The operation - lives in the form
3.The values - lives in the form
*/

/*
Methods
  *Form
    *handles submission
      *prevent default
      *send the data somewhere
    * might looks for invalid input
    * might transform data
  * handler for user inout
  * handles for the dropdown
  *App
  *one calculate method that does the following three
  *3 methods that exist
    *sum
    *average
    *mode
*/


