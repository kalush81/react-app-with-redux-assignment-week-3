import React, { Component } from "react";

export default class ModelDetails extends Component {
  
  render() {
    return (
      <div>
        {this.props.computers.map(computer => (
          <ul key={computer.name}>
            <li>name: {computer.name}</li>
            <li>year: {computer.year}</li>
            <li>manufacturer: {computer.manufacturer}</li>
            <li>origin: {computer.origin}</li>
          </ul>
        ))}
      </div>
    );
  }
}
