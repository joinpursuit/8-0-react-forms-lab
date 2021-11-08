import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
          <input 
          id="values" 
          name="values" 
          type="text"
          onChange={this.props.handleInput}
          />
          <select 
          id="operation" 
          name="operation"
          onChange={this.props.handleOperations}
          >
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
