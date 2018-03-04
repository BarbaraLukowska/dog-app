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
      images
    } = this.props;

    
    console.log('images', images);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar handleChange={(e) => this.onSearchChange(e.target.value || null) } />
        </header>
        <div>
          {
            images && images.map( (image) => <p>{image}</p>)
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    images: state.data.images || []
  }
}

const DogApp = connect(
  mapStateToProps,
  {getDogImages}
)(App);

export default DogApp;
