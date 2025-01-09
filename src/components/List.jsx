import { Fragment } from "react";

function List({ list, onRemove }) {
  return (
    <Fragment>
      <h1>Hello from component List!</h1>
      <ul>
        {list.map((obj) => (
          <Item key={obj.objectID} item={obj} onRemoveItem={onRemove} />
        ))}
      </ul>
    </Fragment>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.num_comments} </span>
      <span>{item.points} </span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          <strong>X</strong>
        </button>
      </span>
    </li>
  );
}

export default List;
