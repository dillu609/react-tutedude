import React, { Component } from "react";

class ClassCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    if (this.state.count < 0) {
      this.setState({ count: 0 });
    }
    return (
      <div
        style={{
          float: "left",
          marginLeft: "30px",
          paddingLeft: "10px",
          borderLeft: "2px solid",
          width: "400px",
        }}
      >
        <h3>React Class increment</h3>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "20px", padding: "20px", fontSize: "30px" }}>
          {this.state.count}
        </span>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}

export default ClassCount;
