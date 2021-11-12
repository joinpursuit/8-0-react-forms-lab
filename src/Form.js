import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      inputs: "",
      operation: "",
      calculation: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInputs = (event) => {

    this.setState({
      inputs: event.target.value
    });
  }

  handleOperations = (event) => {
    this.setState({
      operation: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="values" name="values" type="text" value={this.state.inputs} onChange={this.handleInputs} />
        <select id="operation" name="operation" onChange={this.handleOperations} >
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