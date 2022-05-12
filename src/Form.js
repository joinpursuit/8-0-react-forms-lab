import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: [],
      operation: " ",
      result: " ",
    }
  }

  userInputHandle = (e) => {
    this.setState({
      userInput:
      e.target.value.split(",")
    })
  }

  operationHandle = (e) => {
    this.setState({
      operation:
      e.target.value,
    })
  }


  render() {
    const { result, userInput, operation } = this.state;
    return (
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
