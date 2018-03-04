import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogImages } from './actions/index';
import SearchBar from './modules/Search';

import './App.css';

class App extends Component {

  onSearchChange(value){
    this.props.getDogImages(value);
  }

  render() {

    const {
      breed
    } = this.props;
    console.log(breed);
    
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar handleChange={(e) => this.onSearchChange(e.target.value || null) } />
        </header>
        <div>
          {
            breed && breed.map( (b) => console.log(b))
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    breed: state.data.breed || null
  }
}

const DogApp = connect(
  mapStateToProps,
  {getDogImages}
)(App);

export default DogApp;
