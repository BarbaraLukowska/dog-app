import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDogs, getBreedNames, getDogImages } from './actions/index';
import Search from './modules/Search';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAllDogs();
    this.props.getBreedNames();
    this.props.getDogImages(this.props.breedName)
  }
  
  render() {
    const {
      // dogs,
      // breeds,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {/* <Search /> */}
        </header>
        <div> 

        </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//     dogs: state.data.dogs || [],
//     breeds: state.data.breeds || [],
//   }
// }

const DogApp = connect(
  null,
  {getAllDogs,
  getBreedNames,
  getDogImages}
)(App);

export default DogApp;
