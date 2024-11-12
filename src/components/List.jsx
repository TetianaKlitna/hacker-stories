import PropTypes from "prop-types";
import Article from '../data/Article';

function List(props) {
  
  const list = props.list;

  return (
    <div>
      <h1>Hello from component List!</h1>
      <ul>
        {list.map(item => <Item key = {item.objectID} item = {item} />)}
      </ul>
    </div>
  );
}

function Item(props){
  
  const item = props.item;

  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.num_comments} </span>
      <span>{item.points} </span>
    </li>
    );

}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.objectOf(Article)
  ),
};

Item.propTypes = {
   item: PropTypes.objectOf(Article),
};

export default List;
