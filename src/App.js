import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form />
        <section id="result">
          <p></p>
        </section>
      </main>
    );
  }
}

export default App;
/*
Form:
  handles submission
    prevent default
    send data
    input check
    transform data
  handle text input
  handle dropdown
app:
  one or multiple calculate methods
*/

/* to pass values up
app:
method = () => {}
<form afterSubmit={this.method}/> 
*/

/* to pass values up
form:
handleinput = (event) => {
  this.props.afterSubmit(event.target.value)
}
*/
