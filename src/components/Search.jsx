import React from "react";

function Search() {

    let [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }

    return (
      <div>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange}/>

        <p>Searching for <strong>{searchTerm}</strong></p>
      </div>
    );
  }

export default Search;