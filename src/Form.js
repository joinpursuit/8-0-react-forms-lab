import React from 'react';
import './Form.css';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			numArr: '',
			result: '',
			operation: '',
			error: '',
		};
	}

	handleSubmit = (event) => {
		const { operation, numArr } = this.state;
		event.preventDefault();

		let thisNumArr = this.state.numArr.split(',').map((e) => Number(e));

		if (numArr === '' || numArr !== Number) {
			this.setState({
				error: 'Invalid input.',
			});
		}

		switch (operation) {
			case 'sum':
				if (operation === 'sum') {
					this.setState({
						error: '',
						result: thisNumArr.reduce((a, b) => {
							return a + b;
						}),
					});
				}
				break;

			case 'average':
				if (operation === 'average') {
					this.setState({
						error: '',
						result: thisNumArr.reduce((a, b) => a + b) / thisNumArr.length,
					});
				}
				break;

			case 'mode':
				if (operation === 'mode') {
					const mode = (a) =>
						Object.values(
							thisNumArr.reduce((count, element) => {
								if (!(element in count)) {
									count[element] = [0, element];
								}
								count[element][0]++;
								return count;
							}, {})
						).reduce((a, c) => (c[0] < a[0] ? a : c), [0, null])[1];
					this.setState({
						error: '',
						result: mode(thisNumArr),
					});
				}
				break;
			default:
				this.setState({
					result: 'Invalid input.',
				});
		}
	};

	handleNumbers = (event) => {
		console.log('Solved!');
		this.setState({
			numArr: event.target.value,
		});
	};

	handleSelectedOperation = (event) => {
		this.setState({
			operation: event.target.value,
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					id='values'
					name='values'
					type='text'
					onChange={this.handleNumbers}
				/>
				<select
					id='operation'
					name='operation'
					value={this.state.operation}
					onChange={this.handleSelectedOperation}
				>
					<option value=''></option>
					<option value='sum'>sum</option>
					<option value='average'>average</option>
					<option value='mode'>mode</option>
				</select>
				<button type='submit'>Calculate</button>
			</form>
		);
	}
}

export default Form;
