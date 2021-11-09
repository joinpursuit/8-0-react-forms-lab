import React from "react";
import "../Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      values: '',
      operation: '',
      className: ''
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    const valuesArr = this.state.values.split(',').map(Number)

    const { values, operation } = this.state

    if(!values.length || (/[^\d,]/g).test(values) || !operation.length){
      this.props.calculate([], "", false)
      this.setState({className: 'error'})
    } else{
      this.props.calculate(valuesArr, operation, true)
      this.setState({values: '', operation: '', className: ''})
      event.target.reset()
    }
  }


  onUserInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
        className={this.state.className} 
        placeholder="ex 1,2,3" id="values" 
        name="values" type="text" 
        onInput={this.onUserInputChange}
        />

        <select 
        id="operation" 
        name="operation" 
        className={this.state.className} 
        onChange={this.onUserInputChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="difference">difference</option>
          <option value="simplify">simplify</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
