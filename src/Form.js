import React from "react";
import "./Form.css";

class Form extends React.Component { //use this.props for classes
  render() {
    // console.log(this.state.userInput)
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input id="values" name="values" type="text" onChange={this.handleInput}/> 
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
// onChange={this.handleOperation}

//line 8: whenever you're submitting, give the form the valued of handleSubmit

