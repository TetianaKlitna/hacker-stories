//components
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState";
import { Fragment, useEffect, useState } from "react";
import { INITIAL_ARTICLES } from "./data";

const title = "React";

const getAsyncArticles = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: { stories: INITIAL_ARTICLES } }), 2000)
  );

function App() {
  const [articlesList, setArticlesList] = useStorageState("articles", []);
  const [searchTerm, setSearchTerm] = useStorageState("search", title);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAsyncArticles()
      .then((result) => {
        setArticlesList(result.data.stories);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleSearch = (event) => {
    const val = event.target.value;
    setSearchTerm(val);
  };

  const handleRemove = (id) => {
    const newList = articlesList.filter((item) => item.objectId !== id);
    setArticlesList(newList);
  };

  const filteredArticles = articlesList.filter(
    (article) =>
      article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

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
      {isError && <p>Something go wrong...</p>}
      {isLoading ? (
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
