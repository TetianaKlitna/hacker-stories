
function List({list, onRemove}) {

  return (
    <div>
      <h1>Hello from component List!</h1>
      <ul>
        {list.map(obj => <Item key = {obj.objectId} item = {obj} onRemoveItem = {onRemove}/> )}
      </ul>
    </div>
  );
}

function Item({item, onRemoveItem}){

  return (
    <li key = {item.objectId}>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.numComments} </span>
      <span>{item.points} </span>
      <span><button onClick={() => onRemoveItem(item.objectId)}><strong>X</strong></button></span>
    </li>
    );

}

export default List;
