import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDogs, getBreedNames, searchByBreed, getDogImages } from './actions/index';
import SearchBar from './modules/Search';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAllDogs();
    this.props.getBreedNames();
  }

  onSearchChange(value){
    console.log(value)
    this.props.getDogImages(value);
  }

  render() {
    const {
      // dogs,
      // breeds,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar handleChange={(e) => this.onSearchChange(e.target.value || null) } />
        </header>

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
  searchByBreed,
  getDogImages
}
)(App);

export default DogApp;
