import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return <button type="button" onClick={this.handleClick}>Click Me!</button>
    }
}