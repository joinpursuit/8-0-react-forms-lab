import React, { useState } from 'react';
import './Form.css';

function Form({ setResult }) {
	const [userInput, setUserInput] = useState('');
	const [select, setSelect] = useState('');

	function calculate() {
		const comma = userInput.split(',');
		console.log(comma);

		let num = 0;
    let obj = {}

		if (select === 'average') {
			num = comma.reduce((a, b) => Number(a) + Number(b)) / comma.length;
		}
		if (select === 'sum') {
			num = comma.reduce((a, b) => Number(a) + Number(b));
		}
		if (select === 'mode') {
			for (let i = 0; i < comma.length; i++) {
				if (obj[comma[i]]) {
					obj[comma[i]] += 1;
				} else {
					obj[comma[i]] = 1;
				}
			}
      let largerVal = -1;
		let largerKey = -1;

		Object.keys(obj).forEach((key) => {
			let value = obj[key];
			if (value > largerVal) {
				largerVal = value;
				largerKey = key;
			}
		});
		  return largerKey;
		}
      return num;
	}

  function calculated(e) {
    e.preventDefault();
    setResult(calculate())

  if(!userInput || !select) {
    setResult("Invalid input.")
  }
  }
	
	return (
		<form onSubmit={calculated}>
			<input
				id="values"
				name="values"
				type="text"
				onChange={(e) => setUserInput(e.target.value)}
				value={userInput}
			/>
			<select 
      id="operation" 
      name="operation"
      onChange={(e) => setSelect(e.target.value)}
      value={select} 
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

export default Form;
