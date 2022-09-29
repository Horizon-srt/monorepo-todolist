import {FC} from 'react';
import ListItem from './ListItem';

interface TodoListProps {
  items: {
    content: String;
    status: boolean;
  }[],
};

const TodoList: FC<TodoListProps> = (data) => {
  const handleAllDone = () => {
    console.log("All of the items are selected.");
  };

  return (
    <section className='main'>
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={handleAllDone}/>
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {data.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content} status={item.status} />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;