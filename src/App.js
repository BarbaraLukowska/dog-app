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
        <form className="Search" >
          <input
            type="text"
            placeholder="Search"
            ref={ (input) => {this.textInput = input}}
          />
          <input
            type="submit"
            value="Submit"
            onClick={(e) => this.handleClick(e)}
          />
        </form>
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
