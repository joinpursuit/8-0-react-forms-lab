import React from "react";
import "./Form.css";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			error: "",
			inputField: "",
			total: "",
			operation: "",
		};
	}

	//  When you click calculate
	handleFormSubmit = (e) => {
		const { operation, inputField } = this.state;
		e.preventDefault();

		let turningArray = this.state.inputField.split(","); // to a array
		let turningNumberArr = turningArray.map((i) => Number(i));
		console.log(turningNumberArr);

		console.log(inputField);

		// for the empty string
		if (inputField === "") {
			this.setState({
				error: "Invalid input.",
			});
		}

		//for not  a number
		if (inputField !== Number) {
			this.setState({
				error: "Invalid input.",
			});
		}

		// Sum
		if (operation === "sum") {
			this.setState({
				total: turningNumberArr.reduce((acc, curr) => {
					return acc + curr;
				}),
			});
		}

		// Average
		if (operation === "average") {
			this.setState({
				total:
					(turningNumberArr / turningNumberArr.length) *
					turningNumberArr.length,
			});
		}

		// Mode
		if (operation === "mode") {
			this.setState({
				total: this.state.total + 100,
			});
		}
		console.log(this.state.total);
	};

	// for the input field
	handleNumberInput = (e) => {
		this.setState({
			inputField: e.target.value,
		});
	};

	// for when we click some type of operation
	changeOperation = (e) => {
		console.log("it has changed ");
		this.setState({
			operation: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input
						id="values"
						name="values"
						// value={this.state.inputField}
						type="text"
						onChange={this.handleNumberInput}
					/>

					<select
						id="operation"
						name="operation"
						value={this.state.operation}
						onChange={this.changeOperation}
					>
						<option value=""></option>
						<option value="sum">sum</option>
						<option value="average">average</option>
						<option value="mode">mode</option>
					</select>

					<button type="submit">Calculate</button>
				</form>
				<div>{this.state.total}</div>

				<div>{this.state.error}</div>
				{/* <div>{this.state.inputField}</div> */}
			</div>
		);
	}
}

export default Form;
