import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogImages } from './actions/index';

import './App.css';

class App extends Component {

  handleClick(e){
    this.props.getDogImages(this.textInput.value);
    e.preventDefault();
  }

  render() {

    const {
      images
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input
              id="breed"
              type="text"
              ref={ (input) => {this.textInput = input}}
            />
            <label htmlFor="breed">Breed name</label>
            <input
              type="submit"
              value="Search"
              onClick={(e) => this.handleClick(e)}
            />
          </form>
        </header>
        {images.length === 0
          ?
            <div>
              <p>
                {images}
              </p>
            </div>
          :
            <div className="dogs">
              {Array.isArray(images) && images.map( (image, i) => (
                  <div key={i} style={{backgroundImage: `url(${image})`}} className="dog" alt="doggy"/>
                ))}
            </div>
        }
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
