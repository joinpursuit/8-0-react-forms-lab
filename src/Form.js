import React from 'react';
import './Form.css';

export default class Form extends React.Component {
  static defaultProps = {
    ops: {
      sum: (arr) => arr.reduce((acc, cVal) => acc + Number(cVal), 0),
      average: (arr) =>
        arr.reduce((acc, cVal) => acc + Number(cVal), 0) / arr.length,
      mode: (arr) => {
        const hashMap = arr.reduce((acc, cVal) => {
          acc[cVal] = (acc[cVal] || 0) + 1;
          return acc;
        }, {});
        let mode;
        let highestCount = -Infinity;

        for (const prop in hashMap) {
          //if current map at key is greater than highestCount
          if (hashMap[prop] > highestCount) {
            mode = prop;
            highestCount = hashMap[prop];
          }
        }
        return mode;
      },
    },
  };
  constructor(props) {
    super(props);
    this.state = { operation: '', input: '', isValid: true };
    this.changeOperation = this.changeOperation.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const regex = /^[0-9]+(,[0-9]+)*$/;
    if (!regex.test(this.state.input)) {
      this.setState({ isValid: false });
      this.props.getResult('Invalid input.');
      return;
    }

    const result = this.props.ops[this.state.operation](
      this.state.input.split(',')
    );
    this.props.getResult(result);
    this.setState({ operation: '', input: '', isValid: true });
  }

  changeOperation(evt) {
    this.setState(() => {
      return { [evt.target.name]: evt.target.value };
    });
  }

  changeInput(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="values"
          className={!this.state.isValid ? 'error' : ''}
          name="input"
          type="text"
          onChange={this.changeInput}
          value={this.state.input}
        />
        <select
          id="operation"
          className={!this.state.isValid ? 'error' : ''}
          name="operation"
          onChange={this.changeOperation}
          value={this.state.operation}
        >
          <option value=""></option>
          <option value="sum" name="sum">
            sum
          </option>
          <option value="average" name="sum">
            average
          </option>
          <option value="mode" name="sum">
            mode
          </option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}
