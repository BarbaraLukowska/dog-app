import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogImages } from './actions/index';
import SearchBar from './modules/Search';

import './App.css';

class App extends Component {

  onSearchChange(value){
    this.props.getDogImages(value);
  }

  submit(event){
    event.preventDefault();
  }

  render() {

    const {
      images
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            handleSubmit={() => this.submit()}
            handleChange={(e) => this.onSearchChange(e.target.value || null) } />
        </header>
        <div>
          {
            Array.isArray(images) && images.map( (image, i) => {
              return(
                <img key={i}src={image} />
              )
            })
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
