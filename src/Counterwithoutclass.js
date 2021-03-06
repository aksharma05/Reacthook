import React from 'react';

class Counterwithoutclass extends React.Component {
    state = { value: 0 };
  
    handleIncrement = () => {
      this.setState(prevState => ({
        value: prevState.value + 1
      }));
    };
  
    handleDecrement = () => {
      this.setState(prevState => ({
        value: prevState.value - 1
      }));
    };
  
    render() {
      return (
        <div>
          {this.state.value}
  
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      )
    }
  }

  export default Counterwithoutclass
