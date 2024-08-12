import React, { useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import ToDoItem from './ToDoItem';
import classes from './Todos.module.css';

type ToDosT = React.FC;

const ToDos: ToDosT = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {
        todoCtx?.todos.map((item) => (
          <ToDoItem todoItem={item} />
        ))
      }
    </ul>
  );
};

export default ToDos;
