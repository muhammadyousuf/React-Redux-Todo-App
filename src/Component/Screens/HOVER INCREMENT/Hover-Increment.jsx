import React, { Component } from 'react';
import IncrementCounter from '../../HOC/Add-Counter';


class HoverIncrement extends Component {
    render() {
        const { count, increment } = this.props;
        return (
            <div >
                <h1 onMouseOver={increment} >{this.props.name} Hover Increment {count}</h1>
            </div>
        );
    }
}

export default IncrementCounter(HoverIncrement, 10);