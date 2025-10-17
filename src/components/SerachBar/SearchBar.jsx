import React, { useEffect, useState} from 'react';





function SearchBar({ value, onChange }) {


  return (
    <>
      <form className='search-bar' onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter country name"
          className="search-input"
          value={value}
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default SearchBar;