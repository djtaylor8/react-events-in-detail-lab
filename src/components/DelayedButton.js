import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleDelayedClick = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return <button type="button" onClick={this.handleDelayedClick}>Delayed click</button>
    }
}