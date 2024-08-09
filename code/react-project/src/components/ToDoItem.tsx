import Todo from '../models/todo';
import classes from './TodoItem.module.css';

type ToDoItemT = React.FC<{ todoItem: Todo, onClick: (todo: Todo) => void }>;

const ToDoItem: ToDoItemT = ({ todoItem }) => (
  <li className={classes.item} key={todoItem.id}>
    {todoItem.text}
  </li>
);

export default ToDoItem;
