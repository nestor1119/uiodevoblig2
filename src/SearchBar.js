
function SearchBar(props){
  let searchInputValue = "n";
  console.log(searchInputValue);
  console.log(props);
  return (<div className="searchBarClass">
   <input type="text" placeholder="Search" onChange={event => {searchInputValue= event.target.value}}/>
   <button className="searchButton" onClick={event =>{props.navn(searchInputValue)}}>Search</button>
          </div>);
}

export default SearchBar;
