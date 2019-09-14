import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import { connect } from "react-redux";
import ModelDetails from "./components/Computer";
import PropTypes from "prop-types";

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
];

class App extends Component {
  static propTypes = {
    computers: PropTypes.array.isRequired
  };

  updateSelection = name => {
    const selected = data.find(el => el.name === name);
    
    this.props.dispatch({
      type: "SELECT_COMPUTER",
      payload: selected
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hello Examiners!</h2>
          {this.props.computers[0] === undefined ? (
            <h4>Select any computer model to add to your shopping list</h4>
          ) : (
            <p>you have selected {this.props.computers.length} items</p>
          )}
          <ModelDetails computers={this.props.computers} />
          <Form computers={data} updateSelection={this.updateSelection} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    computers: state.computers
  };
};

export default connect(mapStateToProps)(App);
