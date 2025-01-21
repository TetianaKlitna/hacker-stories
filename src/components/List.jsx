import styles from "./styles/List.module.css";
import { Fragment } from "react";
import Check from "../assets/check.svg?react";

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
    <li key={item.objectID} className={styles.item}>
      <Check height="18px" width="18px" />
      <span style={{ width: "40%"} }>
        <a href={item.url}>{item.title} </a>
      </span>
      <span style={{ width: "30%" }}>{item.author} </span>
      <span style={{ width: "10%" }}>{item.num_comments} </span>
      <span style={{ width: "10%" }}>{item.points} </span>
      <span style={{ width: "10%" }}>
        <button
          type="button"
          className={`${styles.button} ${styles.button_small}`}
          onClick={() => onRemoveItem(item)}
        >
          <strong>X</strong>
        </button>
      </span>
    </li>
  );
}

export default List;
