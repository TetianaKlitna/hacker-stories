//import styles from "./App.module.css";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState";
import { useEffect, useReducer, useCallback, useState } from "react";

const title = "React";
const apiUrl = "https://hn.algolia.com/api/v1/search?query=";

const STORIES_ACTION_TYPE = {
  fetch_init: "STORIES_FETCH_INIT",
  fetch_success: "STORIES_FETCH_SUCCESS",
  fetch_failure: "STORIES_FETCH_FAILURE",
  remove_item: "REMOVE_STORY",
};

const articlesReducer = (state, action) => {
  switch (action.type) {
    case STORIES_ACTION_TYPE.fetch_init:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case STORIES_ACTION_TYPE.fetch_success:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case STORIES_ACTION_TYPE.fetch_failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case STORIES_ACTION_TYPE.remove_item:
      return {
        ...state,
        data: state.data.filter(
          (curr_item) => curr_item.objectID !== action.payload.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const StyledContainer = styled.div`
  height: 100vw;
  padding: 20px;
  background: #83a4d4; /* fallback for old browsers */
  background: linear-gradient(to left, #b6fbff, #83a4d4);
  color: #171212;
`;

const StyledHeadlinePrimary = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
`;

function App() {
  const [searchTerm, setSearchTerm] = useStorageState("search", title);
  const [url, setUrl] = useState(`${apiUrl}${searchTerm}`);
  const [articlesList, dispatchArticles] = useReducer(articlesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const handleFetchStories = useCallback(async () => {
    if (!searchTerm) {
      return;
    }

    dispatchArticles({ type: STORIES_ACTION_TYPE.fetch_init });

    try {
      const result = await axios.get(url);

      dispatchArticles({
        type: STORIES_ACTION_TYPE.fetch_success,
        payload: result.data.hits,
      });
    } catch {
      dispatchArticles({ type: STORIES_ACTION_TYPE.fetch_failure });
    }
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleSearchInput = (event) => {
    const val = event.target.value;
    setSearchTerm(val);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefult();
    setUrl(`${apiUrl}${searchTerm}`);
  };

  const handleRemove = (item) => {
    dispatchArticles({ type: STORIES_ACTION_TYPE.remove_item, payload: item });
  };

  return (
    <StyledContainer>
      <StyledHeadlinePrimary>Hello, {title} !</StyledHeadlinePrimary>
      <SearchForm
        searchTerm={searchTerm}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchInput={handleSearchInput}
      />
      {articlesList.isError && <p>Something go wrong...</p>}
      {articlesList.isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : (
        <List list={articlesList.data} onRemove={handleRemove} />
      )}
    </StyledContainer>
  );
}

export default App;
