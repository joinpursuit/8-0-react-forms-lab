import React from "react";
import Form from "./Form";
import "./App.css";

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
        <Form app={this} />
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

/*
State - what State do we NEED
1. the result - "invalid input" || the result of sum/average/mode
-- should live in App because it needs to put that state in #result
2. the operation - which operation are we doing?
3. the values - which values are we working with? - aka the contents of the text input
-- should live in the form
*/

//*Methods - what things do we need to DO

//*Form:
//handles submission
//-prevent default behavior
//-send the data somewhere ... to App
//-might look for invalid input
//-might transform data into calculable form
//needs a handler for the text input
//needs a handler for the dropdown

//*App:
//-needs a calculated method or several
//-Sum
//-Average
//-Mode

//userInput has to be a string of numbers
//convert the userInput to an array
//perform the operation on the userInput
//depending on the operation we have to have methods for sum, mode, average
//operations are handle with onClick
//if userInput is invalid return error message "invalid input"
//result is handled with onSubmit
//return the result
