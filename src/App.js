import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import SearchBar from "./SearchBar.js";
function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); // Default = No search query
  const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
  const [pageSize, setPageSize] = useState(10);//default = 10 entries per page
  useEffect(() => {
    // All parameters are appended to this URL.
    let apiQuery = "https://dhis2-app-course-api.ifi.uio.no/api?";
    //add pageSize to the api request
    apiQuery = apiQuery + "pageSize=" + pageSize;
    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;
    }
    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber;

    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
      });
  }, [searchQuery, pageNumber, pageSize]); // Array containing which state changes that should re-reun useEffect()

function searchthing(){
//here we need to change searchquery value or state dunno
let searchInputValue = "n";
console.log(searchInputValue);
return(<div className="placehold">
<input type="text" placeholder="search1" onChange={event => {searchInputValue= event.target.value}}/>
<button className="searchButton1" onClick= {event =>{setSearchQuery(searchInputValue)}}>Search</button>
</div>
);
//<input type="text" placeholder="results per page" onChange={event => {setPageSize(event.target.value)}}/>



}

function howManyPerPage(){
return(
  <div ClassName = "howManyPerPageBox">
  <select name="perPage" id="entries" onChange={event => {setPageSize(event.target.value)}}>
  <option value="10">10</option>
  <option value="30">30</option>
  <option value="50">50</option>
</select>
  </div>

);
}
  return (
    <div className="App">
      <h1>Country lookup</h1>
      {searchthing()}
      <SearchBar/>
      <Table apiData={apiData} />
      {howManyPerPage()}

    </div>
  );
}

export default App;
