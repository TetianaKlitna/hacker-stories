//components
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState";
import { Fragment, useEffect, useReducer } from "react";
import { INITIAL_ARTICLES } from "./data";

const title = "React";

const getAsyncArticles = () =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { articlesList: INITIAL_ARTICLES } }),
      2000
    )
  );

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
          (curr_item) => curr_item.objectId !== action.payload.objectId
        ),
      };
    default:
      throw new Error();
  }
};

function App() {
  const [searchTerm, setSearchTerm] = useStorageState("search", title);
  const [articlesList, dispatchArticles] = useReducer(articlesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    dispatchArticles({ type: STORIES_ACTION_TYPE.fetch_init });
    getAsyncArticles()
      .then((result) => {
        dispatchArticles({
          type: STORIES_ACTION_TYPE.fetch_success,
          payload: result.data.articlesList,
        });
      })
      .catch(() =>
        dispatchArticles({ type: STORIES_ACTION_TYPE.fetch_failure })
      );
  }, []);

  const handleSearch = (event) => {
    const val = event.target.value;
    setSearchTerm(val);
  };

  const handleRemove = (item) => {
    dispatchArticles({ type: STORIES_ACTION_TYPE.remove_item, payload: item });
  };

  const filteredArticles = articlesList.data.filter(
    (article) =>
      article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
  console.log(articlesList.data);

  return (
    <Fragment>
      <h1>Hello, {title} !</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      {articlesList.isError && <p>Something go wrong...</p>}
      {articlesList.isLoading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : (
        <List list={filteredArticles} onRemove={handleRemove} />
      )}
    </Fragment>
  );
}

export default App;
