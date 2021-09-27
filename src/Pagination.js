function Pagination(props){
let pagenr = "2";
console.log(props.totPages);

if (!props.totPages) {
  // If the API request isn't completed return "loading...""
  return <p>Loading...</p>;

} else {


  return(
    <div class="pagination">
    {props.pageNumber != 1 && <button onClick={event =>{props.pagenum("1")}}>&laquo;</button>}
    {props.pageNumber != 4 && <button onClick={event =>{props.pagenum("2")}}>&raquo;</button>}

  </div>);
}

}

export default Pagination;
