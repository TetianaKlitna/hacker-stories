function Search({onSearch, searchValue}) {


  const handleChange = (event) => {
                                    event.preventDefault();
                                    onSearch(event);
                                  };

    return (
      <div>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value = {searchValue} onChange={handleChange}/>
      </div>
    );
  }

export default Search;