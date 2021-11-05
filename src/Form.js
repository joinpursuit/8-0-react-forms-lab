import React from "react";
import "./Form.css";

class Form extends React.Component {

  
  render() {
    return (
      <form onSubmit={this.props.fun.onUserSubmit}>
        <input id="values" name="values" type="text"/>
        <select id="operation" name="operation" onChange={(event)=>this.props.fun.state.operation = event.target.value}>
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
