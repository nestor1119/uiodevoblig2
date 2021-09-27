function Table(props) {
  //console.log(props.apiData);
//console.log(props.apiData.results);
  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
    // Write your code here:
  } else {
    const countries = props.apiData.results;
    const countriesJSX = countries.map((country) =>{
      //console.log(country);
      return(
        <tr>
          <td>{country.Country}</td>
          <td>{country.Continent}</td>
          <td>{country.Population}</td>
          <td>{country.PopulationGrowth}</td>
        </tr>
      )})
    return (
      <table>
        <tr>
        <th>Country</th>
        <th>Continent</th>
        <th>Population</th>
        <th>Population Growth</th>
        </tr>
        {countriesJSX}
      </table>

    )
  }
}

export default Table;
