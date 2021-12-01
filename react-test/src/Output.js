import React from 'react';

export default class Output extends React.Component {
  
  componentDidMount() {

  }

  generateList = () => {
      return this.props.list.map((item, i) => {
      return (
        <li>{item}</li>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>This is a list</h2>
        <ul>
          {
            this.generateList()
          }
        </ul>
      </div>
    );
  }
}
