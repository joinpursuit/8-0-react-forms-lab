import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input
          id="values"
          name="values"
          type="text"
          onChange={this.props.handleForm}
        />
        <select
          id="operation"
          name="operation"
          onChange={this.props.handleForm}
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
