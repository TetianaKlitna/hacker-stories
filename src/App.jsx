//components
import Search from "./components/Search";
import List from "./components/List";
//classes
import Article from "./data/Article";

const title = "React";

const articles = [
  new Article(0, "React", "https://reactjs.org/", "Jordan Walke", 3, 4),
  new Article(1, "Redux", "https://redux.js.org/", "Dan Abramov, Andrew Clark", 2, 5),
];


function App() {
  return (
    <div>
      <h1>Hello, {title} !</h1>
      <Search />
      <hr />
      <List list = {articles} />
    </div>
  );
}

export default App;
