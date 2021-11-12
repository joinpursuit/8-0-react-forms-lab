import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state ={
      userInputArray: [],
      sum: 0,
      average: 0,
      mode: 0
    }

  }
calculateAvg=(event)=>{

}
calculateMode=(event)=>{

}

handleInputArray=(event)=>{
    event.preventDefault();
    let {userInputArray} = this.state 

    this.setState({
      userInputArray: event.target.value
    })
    console.log(userInputArray)
  }
  calculateSum=(event)=>{
    let {userInputArray} = this.state 
    let reducer =(previousValue, currentValue)=> previousValue + currentValue;   
    let add =  userInputArray.reduce(reducer) 
    this.setState({
      sum: add   
    })
}


  render() {
    return (
      <form>
        <input id="values" name="values" type="text" value = {this.state.userInputArray} onChange={this.handleInputArray}/>
        <select id="operation" name="operation" value={this.state.sum} onChange={this.calculateSum}>
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
