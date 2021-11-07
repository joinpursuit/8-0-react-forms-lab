import React from 'react'

export default class Mode extends React.Component {
    calMode = () => {
        const obj = {}
        const arr = this.props.array
        arr.forEach(el => obj[el] = ++obj[el] || 1)

        let mode;
        for(const key in obj){
        if(obj[key] > obj[mode] || !obj[mode]){
            mode = key
        }
        }
        return mode

    }
    render(){
        return <span>{this.calMode()}</span>
    }
}