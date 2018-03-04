import React from 'react';

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