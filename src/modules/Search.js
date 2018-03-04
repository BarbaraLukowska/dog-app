import React from 'react';
import { connect } from 'react-redux';
import { getDogImages } from '../actions/index';


const SearchBar = ({handleChange}) => {
  return(
    <div className="Search">
      <input 
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  )
}


export default SearchBar;