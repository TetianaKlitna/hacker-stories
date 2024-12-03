//components
import Search from "./components/Search";
import List from "./components/List";
import React, { useState } from "react";

const title = "React";

const articles = [
  {objectId:0, title:"React", url:"https://reactjs.org/", author:"Jordan Walke", numComments:3, points:4},
  {objectId:1, title:"Redux", url:"https://redux.js.org/", author:"Dan Abramov, Andrew Clark", numComments:2, points:5},
];


function App() {
  
  const useStorageState = (key, initValue) => {

      const [value, setValue] = useState(localStorage.getItem(key)||initValue);

      React.useEffect(() => {
        localStorage.setItem(key, value);
      }, [value, key]);

      return [value, setValue];
  }
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  const handleSearch = (event) => {
    const val = event.target.value;;
    setSearchTerm(val); 
  }

  const filteredArticles = articles.filter(article => article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  return (
    <div>
      <h1>Hello, {title} !</h1>
      <Search searchValue = {searchTerm} onSearch = {handleSearch} />
      <hr />
      <List list = {filteredArticles} />
    </div>
  );
}

export default App;
