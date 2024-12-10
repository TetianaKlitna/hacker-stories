//components
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState"
import { Fragment } from "react";

const title = "React";

const articles = [
  {objectId:0, title:"React", url:"https://reactjs.org/", author:"Jordan Walke", numComments:3, points:4},
  {objectId:1, title:"Redux", url:"https://redux.js.org/", author:"Dan Abramov, Andrew Clark", numComments:2, points:5},
];


function App() {
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  const handleSearch = (event) => {
    const val = event.target.value;;
    setSearchTerm(val); 
  }

  const filteredArticles = articles.filter(article => article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  return (
    <Fragment>
      <h1>Hello, {title} !</h1>
      <InputWithLabel id = "search" value = {searchTerm} isFocused onInputChange = {handleSearch} >
      <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list = {filteredArticles} />
    </Fragment>
  );
}

export default App;
