import React from 'react';

export default class Input extends React.Component {
  state = {
    color: "0000ff"
  }

  test = () => {
    console.log(this.props.number);
    this.setState({color: Math.floor(Math.random()*16777215).toString(16)})
  }

  handleChange = (event) => {
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="number" style={this.generateStyle()}
            value={this.props.number} onChange={this.handleChange}/>
        <button onClick={this.test}>Click</button>
      </div>
    );
  }

  generateStyle = () => {
    return {
      color: "#" + this.state.color
    }
  }
}
