
function List({list}) {

  return (
    <div>
      <h1>Hello from component List!</h1>
      <ul>
        {list.map(obj => <Item key = {obj.objectId} item = {obj}/> )}
      </ul>
    </div>
  );
}

function Item({item}){

  return (
    <li key = {item.objectId}>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.numComments} </span>
      <span>{item.points} </span>
    </li>
    );

}

export default List;
