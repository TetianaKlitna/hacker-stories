//components
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState"
import { Fragment } from "react";

const title = "React";

const initialArticles = [
  {objectId:0, title:"React", url:"https://reactjs.org/", author:"Jordan Walke", numComments:3, points:4},
  {objectId:1, title:"Redux", url:"https://redux.js.org/", author:"Dan Abramov, Andrew Clark", numComments:2, points:5},
  {objectId:2, title:"React", url:"https://reactjs.org/", author:"Jordan Walke", numComments:3, points:4},
  {objectId:3, title:"Redux", url:"https://redux.js.org/", author:"Dan Abramov, Andrew Clark", numComments:2, points:5},
];


function App() {
  
  const [articlesList, setArticlesList] = useStorageState('articles', initialArticles);
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  const handleSearch = (event) => {
    const val = event.target.value;
    setSearchTerm(val); 
  }

  const handleRemove = (id) => {
    const newList = articlesList.filter((item) => item.objectId !== id);
    setArticlesList(newList);
  }

  const filteredArticles = articlesList.filter(article => article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  return (
    <Fragment>
      <h1>Hello, {title} !</h1>
      <InputWithLabel id = "search" value = {searchTerm} isFocused onInputChange = {handleSearch} >
      <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list = {filteredArticles} onRemove = {handleRemove}/>
    </Fragment>
  );
}

export default App;
