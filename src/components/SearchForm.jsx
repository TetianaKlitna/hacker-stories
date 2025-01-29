import clsx from "clsx";
import styles from "./styles/SearchForm.module.css";
import InputWithLabel from "./InputWithLabel";

function SearchForm({ searchTerm, handleSearchSubmit, handleSearchInput }) {
  return (
    <form onSubmit={handleSearchSubmit} className={styles['search-form']}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button type="submit" disabled={!searchTerm} className={clsx(styles.button, styles.button_large)}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
