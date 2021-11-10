import React from "react";
import Form from "./Form";
import "./App.css";

/* Hierarchy */
//        App
//       Form

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      result: '',
    }
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form result={this.props.result}/>
        <section id="result">
          <p>Not this{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
