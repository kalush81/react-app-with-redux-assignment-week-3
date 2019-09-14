import React, { Component } from "react";

export default class Form extends Component {
  render() {
    //console.log("I should be data object from store =>", this.props.computers);
    return (
      <form>
        <select onChange={(event) => {this.props.updateSelection(event.currentTarget.value)}}>
          <option value="">-- pick a model --</option>
          {this.props.computers.map(option => (
            <option key={option.name} value={option.name}>
              {option.name} ({option.year})
            </option>
          ))}
        </select>
      </form>
    );
  }
}
