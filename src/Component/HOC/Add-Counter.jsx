import React from "react";

const IncrementCounter = (OrignalComponent, IncrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    increment = () => {
      let th = this;
      th.setState(preState => {
        return {
          count: preState.count + IncrementNumber
        };
      });
    };
    render() {
      return (
        <OrignalComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default IncrementCounter;
