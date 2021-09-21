import { useState } from 'react';

function SearchBar(){

  return (<div className="searchBarClass">
   <input type="text" placeholder="Search"/>
   <button type="submit" class="searchButton">Search</button>
          </div>);
}

export default SearchBar;
