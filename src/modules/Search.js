import React from 'react';

const SearchBar = ({handleChange, handleSubmit}) => {
  return(
    <form className="Search" onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  )
}


export default SearchBar;