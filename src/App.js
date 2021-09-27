import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import SearchBar from "./SearchBar.js";
import EntryPerPage from "./EntryPerPage.js"
import Pagination from "./Pagination.js";
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


//task 2
function SearchBarFunc(value){
  console.log(value);
  console.log(searchQuery);
  //changes searchquery value to what user wrote
  setSearchQuery(value);
}

//task 3
function Entryperpagefunc(entriesVal){
  console.log(entriesVal);
  setPageSize(entriesVal);

}

//task 4
function PaginationFunc(numb){
  console.log(numb);
  console.log(pageNumber);
if(numb == "2"){
  setPageNumber(pageNumber+1);
                }
else if (numb == "1") {
  setPageNumber(pageNumber-1);
}

}



  return (
    <div className="App">
      <h1>Country lookup</h1>

      <SearchBar navn={SearchBarFunc}/>
      <Table apiData={apiData} />

      <EntryPerPage place={Entryperpagefunc}/>
      <Pagination pagenum={PaginationFunc}
      pageNumber={pageNumber}
      totPages={apiData.pager}/>


    </div>
  );
}

export default App;
