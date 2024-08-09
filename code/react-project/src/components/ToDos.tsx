import React from 'react';
import Todo from '../models/todo';
import ToDoItem from './ToDoItem';
import classes from './Todos.module.css';

type ToDosT = React.FC<{ items: Todo[] }>;

const ToDos: ToDosT = ({ items }) => {

  const removeToDoHandler = (todo: Todo): void => {
    items = items.filter((item) => item.id !== todo.id);
  }


  return (
    <ul className={classes.todos}>
      {
        items.map((item) => (
          <ToDoItem todoItem={item} onClick={() => removeToDoHandler(item)} />
        ))
      }
    </ul>
  );
};

export default ToDos;
