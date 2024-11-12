import PropTypes from "prop-types";
import Article from '../data/Article';

function List(props) {
  
  const list = props.list;

  return (
    <div>
      <h1>Hello from component List!</h1>
      <ul>
        {list.map(item => <Item key = {item.getObjectId()} item = {item} />)}
      </ul>
    </div>
  );
}

function Item(props){
  
  const item = props.item;

  return (
    <li>
      <span>
        <a href={item.getUrl()}>{item.getTitle()} </a>
      </span>
      <span>{item.getAuthor()} </span>
      <span>{item.getNumComments()} </span>
      <span>{item.getPoints()} </span>
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
