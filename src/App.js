import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDogs } from './actions/index';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAllDogs();
  }

  render() {

    const {
      dogs
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//     // dogs: state.data.dogs || []
//   }
// }

const DogApp = connect(
  null,
  {getAllDogs}
)(App);

export default DogApp;
