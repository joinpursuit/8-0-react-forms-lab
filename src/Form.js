import React from 'react';
import './Form.css';

class Form extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { operation, values } = event.target;

    if (operation.value && values.value) {
      document.getElementById('values').setAttribute('class', '');
      document.getElementById('operation').setAttribute('class', '');

      const valueEqualsNumber = (val)  => !Number.isNaN(parseFloat(val));

      if (values.value.split(",").every(valueEqualsNumber)){
        this.sendResults(values.value, operation.value);
      } else {
        document.getElementById('values').setAttribute('class', 'error');
        document.getElementById('operation').setAttribute('class', 'error');
        document.getElementById('result').textContent = 'Invalid input.';
      }

    } else {
      document.getElementById('values').setAttribute('class', 'error');
      document.getElementById('operation').setAttribute('class', 'error');
      document.getElementById('result').textContent = 'Invalid input.';

    }
  };

  sendResults = (values, operation) => {
    const sumOfValues = values
      .split(',')
      .reduce((acc, num) => parseFloat(acc) + parseFloat(num));
    let sortedValues = values.split(',').sort((a, b) => a - b);
    let result = 0;

    if (operation === 'sum') {
      result = ( isNaN(sumOfValues) ? values.split(",") : sumOfValues)
     
    } else if (operation === 'average') {
      result = ( isNaN(sumOfValues) ? values.split(",") : (sumOfValues / values.split(',').length).toFixed(2));

    } else if (operation === 'mode') {
      let maxCount = 1;
      let mode = sortedValues[0];
      let count = 1;

      for (let idx = 1; idx < sortedValues.length; idx++) {
        if (sortedValues[idx] === sortedValues[idx - 1]) {
          count++;
        } else {
          count = 1;
        }
        if (count > maxCount) {
          maxCount = count;
          mode = sortedValues[idx - 1];
        }
      }
      result = mode;
    }
    document.getElementById('result').textContent = result;
    document.getElementById('form').reset();

  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} id="form">
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
