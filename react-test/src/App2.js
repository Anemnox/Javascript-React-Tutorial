import React from 'react';
import Input from './Input';
import Output from './Output';

export default class App2 extends React.Component {
  state = {
    num: 4
  }

  generateList = () => {
    let list = [];
    for (let i = 0; i < this.state.num; i++) {
      list.push("hello");
    }
    return list;
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <Input number={this.state.num} handleChange={this.handleChange} />
        <Output list={this.generateList()} />
      </div>
    );
  }

  handleChange = (number) => {
    if(number > 20 ) {
      number = 20;
    }
    if(number < 0) number = 0;
    this.setState({num: number});
  }
}
