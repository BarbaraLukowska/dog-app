import React from 'react';

const SearchBar = ({handleChange}) => {
  return(
    <form className="Search" >
      <input 
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  )
}


export default SearchBar;