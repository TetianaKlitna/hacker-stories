import InputWithLabel from "./InputWithLabel";
function SearchForm({ searchTerm, handleSearchSubmit, handleSearchInput }) {
  return (
    <form onSubmit={handleSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button type="submit" disabled={!searchTerm}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
