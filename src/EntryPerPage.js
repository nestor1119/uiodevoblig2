function EntryPerPage(props){

  return(
    <div ClassName = "howManyPerPageBox1">
    <select name="perPage" id="entries" onChange={event => {props.place(event.target.value)}}>
    <option value="10">10</option>
    <option value="30">30</option>
    <option value="50">50</option>
  </select>
    </div>

  );
}

export default EntryPerPage;
