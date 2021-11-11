import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      func: '',
      result: '',
    }
  }

  functionality = (e) => {
    this.setState({
      func: e.target.value
    })
  }

  userInput = (e) => {
    const numsInput = e.target.value.split(',')

    this.setState({
      userInput: numsInput,
    });
  }
  
  submit = (e) => {
    e.preventDefault();
    const { userInput, func } = this.state;
    if(func === ''){
      this.setState({
        result: 'Invalid input.',
      })
    
    }else if(func === 'sum'){
      this.setState({
        result: userInput.reduce((current, previous) => 
        Number(current) + Number(previous)),
        userInput: [],
        func: '',
      })
    
    }else if(func === 'average'){
      this.setState({
        result: userInput.reduce((current, previous) => 
        Number(current) + Number(previous)) / userInput.length,
        userInput: '',
        func: '',
      })
    
    }else if(func === 'mode'){
      let obj = {};
      let mode = 1;
      let number = userInput;
      
      for(let num of number){
        if(!obj[num]){
          obj[num] = 1;
        }else{
          obj[num] += 1;
        }
      }

      for(let num in obj){
        if(obj[num] > mode){
          mode = num;
        }
      }

      this.setState({
        result: mode,
        userInput: '',
        func: '',
      });
    }
  };

  render() {
    const { userInput, func, result } = this.state;
    return (
    <div>
    <form onSubmit={this.submit} className='form-container'>
      <input id='values' name='values' type='text' value={userInput} onChange={this.userInput} />
      <select id='func' name='func' value={func} onChange={this.functionality}>
        <option value=''></option>
        <option value='sum'>sum</option>
        <option value='average'>average</option>
        <option value='mode'>mode</option>
      </select>
      <button type='submit'>Calculate</button>
    </form>
    <p id='result'>{result}</p>
    </div>
    );
  }
}

export default Form;