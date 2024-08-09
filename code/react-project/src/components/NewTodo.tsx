import React, { useRef } from 'react';

import classes from './NewTodo.module.css';

type NewTodoTT = React.FC<{ onAddToDo: (todo: string) => void }>;

const NewTodo: NewTodoTT = ({ onAddToDo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (!enteredText || enteredText.trim().length === 0) {
      // Add your validation error handling here
      console.error('Input must be more than 1 character');
      return;
    }

    onAddToDo(enteredText!);
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
