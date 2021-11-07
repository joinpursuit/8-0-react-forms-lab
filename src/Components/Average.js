import React from "react";

export default class Average extends React.Component {

    calAverage = () => {
        const arr = this.props.array
        return arr.reduce((a, b) => a + b)/arr.length
    }
    
    render(){
        return <span>{this.calAverage()}</span>
    }
}