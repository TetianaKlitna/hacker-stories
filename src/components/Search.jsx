function Search() {

    const handleChange = (event) => {
       console.log(event);
       console.log(event.target.value);
    }

    return (
      <div>
        <h1>Search Element</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange}/>
      </div>
    );
  }

export default Search;