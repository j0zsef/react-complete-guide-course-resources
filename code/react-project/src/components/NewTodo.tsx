import React, { useContext, useRef } from 'react';
import { TodoContext } from '../store/todo-context';

import classes from './NewTodo.module.css';

type NewTodoTT = React.FC;

const NewTodo: NewTodoTT = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (!enteredText || enteredText.trim().length === 0) {
      // Add your validation error handling here
      console.error('Input must be more than 1 character');
      return;
    }

    todoCtx?.addTodo(enteredText!);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">
        Todo Text
        <input type="text" id="text" ref={todoTextInputRef} required minLength={1} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
