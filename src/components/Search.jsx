import { useState } from "react";

function Search(props) {

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
                                    event.preventDefault();
                                    setSearchTerm(event.target.value); 
                                    props.onSearch(event);
                                  };

    return (
      <div>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange}/>
        <p>{searchTerm}</p>
      </div>
    );
  }

export default Search;