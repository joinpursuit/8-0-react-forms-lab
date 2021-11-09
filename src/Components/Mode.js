import React from 'react'

export default class Mode extends React.Component {
    calMode = () => {
        const obj = this.props.array.reduce((obj, cVal) => {
            obj[cVal] = ++obj[cVal] || 1
            return obj
        }, {})

         return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)

    }
    render(){
        return this.calMode()
    }
}