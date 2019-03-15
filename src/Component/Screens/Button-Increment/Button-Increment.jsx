import React, { Component } from 'react';
import IncrementCounter from '../../HOC/Add-Counter';


class ButtonIncrement extends Component {
    render() {
        const { count, increment } = this.props;
        return (
            <div >
                <button onClick={increment} >User Button Increment Value {count} </button>
            </div>
        );
    }
}

export default IncrementCounter(ButtonIncrement, 5);