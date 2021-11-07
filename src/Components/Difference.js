import React from "react"

export default class Difference extends React.Component {
    calSum = () => {
        return this.props.array.reduce((a, b) => a - b)
    }

    render(){
        return (
            <span>{this.calSum()}</span>
        )
    }
}