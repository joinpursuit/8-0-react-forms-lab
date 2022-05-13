import React from "react";
import Form from "./Form";
// import Calculations from "./Calculations";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form />
      </main>
    );
  }
}

export default App;