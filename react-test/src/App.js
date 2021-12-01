import React from 'react';

export default class App extends React.Component {
  state = {
    color: "red",
    size: 40
  }

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.setState({ color: "blue" });

    console.log(this.state.color);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p style={this.getStyle()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }

  getStyle() {
    return {
      color: this.state.color,
      fontSize: this.state.size +"px"
    }
  }
}
