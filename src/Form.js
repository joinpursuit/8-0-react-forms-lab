import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    const {
      input,
      operation,
      inputHandler,
      operationHandler,
      formSubmitHandler,
    } = this.props;
    return (
      <>
        <form onSubmit={formSubmitHandler}>
          <input
            onChange={inputHandler}
            id="values"
            name="values"
            type="text"
            value={input}
          />
          <select
            onChange={operationHandler}
            id="operation"
            name="operation"
            value={operation}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
      </>
    );
  }
}

export default Form;
