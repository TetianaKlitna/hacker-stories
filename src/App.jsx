//components
import Search from "./components/Search";
import List from "./components/List";

const title = "React";

const articles = [
  {objectId:0, title:"React", url:"https://reactjs.org/", author:"Jordan Walke", numComments:3, points:4},
  {objectId:1, title:"Redux", url:"https://redux.js.org/", author:"Dan Abramov, Andrew Clark", numComments:2, points:5},
];


const handleSearch = (event) => {
  console.log(event.target.value);
}


function App() {
  return (
    <div>
      <h1>Hello, {title} !</h1>
      <Search onSearch = {handleSearch} />
      <hr />
      <List list = {articles} />
    </div>
  );
}

export default App;
