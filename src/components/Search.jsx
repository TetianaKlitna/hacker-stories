function Search(props) {


  const handleChange = (event) => {
                                    event.preventDefault();
                                    props.onSearch(event);
                                  };

    return (
      <div>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value = {props.searchValue} onChange={handleChange}/>
      </div>
    );
  }

export default Search;