import React from "react";

function Search({onSearch, searchValue}) { 

  const handleChange = (event) => {
                                    event.preventDefault();
                                    onSearch(event);
                                  };

    return (
      <React.Fragment>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value = {searchValue} onChange={handleChange}/>
      </React.Fragment>
    );
  }

export default Search;