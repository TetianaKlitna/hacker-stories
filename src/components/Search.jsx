function Search(props) {


  const handleChange = (event) => {
                                    event.preventDefault();
                                    props.onSearch(event);
                                  };

    return (
      <div>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange}/>
        <p>{props.searchValue}</p>
      </div>
    );
  }

export default Search;