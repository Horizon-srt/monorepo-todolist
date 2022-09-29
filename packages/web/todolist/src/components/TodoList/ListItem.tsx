import {FC} from 'react';

interface ListItemProps {
  key: number;
  content: String;
  status: boolean;
}

const ListItem: FC<ListItemProps> = (item) => {
  const handleSelectBox = () => {
    console.log("One item has been selected.");
  };
  const handleDeleteBox = () => {
    console.log("One item has been deleted.");
  }

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleSelectBox}/>
        <label>{item.content}</label>
        <button className="destroy" onClick={handleDeleteBox}></button>
      </div>
      <input className="edit" value="Hello World"/>
    </li>
  );
};

export default ListItem;