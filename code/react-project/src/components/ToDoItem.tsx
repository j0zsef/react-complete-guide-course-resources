import { useContext } from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';
import { TodoContext } from '../store/todo-context';

type ToDoItemT = React.FC<{ todoItem: Todo }>;

const ToDoItem: ToDoItemT = ({ todoItem }) => {
  const todoCtx = useContext(TodoContext);

  const removeTodoItem = () => {
    todoCtx?.removeTodo(todoItem.id);
  };

  return (
    <li className={classes.item} key={todoItem.id}>
      <button className={classes.button} type="button" onClick={removeTodoItem}>
        {todoItem.text}
      </button>
    </li>
  );
};

export default ToDoItem;
