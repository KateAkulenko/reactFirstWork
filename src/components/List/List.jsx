import list from './List.data.js';

function List() {
  return (
    <ul>
      {list.map((item, index) => {
        return <li key={'list item - ' + item + index}>{item}</li>;
      })} 
    </ul>  
  );
}

export default List;