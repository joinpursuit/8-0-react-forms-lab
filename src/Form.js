import React from "react";
import Calculations from "./Calculations";
import "./Form.css";

class Form extends React.Component {
  constructor () {
    super ();
    this.state = {
      values: '',
      operation: '',
      isValidValues: false,
      isValidOperation: false,
      result: '',
    };
    // >> Binding
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // >> Validsations
    if (this.state.values === ''){
      this.setState({
        result: 'Invalid input.',
        isValidValues: false,
      }); 
    }
    else if (this.state.operation === ''){
      this.setState({
        result: 'Invalid input.',
        isValidOperation: false,
      });  
    } else {
      this.setState({
        result: <Calculations values={this.state.values} operation={this.state.operation} />,
      }); 
    }
    
    this.handleFormReset(this.state.isValidValues, this.state.isValidOperation);
  };

  handleTextChange = (event) => {
    const { value } = event.target;
    
    if (value !== ''){
      const arrOfValues = value.split(',').map(e => Number(e));
      this.setState({
        values: arrOfValues,
        isValidValues: true,
      });
    }
  }

  handleSelectChange = (event) => {
    const { value } = event.target;

    if (value !== ''){
      this.setState({
        operation: value,
        isValidOperation: true,
      });
    }
  }

  handleFormReset = (input, select) => {
    if(input && select){
      this.setState({
        values: '',
        operation: '',
      });
    }
  }

  render() {

    return (
      <>
        <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
          <input 
            id="values" 
            name="values"
            type="text"
            value={this.state.values}
            onChange={this.handleTextChange}
          />
          <select id="operation" name="operation" value={this.state.operation} onChange={this.handleSelectChange}>
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <section id="result">
          {console.log(this.state.result)}
        <p>{this.state.result}</p>
      </section>
    </>
    );
  }
}

export default Form;